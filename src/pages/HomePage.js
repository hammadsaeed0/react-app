import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
// pages
import FrontPage from "./FrontPage";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";

// components
import Preloader from "../components/Preloader";

const RouteWithLoader = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
    );
  };

  
const HomePage = () => (
    <Switch>
      <RouteWithLoader exact path={Routes.FrontPage.path} component={FrontPage} />
      <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
      <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    </Switch>
);
export default HomePage;