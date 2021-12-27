import React, { ReactElement } from 'react'
import DyForm from '../../../Widgits/dyForm'
import { InputBox } from '../../../Elements/index'
import { admissionForm } from '../../../Widgits/dyForm/sample'

export function CenterContainer({ }: any ): ReactElement {

const handleOnChange = (e?:React.ChangeEvent<HTMLInputElement>) =>{
     console.log('data',e);
     
}

    return (
        <div>
            <DyForm elementsObj={admissionForm}>
                    <InputBox 
                     type="text" 
                     value="Tanaya"
                     onChange={handleOnChange} />
                </DyForm>
        </div>
    )
}
