
export interface FormProps {

    elementsObj?:[{
        tag: 'INPUTBOX' | 'CHECKBOX' | 'DATEPICKER' | 'DATERANGEPICKER' | 'RADIO',
        name: string,
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
        onChange?:(e?:any)=> any   
    }],
    children?: any,
    onSubmit?:(e?:any)=> null, 
    onReset?:(e?:any)=> null, 
    onCancel?:(e?:any)=> null

}