import React, { createContext, useReducer, useState } from 'react';

export const formContext = createContext({});


const FormContextProvider = (props: any) => {

    const [state, dispatch] = useReducer<any>((state: any, action: any) => {
        const [key, value]: any = Object.entries(action).flat();

        switch (key) {
            case 'FIELDS_VALUES':
                state['FIELDS_VALUES'] = { ...state['FIELDS_VALUES'], ...value }
                return state
            case 'ARE_FIELDS_VALID':
                state['ARE_FIELDS_VALID'] = { ...state['ARE_FIELDS_VALID'], ...value }
                return state
            case 'REMOVE_FIELDS_VALID':
                const [thisKey,] = Object.keys(value)
                delete state?.['ARE_FIELDS_VALID']?.[thisKey]
                return state
            default:
                return state
        }
    }, {});

    return (
        <formContext.Provider value={[state, dispatch]}>
            {props.children}
        </formContext.Provider>
    )



}
export default FormContextProvider