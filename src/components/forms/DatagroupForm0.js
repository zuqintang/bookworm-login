import React from "react";
import PropTypes from "prop-types";
import { Menu, Input } from "semantic-ui-react";

class DatagroupForm extends React.Component {
  state = {
    keyword: "",
    loading: false
  };
  onSubmit = () => {
    this.setState({ loading: true });
    const searchParam = this.setKeyword(this.props.getParam());
    this.props.setParam(searchParam);
    this.props.submit(searchParam).then(() => {
      this.setState({ loading: false });
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  setKeyword = param => {
    const searchParam = param;
    searchParam.keyword = this.state.keyword;
    return searchParam;
  };

  render() {
    const { keyword, loading } = this.state;
    return (
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            name="keyword"
            value={keyword}
            onChange={this.onChange}
            transparent
            loading={loading}
            icon={{ name: "search", link: true, onClick: this.onSubmit }}
            placeholder="搜索..."
          />
        </Menu.Item>
      </Menu.Menu>
    );
  }
}

DatagroupForm.propTypes = {
  setParam: PropTypes.func.isRequired,
  getParam: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

export default DatagroupForm;
