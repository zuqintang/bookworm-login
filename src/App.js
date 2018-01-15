import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import SetPage from "./components/pages/SetPage";
import NewSetPage from "./components/pages/NewSetPage";
import EditSetPage from "./components/pages/EditSetPage";
import GroupOfSetPage from "./components/pages/GroupOfSetPage";
import GroupPage from "./components/pages/GroupPage";
import ElementOfSetPage from "./components/pages/ElementOfSetPage";
import NewGroupPage from "./components/pages/NewGroupPage";
import ElementPage from "./components/pages/ElementPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation />}
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
    <UserRoute location={location} path="/sets" exact component={SetPage} />
    <UserRoute
      location={location}
      path="/sets/new"
      exact
      component={NewSetPage}
    />
    <UserRoute
      location={location}
      path="/sets/edit"
      exact
      component={EditSetPage}
    />
    <UserRoute
      location={location}
      path="/sets/group"
      exact
      component={GroupOfSetPage}
    />
    <UserRoute
      location={location}
      path="/sets/element"
      exact
      component={ElementOfSetPage}
    />
    <UserRoute
      location={location}
      path="/groups/new"
      exact
      component={NewGroupPage}
    />
    <UserRoute location={location} path="/groups" exact component={GroupPage} />
    <UserRoute
      location={location}
      path="/elements"
      exact
      component={ElementPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.username
  };
}

export default connect(mapStateToProps)(App);
