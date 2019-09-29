import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Footer extends Component {
    render() {
        return (
            <MDBFooter color="stylish-color-dark" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="12">
                            <h3 className="title text-center">A Big Thanks to Our Elder Tree Sponsors</h3>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <a href='https://nasa.gov' target='_blank' className='text-center'>
                                <img width='300px' src='https://pearadox5414.weebly.com/uploads/7/6/7/0/76704875/1205312_orig.png' alt='NASA'></img>
                            </a>
                        </MDBCol>
                        <MDBCol>
                            <a href='https://www.firstinspires.org/' target='_blank' className='text-center'>
                                <img width='300px' src='/img/First-Vertical.png' alt='FIRST'></img>
                            </a>
                        </MDBCol>
                        <MDBCol>
                            <a href='https://www.boeing.com/' target='_blank' className='text-center'>
                                <img width='300px' src='https://pearadox5414.weebly.com/uploads/7/6/7/0/76704875/download_orig.png' alt='Boeing'></img>
                            </a>
                        </MDBCol>
                        <MDBCol>
                            <a href='https://twc.texas.gov/' target='_blank' className='text-center'>
                                <img width='300px' src='/img/TWC.png' alt='FIRST'></img>
                            </a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/Pearadox"> Pearadox 5414 </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}