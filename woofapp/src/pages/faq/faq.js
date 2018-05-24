import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Navbar from "../../components/navbar";
import TextContainer from "../../components/textcontainer";
import Footer from "../../components/footer";
import "../assets/css/pagestyle.css";


export default class FAQPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
			    <Navbar/>
    		        <TextContainer>
    		            <p className="FAQpage"> Currently under construction </p>
        </TextContainer>
    <Footer/>
</div>
    );
  }
}
