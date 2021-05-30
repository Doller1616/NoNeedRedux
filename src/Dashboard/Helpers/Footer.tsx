import React, { ReactElement, useContext, useEffect } from 'react'
import { DashboardContext } from '../Utils/contexts'

export function Footer(props:any): ReactElement {
    const { state, dispatch } = useContext(DashboardContext)


    useEffect(() => {
       alert("ID updated Footer" + JSON.stringify(state))
    }, [state.id])


    return (
        <div>
            <b>(Footer)</b> <div>id: {state.id}</div>
        </div>
    )
}
