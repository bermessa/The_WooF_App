import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import TextContainer from "../../components/textcontainer";
import TitleHeader from "../../components/titleheader";
import Footer from "../../components/footer";
import { Row, Col } from 'reactstrap';
import "../assets/css/pagestyle.css";

class TermsPage extends Component {
    render() {
        return (
            <div>
			    <Navbar/>

    			    <TitleHeader>Terms</TitleHeader>
    			        <TextContainer>
            			    <div className="section2">
                			    Secure Cloud Technology

                                On-Demand video of your pup at any time during a service!
                                
                                Push notifications to see; when a service starts/ends, new requests, and new bids.
                                
                                GPS that allows you to see the distance and location of your pups walk in real time!
                                
                                Background Check Verified Pet Care Specialists
                                
                                No cash needed! Safe and secure payment processing
                                
                                In-App messaging and video
                                
                                Two-Way rating and review system
                                
                                Rebook your favorite specialist for any service
            			    </div>
    			        </TextContainer>

			    <Footer/>
			</div>
        );
    }
}

export default TermsPage;
