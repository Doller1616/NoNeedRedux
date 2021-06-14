import React, { createContext, useReducer } from 'react'
import { AccountReducer } from './reducer'
export const AccountContext = createContext<any>(null)

const AccountContextProvider = (props: any) => {

    const [state, dispatch] = useReducer<any>(AccountReducer, {
        id:1,
        address:"Govindpuram",
        name : "Center Content",
        content : "Any Content"
    });

    return (<div>
        <AccountContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AccountContext.Provider>
    </div>)
}
export default AccountContextProvider