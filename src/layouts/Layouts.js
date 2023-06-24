import React from 'react'
import HeaderNav from './components/header/HeaderNav'
import Footers from './components/footer/Footer'
import SideBarNav from './components/sidebar/SideBarNav'

export default function Layouts(props) {
    return (
        <div id="main-layout">
            <HeaderNav />
            <SideBarNav/>

            <main className='mt-20 py-10'>
                {props.children}
            </main>
            
            <Footers />
        </div>
    )
}