import React, { ReactElement, useContext } from 'react'
import { DashboardContext } from '../Utils/contexts'
import Form from '../../../Widgits/Form'
import { FormConfig } from './Templates'
export function CenterContainer({ }: any ): ReactElement {

    const { state, dispatch } = useContext(DashboardContext)

    return (
        <div>
             <b>(Center)</b> <div>{state.content}</div>

             <Form {...FormConfig} />

        </div>
    )
}
