import React, { ReactElement } from 'react'
import DashboardContextProvider from './Utils/contexts'
import SideMenu from './SideMenu'
import { Header } from './Helpers/Header'
import { Footer } from './Helpers/Footer'
import './stylr.css'

export default function Dashboard({}: any): ReactElement {
        
    return (
        <div>
            <DashboardContextProvider>
                <div className="header" style={{backgroundColor:'gray'}}>
                <Header></Header>
                </div>
                <div className="sideMenu" style={{backgroundColor:'pink'}}>
                <SideMenu></SideMenu>
                </div>
                <div className="center" style={{backgroundColor:'yellowgreen'}}>
                  CENTER
                </div>
                <div className="footer" style={{backgroundColor:'navy'}}>
                <Footer></Footer>
                </div>
            </DashboardContextProvider>
        </div>
    )
}
