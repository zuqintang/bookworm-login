import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import NewElementPage from "./NewElementPage";
import * as action from "../../actions/sets";

class ElementOfSetPage extends React.Component {
  state = {
    data: { rows: [], total: 0 },
    activeRow: 0,
    param: {
      standard: -1,
      study: -1,
      limit: 10,
      offset: 0,
      keyword: ""
    }
  };
  setParam = param => this.setState({ param });
  setActiveRow = activeRow => {
    this.setState({ activeRow });
    this.props.selectSet({ activeRow });
  };
  getActiveRow = () => this.state.activeRow;
  submit = param =>
    this.props.fetchSets(param).then(res => this.setState({ data: res }));
  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <NewElementPage />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
ElementOfSetPage.propTypes = {
  fetchSets: PropTypes.func.isRequired,
  selectSet: PropTypes.func.isRequired
};

export default connect(null, {
  fetchSets: action.fetchSets,
  selectSet: action.selectSet
})(ElementOfSetPage);
