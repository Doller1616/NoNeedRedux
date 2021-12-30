import React, { ReactElement } from 'react'
import DyForm from '../../../Widgits/dyForm'
import { InputBox } from '../../../Elements/index'
import { admissionForm } from '../../../Widgits/dyForm/sample'

export function CenterContainer({ }: any ): ReactElement {

const handleOnChange = (e?:React.ChangeEvent<HTMLInputElement>) =>{
     console.log('data',e);
     
}

const onSubmitForm = (e:any) =>{
    console.log("OOOoooo",e);
    
}
    return (
        <div>
            <DyForm elementsObj={admissionForm} onSubmit={onSubmitForm}>
                    
                </DyForm>
                {/* <InputBox 
                     type="text" 
                     value="Tanaya"
                     validate={{
                         required:true
                     }}
                     onChange={handleOnChange} /> */}
        </div>
    )
}
