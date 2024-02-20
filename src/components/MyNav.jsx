import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
const MyNav = () => {
    return (
        <Navbar color="info" className='mb-5'>
            <NavbarBrand href="/" className='text-white'>
                Conductor
            </NavbarBrand>
        </Navbar>
    )
}

export default MyNav    