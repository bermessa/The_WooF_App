import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import ContactUs from "./pages/contactus"


const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="{`${process.env.PUBLIC_URL}/contact`}" component={ContactUs} />
      </Switch>
    </Router>
);

export default App;
