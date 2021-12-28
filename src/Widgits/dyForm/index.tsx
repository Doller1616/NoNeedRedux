import React, { ReactElement, createContext, useState, useReducer, useEffect } from 'react'
import Elements from './elements'
import { FormProps } from './interfaces';
export const formContext: any = createContext({});

const defaultProps = {
    elementsObj: [],
    children: null,
    onSubmit: (e?: any) => null
}

function DyForm(props: FormProps): ReactElement {

    const { elementsObj = [], onSubmit }: any = props;

    const [state, setFormData]:any = useReducer( (state: any, action: any) => (
        { ...state, ...action }
    ), {});

    useEffect(() => {
     const initilize = elementsObj.reduce((acc:any , eleProp:any)=>{
            const { name, label, placeholder } = eleProp;
            const key = name || label || placeholder || 'no_name'
            return {...acc , [key] : [null, false]};
        },{});

    setFormData(initilize);
    }, [])


    const handleOnSubmit = (e?: any) => {
        e?.preventDefault();
        console.log(">>>>>>>>>>>>>>",state);
        onSubmit({ state });
    }

    const isFormValid = () => {
       const isValid = Object.values(state).flat() || [];    
       return isValid.includes(false);
    }

    return (<formContext.Provider value={[ state, setFormData ]}>
        <form onSubmit={handleOnSubmit}>

            {elementsObj?.map((details: any, i: number) =>
                <Elements {...{ details }} key={i + 'ele'} />)}

            { props?.children }

            <button 
            type='submit'
            className={ isFormValid() ? 'cursor-no-drop' : '' }
            disabled={ isFormValid() }>Save</button>
            
        </form>
    </formContext.Provider>)
}

DyForm.defaultProps = defaultProps;
export default DyForm;
