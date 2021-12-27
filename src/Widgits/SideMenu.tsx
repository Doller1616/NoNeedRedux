import React, { ReactElement, useContext } from 'react'
import { DashboardContext } from '../Pages/Dashboard/Utils/contexts'


export default function Sidemenu({ }: any ): ReactElement {

    const { state, dispatch } = useContext(DashboardContext)

    const name = () => {
        dispatch({ type: 'ADD_NAME', name: "Surbhi" })
    }

    const header = () => {
        dispatch({ type: 'ADD_ADDRESS', address: "Sadarpur" })
    }

    const footer = () => {
        dispatch({ type: 'ADD_ID', id: 2 })
    }

    const centerContent = () => {
        dispatch({ type: 'ADD_CONTENT', content: "I am playing Center forword" })
    }

    return (
        <div>
            <br/>
            <br/>
            <button onClick={name}>Name Cahnge</button>
            <br/>
            <br/>
            <button onClick={centerContent}>Center Cahnge</button>
            <br/>
            <br/>
            <button onClick={header}>Header Cahnge</button>
            <br/>
            <br/>
            <button onClick={footer}>footer Cahnge</button>
            <br/>
            <br/>
            <br/>
             <b>(Sidemenu)</b> <div>Name: {state.name}</div>
        </div>
    )
}
