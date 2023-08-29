import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
// pages
import FrontPage from "./FrontPage";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import ClientDashboard from "./client_dashboard/Dashboard";
import ClientProposal from "./client_dashboard/Proposal";
import PostJob from "./client_dashboard/PostJob";
import ClientProfile from "./client_dashboard/Profile";
import TalentSearch from "./client_dashboard/FindTalent";

// extra pages 

import NotFoundPage from "./NotFound";
import ServerError from "./ServerError";

// components
import Preloader from "../components/Preloader";
import TopNavbar from '../components/TopNavbar';
import Footer from "../components/Footer";

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

  const RouteWithSidebarClient = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    const localStorageIsSettingsVisible = () => {
      return localStorage.getItem('settingsVisible') === 'false' ? false : true
    }
  
    const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);
  
    const toggleSettings = () => {
      setShowSettings(!showSettings);
      localStorage.setItem('settingsVisible', !showSettings);
    }
  
    return (
      <Route {...rest} render={props => (
        <>
          <Preloader show={loaded ? false : true} />
          {/* <Sidebar /> */}
  
            <TopNavbar />
          <main className="content">
            {/* <Navbar /> */}
            <Component {...props} />
            <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
          </main>
        </>
      )}
      />
    );
  };


const HomePage = () => (
    <Switch>
      <RouteWithLoader exact path={Routes.FrontPage.path} component={FrontPage} />
      <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
      <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
      <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
      <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

      <RouteWithSidebarClient exact path={Routes.ClientDashboard.path} component={ClientDashboard} />
      <RouteWithSidebarClient exact path={Routes.ClientProposal.path} component={ClientProposal} />
      <RouteWithSidebarClient exact path={Routes.PostJob.path} component={PostJob} />
      <RouteWithSidebarClient exact path={Routes.ClientProfile.path} component={ClientProfile} />
      <RouteWithSidebarClient exact path={Routes.TalentSearch.path} component={TalentSearch} />
      
    </Switch>
);
export default HomePage;