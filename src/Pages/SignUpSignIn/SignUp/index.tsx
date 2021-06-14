import React from 'react'

export function SignUp(props:any) {
 const gotoDashboard = () => {
   props.history.push('/dashboard')
  }
    return (
        <div>
          Sign Up
          <br/>
          <button onClick={gotoDashboard} >Dashboard</button>
        </div>
    )
}
