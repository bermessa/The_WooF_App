import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Wrapper extends React.Component {

    render() {
        return (
            <Container className="textcontainer">
                {this.props.children}
            </Container>
        );
    }
}

Container.propTypes = {
    fluid: PropTypes.bool
    // applies .container-fluid class
};
