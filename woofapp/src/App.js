import React from 'react';
import { render } from 'react-dom';
import LandingPage from "./pages/landingpage";
import ContactPage from "./pages/contact";
import FAQPage from "./pages/faq";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";
import CancellationPage from "./pages/cancellation";
import ScrollToTop from "./components/scroll";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => (
  <Router>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={LandingPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={ContactPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/faq`} component={FAQPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/terms`} component={TermsPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/privacy`} component={PrivacyPage} />
        <Route exact path={`${process.env.PUBLIC_URL}/cancellation`} component={CancellationPage} />
      </Switch>
    </Router>
);

<ScrollToTop/>;

export default App;
