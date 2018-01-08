import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import SearchSetForm from "../forms/SearchSetForm";
import SetForm from "../forms/SetForm";
import { createSet } from "../../actions/sets";

class NewSetPage extends React.Component {
  state = {
    set: null
  };

  onSetSelect = set => this.setState({ set });

  addSet = set =>
    this.props.createSet(set).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Segment>
        <h1>添加新的数据元到数据集</h1>
        <SearchSetForm onSetSelect={this.onSetSelect} />

        {this.state.set && (
          <SetForm submit={this.addSet} set={this.state.set} />
        )}
      </Segment>
    );
  }
}

NewSetPage.propTypes = {
  createSet: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { createSet })(NewSetPage);
