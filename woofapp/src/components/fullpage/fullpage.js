import React, { Component } from 'react';
import { Row, Col } from 'reactstrap'
import "../assets/css/compstyle.css";

class FullPage extends Component {
    render() {
        return (
            <Row>
                <Col xs="12" sm="12" md="12" >
                    <div id="FullPage">
                        {this.props.children}
                    </div>
                </Col>
            </Row>
        );
    }
}

export default FullPage;
