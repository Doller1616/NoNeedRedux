import React, { ReactElement, createContext, useReducer, useEffect, useState } from 'react'
import Elements from './elements'
import { FormProps } from './interfaces';
export const formContext: any = createContext({});

export const dependOnListener = (detail: { refId: string, data: any }) => {
    const event: any = new CustomEvent('dependOn', { detail });
    document.dispatchEvent(event);
}

const defaultProps = {
    elementsObj: [],
    children: null,
    onSubmit: (e?: any) => null
}

function DyForm(props: FormProps): ReactElement {

    const [state, setFormData]: any = useState(props?.elementsObj);
    const [isFormInvalid, setIsFormInvalid]:any = useState(true);

    useEffect(() => {
       const initilize = props?.elementsObj?.reduce((acc: any, eleProps: any) => {
            if(eleProps?.value?.toString())
                eleProps.isValid = true; 
            else
                eleProps.isValid = false;  
            
            return  [...acc, eleProps ];
        }, []);

        setFormData(initilize);


        /* Depend On Event Listener */
        document.addEventListener('dependOn', (e?: any) => {
            dependOnUpdateForm(e.detail)
        });
    }, [])

    useEffect(() => {
        const isValid = state.some((prop:any)=> !prop.isValid );
        setIsFormInvalid(isValid);
    }, [state])

    const dependOnUpdateForm = (details:any) => {
        const { refId, data } = details;
        const clone:any = Object.assign([], state);
        const elementDetail: any = clone.find((detail: any) => detail?.refId === refId);
        elementDetail.value = data;
        setFormData(clone);
    }

    const handleOnSubmit = (e?: any) => {
        e?.preventDefault();
        props?.onSubmit({ state });
    }

    return (<formContext.Provider value={[state, setFormData]}>
        <form onSubmit={handleOnSubmit}>

            { state?.length && state?.map((details: any, i: number) =>
                <Elements {...{ details }} index={i} key={i+'ele'}/>) }

            {props?.children}

            <button
                type='submit'
                className={isFormInvalid ? 'cursor-no-drop' : ''}
                disabled={isFormInvalid}>Save</button>

        </form>
    </formContext.Provider>)
}

DyForm.defaultProps = defaultProps;
export default DyForm;
