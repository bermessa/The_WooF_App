import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, CardFooter } from "reactstrap";
import "../assets/css/compstyle.css";

export default class Footer extends Component {
    render() {
        return (

            <CardFooter id="footer">
                <Row>
                <Col xs="4" sm="4" md="4" className="copyright">
                    <p >
                        © 2017 Woof, Inc. <br/>
                        All rights reserved.
                    </p>
                </Col>
                
                <Col xs="4" sm="4" md="4" >
                    <p className="socialMediaContainer">
                        <a href="https://www.facebook.com/woofcareapp/" target="_blank"><img src="social_images/facebook.png" alt="facebookIcon" className="socialImg" /></a>
                        <a href="https://twitter.com/thewoofapp" target="_blank"><img src="social_images/twitter.png" alt="twitterIcon" className="socialImg" /></a>
                        <a href="https://www.instagram.com/thewoofapp/?hl=en" target="_blank"><img src="social_images/instagram.png" alt="instagramIcon" className="socialImg" /></a>
                        </p>
                </Col>
                
                <Col xs="4" sm="4" md="4" >
                    <p className="linksContainer">
                        <Link to="/terms">Terms & Conditions</Link> <br/>
                        <Link to="/privacy">Privacy Policy</Link> <br/>
                        <Link to="/cancellation">Cancellation Policy</Link>
                    </p>
                </Col>
                
                </Row>
            </CardFooter>

        );
    }
}
