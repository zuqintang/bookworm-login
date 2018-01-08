import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import AddDatasetForm from "../forms/AddDatasetForm";
import { save } from "../../actions/dataset";

class AddPage extends React.Component {
  submit = data => this.props.save(data).then(() => this.props.close());

  render() {
    return (
      <Grid>
        <Grid.Column>
          <AddDatasetForm submit={this.submit} close={this.props.close} />
        </Grid.Column>
      </Grid>
    );
  }
}

AddPage.propTypes = {
  save: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};

export default connect(null, { save })(AddPage);
