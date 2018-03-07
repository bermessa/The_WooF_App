import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import FullPage from "../../components/fullpage";
import TextContainer from "../../components/textcontainer";
import { Row, Col } from 'reactstrap'
import "../assets/css/pagestyle.css";

class LandingPage extends Component {
    render() {
        return (
            <div>
			    <Navbar/>
			    <FullPage>
			        <div className="section1">
			            <img src="../images/dog.jpeg" alt="dog" class="dogBackground"/>
			            
                        <div className="section1wrapper">
                            <div className="section1header font-effect-outline"> 
                                EVOLVING THE WAY PETS ARE CARED FOR 
                            </div>
                            <div>
                                <a href="https://itunes.apple.com/us/app/woof-care-dog-walking-more/id1261900748?ls=1&mt=8" target="_blank">
                                        <img src="images/app-store.png" alt="Apple Store Logo" className="appleImg"/>
                                </a>
                            </div>
                        </div>
                    </div>
			    </FullPage>

			    <TextContainer>
    			    <div className="section2">
    			     <p>About Us</p>
    			     <p>WooF! Is the Industry Leader in On-Demand and Scheduled Dog Care services. We use Cloud Technology designed to give dog owners the most efficient and affordable way to book verified pet care specialists in their area. Best part..? WooF! brings the specialists to you! Simply create a request by selecting one of 6 pet care services offered, choose your desired time and date(s) then sit back and relax as local pet care specialists place bids on your request in real-time! Up to 10 specialists will reach out and explain why they are a match made in heaven when it comes to taking care of your pooch! Select your favorite specialist based on their profile, bid price, and experience! See our features below for more information.</p>
    			    </div>
			    </TextContainer>
			</div>
        )
    }
}

export default LandingPage;
