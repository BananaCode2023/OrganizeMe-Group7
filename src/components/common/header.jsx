import React from 'react'
import {useState} from 'react';
import {  MDBIcon } from "mdb-react-ui-kit";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    UncontrolledDropdown
  } from 'reactstrap';
import '../../css/header.css'
import omWhiteLogo from '../../assets/omWhiteLogo.png'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    const [deviceWidth, _] = useState(0)
    
    return(
      <>
        {/* <div className='navbar-container'> */}
          <Navbar expand={deviceWidth} className='navbar-container'>
            <a href="/">
              <div className='nav-logo2'></div>
              <img src={omWhiteLogo} alt="OrganizeMe-Logo" id='nav-logo'/>
            </a>

            <div className='nav-links'>
              <NavLink href='' id='feat'>
                Features
              </NavLink>
              <NavLink href='' id='about'>
                About
              </NavLink>
              <NavLink href='' id='login'>
                Login
              </NavLink>
            </div>

            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar className='nav-dropdown'>
              <Nav className="burger-menu" navbar>
                <div className='burger-menu-container'>
                  <NavItem>
                    <NavLink href='' id='feat'>
                      Features
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='' id='about'>
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href='' id='login'>
                      Login
                    </NavLink>
                  </NavItem>
                </div>
              </Nav>
            </Collapse>
          </Navbar>
        {/* </div> */}
      </>
    )
}

export default Header;