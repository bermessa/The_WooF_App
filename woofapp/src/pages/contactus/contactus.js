import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import { Row, Col } from 'reactstrap'
import "../assets/css/pagestyle.css";

class ContactUs extends Component {
    render() {
        return (
            <div>
			    <Navbar/>
			    Contact Us
			</div>
        )
    }
}

export default ContactUs;
