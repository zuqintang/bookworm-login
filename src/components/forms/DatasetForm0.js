import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import { NATIONAL, ENTERPRISE, SPECIAL, COMMON } from "../../types";

const standardOptions = [
  { key: 0, text: "请选择", value: -1 },
  { key: 1, text: "国标", value: NATIONAL },
  { key: 2, text: "企标", value: ENTERPRISE }
];

const studyOptions = [
  { key: 0, text: "请选择", value: -1 },
  { key: 1, text: "专用-病种名称", value: SPECIAL },
  { key: 2, text: "通用-人口信息学", value: COMMON }
];

class DatasetForm extends React.Component {
  state = {
    data: { standard: -1, study: -1, keyword: "", limit: 10, offset: 0 },
    loading: false
  };
  onSubmit = () => {
    this.setState({ loading: true });
    const searchParam = this.state.data;
    this.props.setParam(searchParam);
    this.props
      .submit(searchParam)
      .then(() => this.setState({ loading: false }));
  };

  handleStudyChange = (e, { value }) =>
    this.setState({ data: { ...this.state.data, study: value } });
  handleStandardChange = (e, { value }) =>
    this.setState({ data: { ...this.state.data, standard: value } });
  handleInputChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  render() {
    const { data, loading } = this.state;
    return (
      <Form size="mini" onSubmit={this.onSubmit} loading={loading}>
        <Form.Group>
          <Form.Radio
            label="全部"
            value="all"
            checked={data.study === "all"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="通用型"
            value="common"
            checked={data.study === "common"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="专用型"
            value="special"
            checked={data.study === "special"}
            onChange={this.handleChange}
          />
          <Form.Select
            options={standardOptions}
            placeholder="标准类型"
            value={data.standard}
            onChange={this.handleStandardChange}
          />
          <Form.Select
            options={studyOptions}
            placeholder="学科类型"
            value={data.study}
            onChange={this.handleStudyChange}
          />
          <Form.Input
            name="keyword"
            placeholder="搜索..."
            value={data.keyword}
            onChange={this.handleInputChange}
          />
          <Form.Button size="mini">检索</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

DatasetForm.propTypes = {
  setParam: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

export default DatasetForm;
