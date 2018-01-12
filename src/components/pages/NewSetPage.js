import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import AddSetForm from "../forms/AddSetForm";
import { fetchFimaly } from "../../actions/sets";
import { DATA_SET_TYPE } from "../../types";

class NewSetPage extends React.Component {
  submit = data =>
    this.props.save(data).then(() => this.props.history.push("/sets"));

  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <AddSetForm submit={this.submit} type={DATA_SET_TYPE} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

NewSetPage.propTypes = {
  save: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

export default connect(null, { fetchFimaly })(NewSetPage);
