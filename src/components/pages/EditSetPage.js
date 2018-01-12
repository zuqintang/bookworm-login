import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import AddSetForm from "../forms/AddSetForm";
import * as action from "../../actions/sets";

class EditSetPage extends React.Component {
  componentDidMount = () => this.onInit(this.props);
  onInit = props => props.fetchSet(props.activeRow);
  submit = data =>
    this.props.save(data).then(() => this.props.history.push("/sets"));
  render() {
    const { data } = this.props;
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            {data && <AddSetForm submit={this.submit} data={data} />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

EditSetPage.propTypes = {
  save: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

function mapStateToProps(state) {
  return {
    activeRow: { ID: state.sets.activeRow },
    data: state.sets.activeRowData
  };
}

EditSetPage.propTypes = {
  data: PropTypes.shape({}).isRequired
};

export default connect(mapStateToProps, {
  saveSet: action.saveSet,
  fetchSet: action.fetchSet
})(EditSetPage);
