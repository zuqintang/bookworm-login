import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Label, Grid } from "semantic-ui-react";
import DatasetForm from "../forms/DatasetForm";
import DatasetTable from "../tabels/DatasetTable";
import { search } from "../../actions/dataset";

class DatasetPage extends React.Component {
  state = {
    data: { rows: [], total: 0 },
    param: {
      standard: -1,
      study: -1,
      limit: 10,
      offset: 0,
      keyword: ""
    }
  };
  setParam = param => this.setState({ param });
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
            <DatasetForm submit={this.submit} setParam={this.setParam} />
          </Grid.Column>
          <Grid.Column width={16}>
            <DatasetTable
              data={this.state.data}
              submit={this.submit}
              param={param}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
DatasetPage.propTypes = {
  search: PropTypes.func.isRequired
};

export default connect(null, { search })(DatasetPage);
