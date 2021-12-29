import React, { ReactElement, createContext, useReducer, useEffect } from 'react'
import Elements from './elements'
import { FormProps } from './interfaces';
export const formContext: any = createContext({});

// export const dependOnListener = (detail: { refId: string, data: any }) => {
//     const event: any = new CustomEvent('dependOn', { detail });
//     document.dispatchEvent(event);
// }

const defaultProps = {
    elementsObj: [],
    children: null,
    onSubmit: (e?: any) => null
}

function DyForm(props: FormProps): ReactElement {

    const { elementsObj = [], onSubmit }: any = props;
    const [state, setFormData]: any = useReducer((state: any, action: any) => (
        { ...state, ...action }
    ), {});

    useEffect(() => {
        const initilize = elementsObj.reduce((acc: any, eleProp: any) => {
            const { name, label, placeholder, value } = eleProp;
            const key = name || label || placeholder || 'no_name';
            const isValidOrNot = value?.toString() ? [null, true] : [null, false];
            return  { ...acc, [key]: isValidOrNot };
        }, {});

        setFormData(initilize);


        /* Depend On Event Listener */
        // document.addEventListener('dependOn', (e?: any) => {
            // const { refId, data } = e.detail;
            // const newData:any = JSON.parse(JSON.stringify(formDetails));
            // const index: any = newData.findIndex((detail: any) => detail?.refId === refId);
            // newData[index].value = data;
            // setTimeout(() => {
            //     setFormDetails(newData);
            // }, 3000);
    
        // });

       
    }, [])



    const handleOnSubmit = (e?: any) => {
        e?.preventDefault();
        console.log(">>>>>>>>>>>>>>", state);

        onSubmit({ state });
    }

    const isFormValid = () => {
        const isValid = Object.values(state).flat() || [];
        return isValid.includes(false);
    }


    return (<formContext.Provider value={[state, setFormData]}>
        <form onSubmit={handleOnSubmit}>

            { elementsObj?.map((details: any, i: number) =>
                <Elements {...{ details }} key={i + 'ele'} />) }

            {props?.children}

            <button
                type='submit'
                className={isFormValid() ? 'cursor-no-drop' : ''}
                disabled={isFormValid()}>Save</button>

        </form>
    </formContext.Provider>)
}

DyForm.defaultProps = defaultProps;
export default DyForm;
