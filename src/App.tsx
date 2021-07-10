import React, { lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

const DashboardModule = lazy(() => import('./Pages/Dashboard/dashboard.routing'))
const AccountModule = lazy(() => import('./Pages/Account/account.routing'))
const SignUpSignInModule = lazy(() => import('./Pages/SignUpSignIn/signupsignin.routing'))

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback="...Loading">
            <Route path="/" component={SignUpSignInModule} />
            <Route path="/dashboard" component={DashboardModule} />
            <Route path="/Account" component={AccountModule} />
        </Suspense>
      </BrowserRouter>
    </div>

  )
}

export default App
