
import React from "react";
import { Col, Row, Card, Image, Button } from '@themesberg/react-bootstrap';
import {  ProjectTrackerCounts } from "../../components/Widgets";
import profileImg from "../../assets/img/team/avatar-1.png";

const Offer = () => {
    // const user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
        <Row className="mt-4 p-4">

            <Col xs={12} xl={12} className="mb-4">
                <Row>
                    <Col xs={12} xl={8} className="mb-4">
                        <Row>
                            <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                            <h1 className="h2 heading36">Anna Adome, Your Receive and offer!</h1>
                            <p className="project-subheading">Review the contract terms for your fixed-price offer From Smith James.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} xl={7} md={7} className="d-xl-flex align-items-center mt-2 mb-3">
                                <div className="user-avatar mx-3" style={{width: 'width: 2.5rem'}}>
                                    <div>
                                        <Image src={profileImg} alt="Profile Image" className="user-avatar mx-auto xl-avatar rounded-circle" />
                                    </div>
                                </div>
                                <div className="file-field">
                                    <div className="d-flex justify-content-xl-center ms-xl-3">
                                        <div className="d-flex">
                                            <div className={"d-md-block text-start mx-2"} >
                                                <h6 className="job-like-title mb-1 mx-1">Smith James</h6>
                                                <p className="job-title mb-1 mx-1">About the client</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={5} xl={5} >
                                <Button className=" m-1 proposal-cancelBtn mt-3">Chat with Smith James</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} xl={12} >
                                <h6 className="job-like-title submit-project-heading2">3D Renders and Amazon Product Store images/Video</h6>
                            </Col>
                        </Row>
                        <Row className="d-flex mt-3">
                            <Col xs={6} sm={8} md={9} xl={9}>
                                <h6 className="mb-0 review-text">Bid</h6>
                                <p className="review-text review-text-gry mt-1">
                                    (What the client will see)
                                </p>
                            </Col>
                            <Col  xs={6} sm={4} md={3} xl={3}>
                                <p className="review-text review-text-gry mt-2">
                                    $100.00
                                </p>
                            </Col>
                        </Row>
                        <Row className="d-flex mt-3">
                            <Col xs={6} sm={8} md={9} xl={9}>
                                <p className="review-text review-text-gry mt-1">
                                    10% Service Fee 
                                </p>
                            </Col>
                            <Col  xs={6} sm={4} md={3} xl={3}>
                                <p className="review-text review-text-gry mt-2">
                                    -$10.00
                                </p>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="d-flex mt-3">
                            <Col xs={6} sm={8} md={9} xl={9}>
                                <p className="review-text review-text-gry mt-1">
                                    Expected Amount You’ll Receive
                                </p>
                            </Col>
                            <Col  xs={6} sm={4} md={3} xl={3}>
                                <p className="review-text review-text-gry mt-2">
                                $90.00
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} xl={12} >
                                <h4 className="mb-0 job-like-title">Hi Anna Adome!</h4>
                                <Col xs={12} sm={12} md={12} >
                                    <p className="proposal-detail">I Hope this messae finds you well. My name is Smith James. and I am the owner of Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} xl={12} >
                                    <p className="proposal-detail text-center review-text-gry">Once You accept, you can begin working right away.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="mt-3">
                                <Button className=" m-1 proposal-cancelBtn">Decline Offer</Button>
                                <Button className="m-1 proposal-submitBtn">Accept Offer</Button>
                            </Col>
                        </Row>
                    </Col>
                    {/* Right side bar */}
                    <Col xs={12} xl={4}>
                    <Row>
                        <Col xs={12} className="mb-4">
                        <Card border="light" className="shadow-sm">
                            <Card.Body>
                            <ProjectTrackerCounts/>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </>
  );
};
export default Offer;
