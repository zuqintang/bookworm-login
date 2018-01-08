import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";

class SearchSetForm extends React.Component {
  state = {
    query: "",
    laoding: false,
    options: [],
    sets: {}
  };
  onSearchChange = (e, { searchQuery }) => {
    clearTimeout(this.timer);
    this.setState({
      query: searchQuery
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  onChange = (e, data) => {
    this.setState({ query: data.value });
    this.props.onSetSelect(this.state.sets[data.value]);
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    axios
      .post(
        `/Dataset/search?keyword=${
          this.state.query
        }&standard=&stduy=&limit=10&offset=0`
      )
      .then(res => {
        const options = [];
        const setsHash = {};
        const sets = res.data.rows;
        sets.forEach(set => {
          setsHash[set.ID] = set;
          options.push({
            key: set.ID,
            value: set.ID,
            text: set.DS_NAME
          });
        });
        this.setState({ loading: false, options, sets: setsHash });
        console.log(this.state);
      });
  };
  render() {
    return (
      <Form>
        <Dropdown
          search
          fluid
          placeholder="按名称搜索"
          value={this.state.query}
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
