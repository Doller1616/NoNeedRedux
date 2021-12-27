import React, { memo, useEffect, useState, useContext } from 'react';
import { validateInput } from '../Helpers/inputValidators';
import { formContext } from '../Utils/formContext';

const defaultProps = {
    uniqueId: "ageId",
    element: "inputbox",
    type: "text",
    defaultValue: "",
    heading: "",
    placeholder: "",
    classes: "",

    // min: { length: null, msg: "" },
    // max: { length: null, msg: "" },
    // regex: { reg: null, msg: "" },
    // mandatory: { require: false, msg: "" },

    // isEnable: true
    // depend_on: ["dobId"],
}

const InputBox: any = memo((props: any) => {
    const { uniqueId } = props
    if (!Boolean(uniqueId)) return <div>Element's 'uniqueId' is missing</div>;
    const [errorMsg, setErrorMsg] = useState<string>("")
    const [value, setValue] = useState<string>(props?.defaultValue)
    const [state, dispatch] = useContext<any>(formContext)
    const star: any = { color: 'red', position: 'absolute', top: '-10%', right: '-7%' }
    const defaultStyle: any = {
        minHeight: '2rem', borderRadius: '0.5rem', border: '.1rem solid #a5a4a4',
        outline: 'none', fontSize: '1rem', padding: '.3rem', lineHeight: '2rem'
    }

    useEffect(() => {
        // Add Values and Validations
        dispatch({ "FIELDS_VALUES": { [uniqueId]: props?.defaultValue } })
    }, [])

    useEffect(() => {
        validateInput(props, value, resultCb);
    }, [value])

    const resultCb = (msg = "", errorStatus = true) => {
        setErrorMsg(msg)
        const status = errorStatus ? 'REMOVE_FIELDS_VALID' : 'ARE_FIELDS_VALID'
        dispatch({ [status] : { [uniqueId]: errorStatus } });
    }

    useEffect(() => {
        console.log("*****", state);
    }, [state?.FIELDS_VALUES])

    const handelOnChange = (field: string) => ({ target }: any) => {
        // (target?.value === "") && validation(props, target?.value); // isMandatory empty Check
        setValue(target?.value);
        dispatch({ 'FIELDS_VALUES': { [field]: target?.value } })
    }

    return (<div style={{ display: 'flex', flexDirection: 'column', padding: '.5rem' }}
        className={props?.classes}>

        <span style={{ fontWeight: "bolder", alignSelf: 'flex-start', position: 'relative' }}>
            {props?.heading}
            {props?.mandatory?.require && <div style={star}>*</div>}
        </span>
        <input
            id={uniqueId}
            type={props?.type}
            value={value}
            width="100%"
            height="100%"
            style={defaultStyle}
            placeholder={props?.placeholder}
            onChange={handelOnChange(uniqueId)}
        />
        <span style={{ alignSelf: 'flex-start', color: 'red' }}>{errorMsg}</span>
    </div>)

})

InputBox.defaultProps = defaultProps
export default InputBox