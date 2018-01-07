import React from "react";
import axios from "axios";
import { Form, Dropdown } from "semantic-ui-react";

class SearchSetForm extends React.Component {
  state = {
    query: "",
    laoding: false,
    options: [],
    sets: {}
  };
  onSearchChange = (e, data) => {
    clearTimeout(this.timer);
    this.setState({
      query: data
    });
    this.timer = setTimeout(this.fetchOptions, 1000);
  };

  onChange = (e, data) => {
    this.setState({ query: data.value });
    // this.props.onBookSelect(this.state.books[data.value]);
  };

  fetchOptions = () => {
    if (!this.state.query) return;
    this.setState({ loading: true });
    console.log(this.state.query);
    axios
      .get(`/api/set/search?keyword=${this.state.query}`)
      .then(res => res.data.sets);
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

export default SearchSetForm;
