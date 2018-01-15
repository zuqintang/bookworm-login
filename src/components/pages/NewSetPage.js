import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import SetForm from "../forms/SetForm";
import { saveSet } from "../../actions/sets";
import { DATA_SET_TYPE } from "../../types";

class NewSetPage extends React.Component {
  submit = data =>
    this.props.saveSet(data).then(() => this.props.history.push("/sets"));

  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <SetForm submit={this.submit} type={DATA_SET_TYPE} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

NewSetPage.propTypes = {
  saveSet: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

export default connect(null, { saveSet })(NewSetPage);
