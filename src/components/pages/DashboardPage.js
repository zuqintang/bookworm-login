import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allSetsSelector } from "../../reducers/sets";
import AddSetCtA from "../ctas/AddSetCtA";
import { fetchSets } from "../../actions/sets";
import DatasetSelectPage from "../pages/DatasetSelectPage";

class DashboardPage extends React.Component {
  componentDidMount = () => this.onInit(this.props);
  onInit = props => props.fetchSets();
  render() {
    const { isConfirmed, sets } = this.props;
    console.log(sets[0]);
    if (sets.length !== 0) console.log(sets[0].sets);
    return (
      <div>
        {isConfirmed && <ConfirmEmailMessage />}
        {sets.length === 0 ? <AddSetCtA /> : <DatasetSelectPage data={sets} />}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  fetchSets: PropTypes.func.isRequired,
  sets: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    sets: allSetsSelector(state)
  };
}

export default connect(mapStateToProps, { fetchSets })(DashboardPage);
