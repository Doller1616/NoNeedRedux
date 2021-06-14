import React from 'react'

export function SignIn(props:any) {
  const gotoAdminAccount = () => {
    props.history.push('/account/admin')
   }

   const gotoUserAccount = () => {
    props.history.push('/account/user')
   }

   const gotoDashboard = () => {
    props.history.push('/signup')
   }
    return (
        <div>
          Sign In
          <br/>
          <br/>
          <button onClick={gotoAdminAccount} >Admin Account</button>
          <br/>
          <br/>
          <button onClick={gotoUserAccount} >User Account</button>
          <br/>
          <br/>
          <button onClick={gotoDashboard} >SignUp</button>
          <br/>
          <br/>
        </div>
    )
}
