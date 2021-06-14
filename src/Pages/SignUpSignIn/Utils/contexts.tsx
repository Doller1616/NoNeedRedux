import React, { createContext, useReducer } from 'react'
import { DashboardReducer } from './reducer'
export const SignInSignUpContext = createContext<any>(null)

const SignInSignUpContextProvider = (props: any) => {

    const [state, dispatch] = useReducer<any>(DashboardReducer, {
        id:1,
        address:"Govindpuram",
        name : "Center Content",
        content : "Any Content"
    });

    return (<div>
        <SignInSignUpContext.Provider value={{ state, dispatch }}>
            {props.children}
        </SignInSignUpContext.Provider>
    </div>)
}
export default SignInSignUpContextProvider