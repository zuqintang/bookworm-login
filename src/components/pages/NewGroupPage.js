import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import AddSetForm from "../forms/AddSetForm";
import { save } from "../../actions/dataset";
import { DATA_GROUP_TYPE } from "../../types";

class NewGroupPage extends React.Component {
  submit = data =>
    this.props.save(data).then(() => this.props.history.push("/sets"));

  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Header>数据组</Header>
            <AddSetForm submit={this.submit} type={DATA_GROUP_TYPE} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

NewGroupPage.propTypes = {
  save: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

export default connect(null, { save })(NewGroupPage);
