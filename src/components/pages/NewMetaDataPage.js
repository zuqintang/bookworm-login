import React from "react";
import { connect } from "react-redux";
import { List, Segment } from "semantic-ui-react";
import FieldcodeTable from "../tables/FieldcodeTable";
import { fetchFieldcodes } from "../../actions/elements";

class NewmetaData extends React.Component {
  state = {
    param: {
      limit: 10,
      offset: 0,
      keyword: ""
    },
    data: { total: 0, rows: [] },
    loading: false
  };
  getParam = () => this.state.param;
  fetchFieldcodes = param =>
    this.props
      .fetchFieldcodes(param)
      .then(res => this.setState({ data: res.data, loading: false }));
  render() {
    const data = { rows: [], total: 0 };
    return (
      <div>
        <List divided relaxed>
          <List.Item>
            <List.Content>
              <List.Header>值域查询</List.Header>
              <List.Description>
                <Segment>
                  <FieldcodeTable
                    submit={this.fetchFieldcodes}
                    getParam={this.getParam}
                    data={data}
                  />
                </Segment>
              </List.Description>
            </List.Content>
          </List.Item>

          <List.Item>新增值域</List.Item>
          <List.Item>添加值域项</List.Item>
          <List.Item>概念域映射</List.Item>
          <List.Item>添加值域到数据元</List.Item>
        </List>
      </div>
    );
  }
}

export default connect(null, { fetchFieldcodes })(NewmetaData);
