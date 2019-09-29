import React, { Component } from 'react'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBPopover, MDBBtn, MDBPopoverHeader, MDBPopoverBody } from
"mdbreact";

export default class RobotCarousel extends Component {

    render() {
        return (
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://pearadox5414.weebly.com/uploads/7/6/7/0/76704875/2019robotpicture_orig.png"
                                    alt="First slide"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">2019 - Waste Management</h3>
                                <MDBPopover
                                placement='top'
                                popover
                                clickable
                                id='pop1'>
                                    <MDBBtn>Learn more</MDBBtn>
                                    <div>
                                        <MDBPopoverBody>
                                            Waste Management was named after the climbing mechanism, which resembled the flipping movement of a dumpster truck.
                                            Waste Management was a very successful robot, being finalist Alliance Captains in multiple district events, and acquiring 2 Autonomous Awards and 1 Engineering Inspiration Award.
                                            During the World Championship, Waste Management was a division finalist, and was picked second by the second alliance.
                                        </MDBPopoverBody>
                                    </div>
                                </MDBPopover>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://pearadox5414.weebly.com/uploads/7/6/7/0/76704875/editor/2018robotpicture_1.jpg?1562560691"
                                    alt="Second slide"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">2018 - Scorpion</h3>
                                <p>Learn More</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img
                                    className="d-block w-100"
                                    src="https://pearadox5414.weebly.com/uploads/7/6/7/0/76704875/2018robotpicture_orig.jpg"
                                    alt="Third slide"
                                />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h3 className="h3-responsive">2017 - Mal-FUNK-tion</h3>
                                <p>Learn More</p>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        );
    }
    
}
