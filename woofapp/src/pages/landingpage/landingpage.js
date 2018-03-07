import React, { Component } from 'react';
import Navbar from "../../components/navbar";
import FullPage from "../../components/fullpage"
import "../assets/css/pagestyle.css";

class LandingPage extends Component {
    render() {
        return (
            <div>
			    <Navbar/>
			    <FullPage>
			        <div class="section1">
                        <div class="sectionHeader font-effect-outline"> 
                            EVOLVING THE WAY PETS ARE CARED FOR 
                        </div>
                        
                        <div>
                            <a href="https://itunes.apple.com/us/app/woof-care-dog-walking-more/id1261900748?ls=1&mt=8" target="_blank"><img src="images/app-store.png" alt="Apple Store Logo"/>
                            </a>
                        </div>
                    </div>
			    </FullPage>

			</div>
        )
    }
}

export default LandingPage;
