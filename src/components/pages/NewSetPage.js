import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import AddDatasetForm from "../forms/AddDatasetForm";
import { save } from "../../actions/dataset";

class NewSetPage extends React.Component {
  submit = data =>
    this.props.save(data).then(() => this.props.history.push("/sets"));

  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <AddDatasetForm submit={this.submit} />
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

export default connect(null, { save })(NewSetPage);
