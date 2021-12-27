import React, { ReactElement } from 'react'
import Elements from './elements'
import { FormProps } from './interfaces'

const defaultProps = {
    elementsObj : [],
    children : null,
    onSubmit : (e:SubmitEvent) => null   
}

function DyForm(props: FormProps): ReactElement {
    const { elementsObj = [] } = props;
    return (
        <form onSubmit={ props?.onSubmit }>
         { elementsObj?.map((details,i)=> <Elements {...{details}} key={i+'ele'} />) }
         {/* OTHER ELEMENTS */}
        { props?.children }
        </form>
    )
}

DyForm.defaultProps = defaultProps;
export default DyForm;
