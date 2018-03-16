import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, CardFooter } from "reactstrap";
import "../assets/css/compstyle.css";

export default class Footer extends Component {
    render() {
        return (

            <CardFooter className="footer">
                <Row>
                <Col xs="4" sm="4" md="4" >
                    <p className="copyright">
                        © 2017 Woof, Inc. <br/>
                        All rights reserved.
                    </p>
                </Col>
                
                <Col xs="4" sm="4" md="4" >
                    <p className="socialMediaContainer">
                        Social Media
                    </p>
                </Col>
                
                <Col xs="4" sm="4" md="4" >
                    <p className="linksContainer">
                        <Link to="/terms">Terms</Link>
                    </p>
                </Col>
                
                </Row>
            </CardFooter>

        );
    }
}
