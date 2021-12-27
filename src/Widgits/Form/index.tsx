import React, { memo, useEffect, useState } from 'react';
import constants from './Utils/constants';
import { InputBox } from './Elements';
import FormProvider from './Utils/formContext'

const defaultProps = {
    columns: 0,
    elements: { a: 1 },
    children: null
}

const Form: any = memo((props: any) => {

    const { inputbox } = constants;
    const [formFields, setFormFields] = useState<any>(null)

    useEffect(() => {
        console.log("props", props);
        createFormUI(props)
    }, [])

    const elementAndProperty = (config: any, index: number) => {
        const element = config?.element
        switch (element) {
            case inputbox:
                return <InputBox key={`inputBox${index}`} {...config} />
            default:
                return <span>UnKnown Element</span>
        }
    }

    const createFormUI = (props: any) => {
        const fields = props?.elements.map((item: any, i: number) => elementAndProperty(item, i));
        setFormFields(fields)
    }

    return (<div>
        <form style={{ display: 'grid', gridColumn: props?.columns }}>
            <FormProvider>
                {formFields}
                {props?.children}
            </FormProvider>
        </form>
    </div>)

})

Form.defaultProps = defaultProps
export default Form