import React from 'react';
import { render } from 'react-dom';
import LandingPage from "./pages/landingpage";
import ContactPage from "./pages/contact";
import TermsPage from "./pages/terms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
  <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
        <Route exact path={process.env.PUBLIC_URL + '/contact'} component={ContactPage} />
        <Route exact path={process.env.PUBLIC_URL + '/terms'} component={TermsPage} />
      </Switch>
    </Router>
);

export default App;
