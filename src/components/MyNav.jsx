import React from 'react'
import { Link } from 'react-router-dom'
import { Nav ,Navbar, NavbarBrand } from 'reactstrap'


const MyNav = () => {
    return (
        <Navbar className='mb-5 bg-fondos'>
            <Nav>
                <Link to={'/Inicio'}>
                    <NavbarBrand className='text-white'>
                        <p>
                            Conductor
                        </p>
                    </NavbarBrand>
                </Link> 
            </Nav>          
        </Navbar>
    )
}

export default MyNav    