import React, { ReactElement } from 'react'
import SignInSignUpContextProvider from './Utils/contexts'
import { Redirect, Route, Switch } from 'react-router-dom'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export default function SignUpSignInModule({ }: any): ReactElement {
    return (
        <div>
            <SignInSignUpContextProvider>
                <Switch>
                    <Route path="/" exact component={SignIn} />  {/*signin */}
                    <Route path="/signup" exact component={SignUp} />
                </Switch>
            </SignInSignUpContextProvider>
        </div>
    )
}
