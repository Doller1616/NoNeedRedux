import React, { ReactElement } from 'react'
import AccountContextProvider from './Utils/contexts'
import AdminAccount from './AdminAccount'
import UserAccount from './UserAccount'
import { Route , Switch} from 'react-router-dom'

export default function Dashboard({}: any): ReactElement {
    return (
        <div>
            <AccountContextProvider>
             <Switch>
                 <Route path="/account/admin" exact component={AdminAccount} />
                 <Route path="/account/user" exact component={UserAccount} />
             </Switch>
            </AccountContextProvider>
        </div>
    )
}
