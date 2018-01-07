import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allSetsSelector } from "../../reducers/sets";
import AddSetCtA from "../ctas/AddSetCtA";

const DashboardPage = ({ isConfirmed, sets }) => (
  <div>
    {!isConfirmed && <ConfirmEmailMessage />}
    {sets.length === 0 && <AddSetCtA />}
  </div>
);

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  sets: PropTypes.shape({
    length: PropTypes.number.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    sets: allSetsSelector(state)
  };
}

export default connect(mapStateToProps)(DashboardPage);
