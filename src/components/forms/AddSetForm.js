import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { Form, Button } from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import { DATA_SET_TYPE, NATIONAL, ENTERPRISE } from "../../types";
import * as action from "../../actions/sets";

class AddSetForm extends React.Component {
  state = {
    data: {
      CREATED_AT: "",
      CREATOR: "",
      DATA_SET_TYPE,
      DIS_GROUP: 0,
      DS_CODE: "",
      DS_GROUP: 0,
      DS_NAME: "",
      ID: 0,
      PYM: "",
      STANDARD: 0,
      STUDY_TYPE: 1,
      UPDATED_AT: "",
      WBM: "",
      YEAR_VERSION: 0
    },
    errors: {},
    loading: false
  };

  componentDidMount = () => this.onInit(this.props);
  onInit = props => {
    this.setState({ DATA_SET_TYPE: props.type });
    if (props.data) this.setState({ data: props.data });
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
    const { loading, errors, data } = this.state;
    const { cancelSelectSet } = this.props;
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
          <Button onClick={() => cancelSelectSet()} as={Link} to="/sets">
            取消
          </Button>
          <Button.Or />
          <Button positive>保存</Button>
        </Button.Group>
      </Form>
    );
  }
}
AddSetForm.propTypes = {
  submit: PropTypes.func.isRequired,
  cancelSelectSet: PropTypes.func.isRequired
};
export default connect(null, { cancelSelectSet: action.cancelSelectSet })(
  AddSetForm
);
