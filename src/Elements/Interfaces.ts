
export interface InputBoxProps {
    tag: 'INPUTBOX',
    label?: string,
    value?: string,
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
    onChange? : any
}