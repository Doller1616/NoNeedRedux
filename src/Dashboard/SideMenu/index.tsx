import React, { ReactElement, useContext } from 'react'
import { DashboardContext } from '../Utils/contexts'


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

    return (
        <div>
            MMMMMMMMMMMMMM
            {/* <br/>
            <br/>
            <button onClick={name}>Name Cahnge</button>
            <br/>
            <br/>
            <button onClick={header}>Header Cahnge</button>
            <br/>
            <br/>
            <button onClick={footer}>footer Cahnge</button>
            <br/>
            <br/>
            <br/>
             <b>(Dashboard)</b> <div>Name: {state.name}</div> */}
        </div>
    )
}
