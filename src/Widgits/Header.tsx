import React, { ReactElement, useContext, useEffect } from 'react'
import { DashboardContext } from '../Pages/Dashboard/Utils/contexts'

export  function Header(props:any): ReactElement {
    const { state, dispatch } = useContext(DashboardContext)

    // useEffect(() => {
    //     alert("Address updated Header" + JSON.stringify(state))
    //  }, [state.address])

    return (
        <div>
            <b>(Header)</b> <div>Address: {state.address}</div>
        </div>
    )
}
