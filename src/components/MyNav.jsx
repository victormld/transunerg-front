import React from 'react'
import { Link } from 'react-router-dom'
import { Nav ,Navbar, NavbarBrand } from 'reactstrap'


const MyNav = () => {
    return (
        <Navbar className='bg-infos mb-5'>
            <Nav>
                <Link to={'/Inicio'}>
                    <NavbarBrand>
                        <p className='mx-3'>
                            Conductor
                        </p>
                    </NavbarBrand>
                </Link> 
                <Link to={'/'}>
                    <NavbarBrand>
                        <p className='mx-3'>
                            Inicio
                        </p>
                    </NavbarBrand>
                </Link>
            </Nav>          
        </Navbar>
    )
}

export default MyNav    