import React, { ReactElement } from 'react'
import DashboardContextProvider from './Utils/contexts'
import Container from './Container'
import { Route , Switch} from 'react-router-dom'

export default function Dashboard({}: any): ReactElement {
    return (
        <div>
            <DashboardContextProvider>
             <Switch>
                 <Route path="/dashboard" exact component={Container} />
             </Switch>
            </DashboardContextProvider>
        </div>
    )
}
