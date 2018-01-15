import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Label, Grid } from "semantic-ui-react";
import SetPageForm from "../forms/SetPageForm";
import SetTable from "../tables/SetTable";
import * as actions from "../../actions/sets";
import { DATA_GROUP_TYPE } from "../../types";

class GroupPage extends React.Component {
  state = {
    data: { rows: [], total: 0 },
    activeRow: 0,
    param: {
      standard:
        this.props.location.query == null
          ? -1
          : this.props.location.query.standard,
      study: -1,
      limit: 10,
      offset: 0,
      keyword: "",
      DATA_SET_TYPE: DATA_GROUP_TYPE
    }
  };
  componentDidMount = () => this.onInit(this.state.param);
  onInit = param => this.submit(param);

  setParam = param => this.setState({ param });
  setActiveRow = activeRow => {
    this.setState({ activeRow });
    this.props.selectSet({ activeRow });
  };
  getActiveRow = () => this.state.activeRow;

  submit = param =>
    this.props.fetchSets(param).then(res => this.setState({ data: res.data }));
  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { param } = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Label as="a" color="teal" ribbon>
              筛选条件
            </Label>
            <SetPageForm
              submit={this.submit}
              setParam={this.setParam}
              param={param}
            />
          </Grid.Column>
          <Grid.Column width={16}>
            <SetTable
              data={this.state.data}
              submit={this.submit}
              param={param}
              setActiveRow={this.setActiveRow}
              getActiveRow={this.getActiveRow}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
GroupPage.propTypes = {
  fetchSets: PropTypes.func.isRequired,
  selectSet: PropTypes.func.isRequired
};

export default connect(null, {
  fetchSets: actions.fetchSets,
  selectSet: actions.selectSet
})(GroupPage);
