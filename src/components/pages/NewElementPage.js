import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import SearchSetForm from "../forms/SearchSetForm";
import ElementForm from "../forms/ElementForm";
import { createSet } from "../../actions/sets";

class NewElementPage extends React.Component {
  state = {
    element: null
  };

  onSetSelect = element => this.setState({ element });

  addSet = element => this.props.createSet(element);
  // .then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <Segment>
        <h4>添加新的数据元到数据集</h4>
        <SearchSetForm onSetSelect={this.onSetSelect} />

        {this.state.element && (
          <ElementForm submit={this.addSet} element={this.state.element} />
        )}
      </Segment>
    );
  }
}

NewElementPage.propTypes = {
  createSet: PropTypes.func.isRequired
  // history: PropTypes.shape({
  //   push: PropTypes.func.isRequired
  // }).isRequired
};

export default connect(null, { createSet })(NewElementPage);
