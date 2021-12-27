import React, { ReactElement, useContext } from 'react'
import DashboardContextProvider from '../Utils/contexts'
import SideMenu from '../../../Widgits/SideMenu'
import { Header } from '../../../Widgits/Header'
import { Footer } from '../../../Widgits/Footer'
import { CenterContainer } from '../Helpers/CenterContainer'
import './stylr.css'


export default function Dashboard({}: any): ReactElement {
    return (
        <div className='dashboardContainer'>
                <div className="header" style={{backgroundColor:'gray'}}>
                <Header></Header>
                </div>
                <div className="sideMenu" style={{backgroundColor:'pink'}}>
                <SideMenu></SideMenu>
                </div>
                <div className="center" style={{backgroundColor:'yellowgreen'}}>
                 <CenterContainer/>
                </div>
                <div className="footer" style={{backgroundColor:'navy'}}>
                <Footer></Footer>
                </div>
        </div>
    )
}
