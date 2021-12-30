import React, { ChangeEvent, ReactElement, useState, useContext, useEffect } from 'react'
import { InputBoxProps } from './Interfaces'
import { formContext } from '../Widgits/dyForm';

const defaultProps = {
    tag: "INPUTBOX",
    label: "",
    name: "no_name",
    value: null,
    placeholder: "Place this",
    type: "text",
    className: "",
    refId: null,
    disabled: false,
    validate: {
        min: null,
        max: null,
        maxWords: null,
        minWords: null,
        required: false
    },
    onChange: () => null,
    dataIndex: 0
}

function InputBox({ dataIndex ,...props }: InputBoxProps): ReactElement {

    const [state,setFormData]: any = useContext(formContext);
    const { type, placeholder, className, disabled, label,
        onChange, refId, value, name, validate } = props;
    const [val, setVal] = useState<any>(value);
    const [error, setError] = useState('');

    const handleOnChange = (event?: ChangeEvent<HTMLInputElement>) => {

        setVal(event?.target.value);
        onChange(event);

        isValidInput(event?.target.value);
    }

    useEffect(() => {     
        setVal(value);
        isValidInput(value?.toString());
    }, [value])

    const isValidInput = (value = '') => {
        const { min, max, maxWords, minWords, required }: any = validate;
        const clone = Object.assign([],state);

        let errMsg = '';
        if (required && value.length === 0)
             errMsg ='Required Field';
        if (min && type === 'number' && value < min)
             errMsg =`Minimum value is ${min}`;
        if (max && type === 'number' && value > max)
             errMsg =`Maximum value is ${max}`;
        if (minWords && value.length < minWords)
             errMsg =`Minimum length is ${minWords}`;
        if (maxWords && value.length > maxWords)
             errMsg =`Maximum length is ${maxWords}`;
        if(!errMsg) {
            /* Form Config */
            clone[dataIndex || 0].value = value;
            clone[dataIndex || 0].isValid = true
            setFormData(clone);
            setError(errMsg);
            return;
        }
        setError(errMsg);
        clone[dataIndex || 0].isValid = false
        setFormData(clone);
    }


    return (
        <div className='inputbox-container'>
            <label> {label} </label>
            <input
                className={'p-1 px-1.5 rounded-md outline-0 border border-slate-400' + className}
                { ...{ type, placeholder, disabled, name } }
                id={refId && refId}
                value={val}
                onChange={handleOnChange}
            />
            <small className='text-orange-700'> {error} </small>
        </div>
    )
}

InputBox.defaultProps = defaultProps
export default InputBox
