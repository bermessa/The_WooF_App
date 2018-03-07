import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
}
from 'reactstrap';
import "../assets/css/compstyle.css";

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md" fixed-top>
                    <NavbarBrand href="/" className="mr-auto">
                        <img src="./images/bluelogo.png" alt="logo" />
                    </NavbarBrand>
                
                    <NavbarToggler onClick={this.toggle} />
                    
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#" style={{color: 'white'}}>Components</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="#" style={{color: 'white'}}>Github</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="#" style={{color: 'white'}}>Components</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink href="#" style={{color: 'white'}}>Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
