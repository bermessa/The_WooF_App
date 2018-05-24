import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import TextContainer from "../../components/textcontainer";
import Footer from "../../components/footer";
import { Row, Col } from 'reactstrap';
import "../assets/css/pagestyle.css";

class ContactPage extends Component {
    render() {
        return (
            <div>
			    <Navbar/>
    			        <TextContainer>
    			            <div className="contactus">
    			                <br/>
    			                <img src="undraw_images/cautiousdog.svg" alt="Cautious Dog"/><br/><br/>
                                <h1>CONTACT US</h1>
                                <h4>We would love to hear from you</h4><br/><br/>
    			            </div>
    			            
    			            <div className="contactInfo">
    			                <br/>
                                <strong><h5><span><img src="social_images/location.png" alt="Location" width="25px" /></span>&nbsp;&nbsp;Denver, Colorado</h5></strong>
                                <strong><h5><span><img src="social_images/mail.png" alt="Email Us" width="25px" /></span>&nbsp;&nbsp;support@thewoofapp.com</h5></strong>
                                <br/><br/><br/>
    			            </div>
    			        </TextContainer>

			    <Footer/>
			</div>
        );
    }
}

export default ContactPage;
