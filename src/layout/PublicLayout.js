import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MyNav from '../components/MyNav'

const PublicLayout = () => {
    return (
        <>
            <MyNav/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default PublicLayout