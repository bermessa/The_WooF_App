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
    			                <img src="undraw_images/cautiousdog.svg" alt="Cautious Dog"/><br/>
                                <h1>CONTACT US</h1>
                                <h4>We would love to hear from you</h4><br/>
                                <strong><h5>support@thewoofapp.com</h5></strong>
                                <br/><br/><br/><br/>
    			            </div>
    			        </TextContainer>

			    <Footer/>
			</div>
        );
    }
}

export default ContactPage;
