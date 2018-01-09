import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allSetsSelector } from "../../reducers/sets";
import AddSetCtA from "../ctas/AddSetCtA";
import { fetchSets } from "../../actions/sets";
import DatasetTable from "../tabels/DatasetTable";

class DashboardPage extends React.Component {
  state = {
    param: {
      standard: -1,
      study: -1,
      limit: 10,
      offset: 0,
      keyword: ""
    }
  };
  componentDidMount = () => this.onInit(this.props);
  onInit = props => props.fetchSets(this.state.param);
  submit = param => this.props.fetchSets(param);
  render() {
    const { isConfirmed, sets } = this.props;
    const total = Math.ceil(sets.length / 10);
    const data = {};
    data.total = total;
    data.rows = sets;
    const { param } = this.state;
    return (
      <div>
        {isConfirmed && <ConfirmEmailMessage />}
        {sets.length === 0 ? (
          <AddSetCtA />
        ) : (
          <DatasetTable data={data} submit={this.submit} param={param} />
        )}
      </div>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  sets: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    sets: allSetsSelector(state)
  };
}

export default connect(mapStateToProps, { fetchSets })(DashboardPage);
