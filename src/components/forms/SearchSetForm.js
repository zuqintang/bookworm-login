import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";

class SearchSetForm extends React.Component {
  state = {
    param: {
      query: "",
      limit: 100,
      offset: 0
    },
    loading: false,
    options: [],
    elements: {}
  };
  onSearchChange = (e, { searchQuery }) => {
    clearTimeout(this.timer);
    this.setState({
      param: { ...this.state.param, query: searchQuery }
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  onChange = (e, data) => {
    this.setState({ param: { ...this.state.param, query: data.value } });
    this.props.onSetSelect(this.state.elements[data.value]);
  };

  fetchOptions = () => {
    if (!this.state.param.query) return;
    this.setState({ loading: true });
    axios.post("/metadata/fetchMetas", this.state.param).then(res => {
      const options = [];
      const elementsHash = {};
      const elements = res.data.rows;
      elements.forEach(element => {
        elementsHash[element.ID] = element;
        options.push({
          key: element.ID,
          value: element.ID,
          text: element.METADATA_NAME
        });
      });
      this.setState({ loading: false, options, elements: elementsHash });
    });
  };
  render() {
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder="按名称搜索"
          value={this.state.param.query}
          onSearchChange={this.onSearchChange}
          options={this.state.options}
          loading={this.state.loading}
          onChange={this.onChange}
        />
      </Form>
    );
  }
}

SearchSetForm.propTypes = {
  onSetSelect: PropTypes.func.isRequired
};

export default SearchSetForm;
