import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer_temp.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout