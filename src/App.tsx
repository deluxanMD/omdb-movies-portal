import React, { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import TopHeader from "./components/TopHeader";

// Pages
import Home from "./pages/Home";

const App = () => {
  return (
    <Fragment>
      <TopHeader />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
