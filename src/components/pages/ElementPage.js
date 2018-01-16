import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Label, Grid } from "semantic-ui-react";
import SetPageForm from "../forms/SetPageForm";
import ElementTable from "../tables/ElementTable";
import * as actions from "../../actions/elements";

class SetPage extends React.Component {
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
      query: ""
    }
  };
  componentDidMount = () => this.onInit(this.state.param);
  onInit = param => this.submit(param);

  setParam = param => this.setState({ param });
  setActiveRow = activeRow => {
    this.setState({ activeRow });
    this.props.selectElement({ activeRow });
  };
  getActiveRow = () => this.state.activeRow;
  getParam = () => this.state.param;
  submit = param =>
    this.props
      .fetchElements(param)
      .then(res => this.setState({ data: res.data }));
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
            <ElementTable
              data={this.state.data}
              submit={this.submit}
              param={param}
              getParam={this.getParam}
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
  fetchElements: PropTypes.func.isRequired,
  selectElement: PropTypes.func.isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      standard: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default connect(null, {
  fetchElements: actions.fetchElements,
  selectElement: actions.selectElement
})(SetPage);
