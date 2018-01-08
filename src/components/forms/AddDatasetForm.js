import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Form, Button } from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import { DATA_SET_TYPE, NATIONAL, ENTERPRISE } from "../../types";

class AddDatasetForm extends React.Component {
  state = {
    data: {
      STANDARD: "",
      ID: "",
      DS_NAME: "",
      STUDY_TYPE: "",
      DATA_SET_TYPE
    },
    errors: {},
    loading: false
  };
  onSubmit = () => {
    const errors = this.validate(this.state.data);
    const time = moment().format("YYYY-MM-DD HH:mm:ss");
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      const param = this.state.data;
      param.CREATOR = localStorage.cdejwt;
      param.UPDATED_AT = time;
      param.CREATED_AT = time;
      this.props.submit(param).catch(() => {
        this.setState({ loading: false });
      });
    }
  };
  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  validate = data => {
    const errors = {};
    if (!data.STANDARD) errors.STANDARD = "请选择标准";
    if (!data.DS_NAME) errors.DS_NAME = "数据集名称不能为空";
    if (!data.STUDY_TYPE) errors.STUDY_TYPE = "请选择类别";
    return errors;
  };
  render() {
    const { data, loading, errors } = this.state;
    const { close } = this.props;
    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field error={!!errors.STANDARD}>
          <label htmlFor="STANDARD">依据标准</label>
          <select
            name="STANDARD"
            id="STANDARD"
            value={data.STANDARD}
            onChange={this.onChange}
          >
            <option value="">请选择</option>
            <option value={NATIONAL}>国标</option>
            <option value={ENTERPRISE}>企标</option>
          </select>
          {errors.STANDARD && <InlineError text={errors.STANDARD} />}
        </Form.Field>
        <Form.Field error={!!errors.ID}>
          <label htmlFor="ID">编码</label>
          <input
            name="ID"
            id="ID"
            placeholder="自动生成"
            value={data.ID}
            onChange={this.onChange}
            readOnly
          />
          {errors.ID && <InlineError text={errors.ID} />}
        </Form.Field>
        <Form.Field error={!!errors.DS_NAME}>
          <label htmlFor="DS_NAMENeedEnID">名称</label>
          <input
            name="DS_NAME"
            id="DS_NAME"
            placeholder=""
            value={data.DS_NAME}
            onChange={this.onChange}
          />
          {errors.DS_NAME && <InlineError text={errors.DS_NAME} />}
        </Form.Field>
        <Form.Field error={!!errors.STUDY_TYPE}>
          <label htmlFor="STUDY_TYPE">所属类别</label>
          <select
            name="STUDY_TYPE"
            id="STUDY_TYPE"
            value={data.STUDY_TYPE}
            onChange={this.onChange}
          >
            <option value="">请选择</option>
            <option value="0">专用-病种名称</option>
            <option value="1">通用-人口信息学</option>
          </select>
          {errors.STUDY_TYPE && <InlineError text={errors.STUDY_TYPE} />}
        </Form.Field>
        <Button.Group>
          <Button onClick={close}>取消</Button>
          <Button.Or />
          <Button positive>保存</Button>
        </Button.Group>
      </Form>
    );
  }
}
AddDatasetForm.propTypes = {
  submit: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
};
export default AddDatasetForm;
