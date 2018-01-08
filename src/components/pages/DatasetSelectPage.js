import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Label, Grid } from "semantic-ui-react";
import DatasetForm from "../forms/DatasetForm";
import DatasetSelectTable from "../tabels/DatasetSelectTable";
import { search } from "../../actions/dataset";

class DatasetSelectPage extends React.Component {
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
  submit = param => {
    const rows = [];
    const data = this.props.data;
    let i = param.offset;
    console.log(i);
    const total = data[1].length > 10 ? 10 : data[1].length;
    for (; i < i + total; ) {
      rows.push(data[0].sets[data[1][(i += 1)]]);
    }
    console.log(rows);
    this.setState({ data: { rows, total: data[1].length } });
  };
  // this.props.search(param).then(res => this.setState({ data: res }));
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
            <DatasetSelectTable
              data={this.state.data}
              submit={this.submit}
              param={param}
              setParam={this.setParam}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
DatasetSelectPage.propTypes = {
  search: PropTypes.func.isRequired
};

export default connect(null, { search })(DatasetSelectPage);
