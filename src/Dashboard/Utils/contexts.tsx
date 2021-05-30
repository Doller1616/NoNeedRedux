import React, { createContext, useReducer } from 'react'
import { DashboardReducer } from './reducer'
export const DashboardContext = createContext<any>(null)

const DashboardContextProvider = (props: any) => {

    const [state, dispatch] = useReducer<any>(DashboardReducer, {
        id:1,
        address:"Govindpuram"
    });

    return (<div className='dashboardContainer'>
        <DashboardContext.Provider value={{ state, dispatch }}>
            {props.children}
        </DashboardContext.Provider>
    </div>)
}
export default DashboardContextProvider