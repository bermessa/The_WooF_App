import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import TextContainer from "../../components/textcontainer";
import TitleHeader from "../../components/titleheader";
import Footer from "../../components/footer";
import { Row, Col } from 'reactstrap';
import "../assets/css/pagestyle.css";

class ContactPage extends Component {
    render() {
        return (
            <div>
			    <Navbar/>

    			    <TitleHeader>Contact Info</TitleHeader>
    			        <TextContainer>
    			            <div className="section2">
                                Contact Us
    			            </div>
    			        </TextContainer>

			    <Footer/>
			</div>
        );
    }
}

export default ContactPage;
