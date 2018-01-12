import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Label, Grid } from "semantic-ui-react";
import SetPageForm from "../forms/SetPageForm";
import DatasetTable from "../tabels/DatasetTable";
import { search } from "../../actions/dataset";
import * as actions from "../../actions/sets";

class SetPage extends React.Component {
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
  componentDidMount = () => this.onInit(this.state.param);
  onInit = param => this.submit(param);

  setParam = param => this.setState({ param });
  setActiveRow = activeRow => {
    this.setState({ activeRow });
    this.props.selectSet({ activeRow });
  };
  getActiveRow = () => this.state.activeRow;

  submit = param =>
    this.props.search(param).then(res => this.setState({ data: res }));
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
            <SetPageForm submit={this.submit} setParam={this.setParam} />
          </Grid.Column>
          <Grid.Column width={16}>
            <DatasetTable
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
SetPage.propTypes = {
  search: PropTypes.func.isRequired,
  selectSet: PropTypes.func.isRequired
};

export default connect(null, { search, selectSet: actions.selectSet })(SetPage);
