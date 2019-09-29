import React, { Component } from 'react'
import { MDBMask, MDBView,  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from 'mdbreact'
import { ReactRouter as Router } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

export default class FullPageIntro extends Component {
    render() {
        return (
                        <MDBView src="img/Pearadox-Team.jpg">
                            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                                <h2>Pearadox 5414 Robotics Team</h2>
                                <h5>When you scroll down it will disappear</h5>
                                <br />
                                <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
                            </MDBMask>
                        </MDBView>
            
        )
    }
} 