
export interface InputBoxProps {
    tag:string,
    name?:string,
    label?: string,
    value?: string | number,
    placeholder?: string,
    type?: 'number' | 'text',
    refId?: string,
    className?: string,
    dependOnRefId?: string,
    disabled?: true | false,
    validate?: {
        min?: number,
        max?: number,
        maxWords?: number,
        minWords?: number,
        required?: true | false
    },
    onChange? : any,
    dataIndex? : number //form dataList index of the object 
}