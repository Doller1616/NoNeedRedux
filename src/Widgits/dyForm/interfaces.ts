import { FormEvent } from "react";

export interface FormProps {

    elementsObj?:[{
        tag: 'INPUTBOX' | 'CHECKBOX' | 'DATEPICKER' | 'DATERANGEPICKER' | 'RADIO',
        label?:string,
        placeholder?:string,
        type?:'number' | 'text',
        refId?:string,
        className?: string,
        dependOnRefId?:string,
        disabled?: true | false,
        validate?: {
            min?: number,
            max?: number,
            maxWords?: number,
            minWords?: number,
            required?: true | false
        },
        onChange?:(e?:InputEvent)=> any   
    }],
    children?: any,
    onSubmit?:(e?:FormEvent)=> any, 
    onReset?:(e?:FormEvent)=> any, 
    onCancel?:(e?:FormEvent)=> any

}