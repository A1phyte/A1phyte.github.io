import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import '../css/Navbar.css'

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
    } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    

    toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen })

    render() {
        let home = <MDBNavItem onClick={() => location.reload()}><MDBNavLink to='/'>Home</MDBNavLink></MDBNavItem>
        let robots = <MDBNavItem onClick={() => location.reload()}><MDBNavLink to='/robots.html'>Robots</MDBNavLink></MDBNavItem>
        let joining = <MDBNavItem onClick={() => location.reload()}><MDBNavLink to='/joining.html'>Joining</MDBNavLink></MDBNavItem>
        let forms = <MDBNavItem onClick={() => location.reload()}><MDBNavLink to='/forms.html'>Forms</MDBNavLink></MDBNavItem>
        let email = <MDBNavItem onClick={() => window=window.open('mailto:pearlandfrc@gmail.com')}><MDBNavLink to=''>Email</MDBNavLink></MDBNavItem>

        switch (this.props.activePage) {
            case 'home':
                home = <MDBNavItem active><MDBNavLink to='/'>Home</MDBNavLink></MDBNavItem>
                break
            case 'robots':
                robots = <MDBNavItem active><MDBNavLink to='/robots.html'>Robots</MDBNavLink></MDBNavItem>
                break
            case 'joining':
                joining = <MDBNavItem active><MDBNavLink to='/joining.html'>Joining</MDBNavLink></MDBNavItem>
                break
            case 'forms':
                forms = <MDBNavItem active><MDBNavLink to='/forms.html'>Forms</MDBNavLink></MDBNavItem>
                break

            default:
                break
        }

        return (
            <div>
                <Router>
                    <MDBNavbar color='teal darken-4' dark expand='md'>
                        <MDBNavbarBrand>
                            <a href='/'>
                                <img width='150px' 
                                src='/img/Logo.png' 
                                alt='Team 5414 Pearadox Logo'/>
                            </a>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav left>
                                {home}
                                {robots}
                                {joining}
                                {forms}
                                {email}
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <a href='https://github.com/pearadox' target='_blank' color='white' className='icon'>
                                        <MDBIcon fab icon='github' color='white' />
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a href='https://www.facebook.com/FRC5414' target='_blank' color='white' className='icon'>
                                        <MDBIcon fab icon='facebook' color='white' />
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a href='https://www.youtube.com/user/pearlandfrc' target='_blank' color='white' className='icon'>
                                        <MDBIcon fab icon='youtube' color='white' />
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a href='https://twitter.com/FRC5414' target='_blank' color='white' className='icon'>
                                        <MDBIcon fab icon='twitter' color='white' />
                                    </a>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a href='https://www.instagram.com/pearadox5414/' target='_blank' color='white' className='icon'>
                                        <MDBIcon fab icon='instagram' color='white' />
                                    </a>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </Router>
            </div>
        )
    }
}
