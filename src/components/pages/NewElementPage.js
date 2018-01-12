import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import SearchSetForm from "../forms/SearchSetForm";
import SetForm from "../forms/SetForm";
import { createSet } from "../../actions/sets";

class NewElementPage extends React.Component {
  state = {
    set: null
  };

  onSetSelect = set => this.setState({ set });

  addSet = set =>
    this.props.createSet(set).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Segment>
        <h4>添加新的数据元到数据集</h4>
        <SearchSetForm onSetSelect={this.onSetSelect} />

        {this.state.set && (
          <SetForm submit={this.addSet} set={this.state.set} />
        )}
      </Segment>
    );
  }
}

NewElementPage.propTypes = {
  createSet: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { createSet })(NewElementPage);
