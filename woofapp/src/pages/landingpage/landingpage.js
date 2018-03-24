import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import TextContainer from "../../components/textcontainer";
import TitleHeader from "../../components/titleheader";
import ServiceCard from "../../components/servicecard";
import Footer from "../../components/footer";
import {
    Row,
    Col,
    Card,
    CardImg,
    CardTitle,
    CardBody,
    Button,
    CardText,
    CardDeck,
    CardSubtitle
}
from 'reactstrap';
import "../assets/css/pagestyle.css";

export default class LandingPage extends React.Component {


    render() {
        return (
            <div>
			    <Navbar/>
			        <div className="section1">
			            <img src="../images/mtndog.jpg" alt="dog" class="dogBackground"/>
			            
                        <div className="section1wrapper">
                            <div className="section1header font-effect-outline"> 
                                EVOLVING THE WAY PETS ARE CARED FOR 
                            </div>
                            <div>
                                <a href="https://itunes.apple.com/us/app/woof-care-dog-walking-more/id1261900748?ls=1&mt=8" target="_blank">
                                        <img src="app_images/app-store.png" alt="Apple Store Logo" className="appleImg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    
			        <TextContainer>
			            <Row className="aboutus">
			                <Col xs="12" sm="12" md={{ size: 10, offset: 1 }}> 
			                    <h1>Introducing WooF!</h1>
			                    <p>WooF! Is the <strong><span style={{color: '#7ea1c9'}}>Industry Leader</span></strong> in On-Demand and Scheduled Dog Care services. We use Cloud Technology designed to give dog owners the most <strong><span style={{color: '#7ea1c9'}}>efficient and affordable</span></strong> way to book verified <strong><span style={{color: '#7ea1c9'}}>pet care specialists</span></strong> in their area.</p>
			                    
			                    <p>Love working with dogs? You can apply to be a specialist in the WooF! Care App. <strong><span style={{color: '#7ea1c9'}}>Be your own boss</span></strong> and start earning today!</p>
			                    
			                    <p>
                                    <a href="https://itunes.apple.com/us/app/woof-care-dog-walking-more/id1261900748?ls=1&mt=8" target="_blank">
                                            <img src="app_images/app-store.png" alt="Apple Store Logo" className="appleImgInAboutUs"/>
                                    </a>			                    
			                    </p>
	                        </Col>
			            </Row>
			        </TextContainer>
    			        
                    <TitleHeader>Services</TitleHeader>
    			        <TextContainer>
    			            <div className="servicesContainer">
    			            
                                <div id="servicesImg">
                                    <img src="app_images/screen.png" alt="Screen" class="servicesImg"/>
                                </div>
                                
                                <div>
                                    <h3 className="servicesOffered">
                                    <strong>On-Demand and Scheduled:</strong><br/>
                                    <span className="checkmark">&#10003;</span> Dog Walking <br/>
                                    <span className="checkmark">&#10003;</span> Dog Sitting <br/>
                                    <span className="checkmark">&#10003;</span> Dog Boarding <br/>
                                    <span className="checkmark">&#10003;</span> Dog Training <br/>
                                    <span className="checkmark">&#10003;</span> Dog Grooming <br/>
                                    <span className="checkmark">&#10003;</span> Drop-In
                                    </h3>
                                </div>
                            </div>
    			        </TextContainer>
    			        
    			    <TitleHeader>Features</TitleHeader>
    			        <TextContainer>
            			    <CardDeck classsName="cardDeckContainer">
            			    <Card body className="text-center">
                                <CardImg top width="100%" src="undraw_images/swipeprofile.svg" alt="Card image cap" class="serviceImg"/>
                                <CardBody>
                                  <CardTitle>Personally Choose your Specialist</CardTitle>
                                  <CardText>Up to 10 specialists will reach out and explain why they are a match. Select your favorite based on their profile, bid price, and experience.</CardText>
                                </CardBody>
                            </Card>
                              
            			    <Card body className="text-center">
                                <CardImg top width="100%" src="undraw_images/collaboration.svg" alt="Card image cap" />
                                <CardBody>
                                  <CardTitle>Collaboration and Communication</CardTitle>
                                  <CardText>Enable notifications to place new requests, see new bids, and updates on when a service starts/ends. Rebook your favorite specialist or send them an in-app message.</CardText>
                                </CardBody>
                              </Card>
                              
                              <Card body className="text-center">
                                <CardImg top width="100%" src="undraw_images/map.svg" alt="Card image cap" />
                                <CardBody>
                                  <CardTitle>Real Time Video and GPS Map</CardTitle>
                                  <CardText>Watch an On-Demand video of your pup at any time during a service, or track the distance and location of your pups walk through our GPS Tracking system.</CardText>
                                </CardBody>
                              </Card>
                              
                               <Card body className="text-center">
                                <CardImg top width="100%" src="undraw_images/security.svg" alt="Card image cap" />
                                <CardBody>
                                  <CardTitle>100% Secure Transactions</CardTitle>
                                  <CardText>All specialists are background check verified. Feel even safer with our two-way rating/review system. Also no cash needed with our safe payment processor.</CardText>
                                </CardBody>
                              </Card>
                              
                            </CardDeck>
    			        </TextContainer>

			    <Footer/>
			</div>
        );
    }
}
