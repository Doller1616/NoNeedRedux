import React, { ChangeEvent, ReactElement, useState } from 'react'
import { InputBoxProps } from './Interfaces'

const defaultProps = {
    tag: "INPUTBOX",
    label: "",
    value: "",
    placeholder: "Place this",
    type: "text",
    className: "",
    refId: null,
    dependOnRefId: null,
    disabled: false,
    validate: {
        min: null,
        max: null,
        maxWords: null,
        minWords: null,
        required: true
    },
    onChange: () => null
}

function InputBox(props: InputBoxProps): ReactElement {

const { type, placeholder, className, disabled,
        onChange, refId, dependOnRefId, value  } = props;

const [val, setVal] = useState<any>(value);

const handleOnChange = (event?:ChangeEvent<HTMLInputElement>) => {
    const dependOnEle : any = dependOnRefId && document.getElementById(dependOnRefId);        
    setVal(event?.target.value)
    onChange({ event, dependOnEle });
}


    return (
        <div className='inputbox-container'>
            <label> {props?.label} </label>
            <input className={ 'p-1 px-1.5 rounded-md outline-0 border border-slate-400' + className }
              {...{ type, placeholder, disabled }}
              id={ refId && refId }
              value = { val }
              onChange={handleOnChange}
            />
        </div>
    )
}

InputBox.defaultProps = defaultProps
export default InputBox
