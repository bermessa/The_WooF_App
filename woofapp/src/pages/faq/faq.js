import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import TextContainer from "../../components/textcontainer";
import TitleHeader from "../../components/titleheader";
import Footer from "../../components/footer";
import { Row, Col } from 'reactstrap';
import "../assets/css/pagestyle.css";

class FAQPage extends Component {
    render() {
        return (
            <div>
			    <Navbar/>

    			    <TitleHeader>Contact Info</TitleHeader>
    			        <TextContainer>
    			            <div className="section2">
                                FAQ
    			            </div>
    			        </TextContainer>

			    <Footer/>
			</div>
        );
    }
}

export default FAQPage;
