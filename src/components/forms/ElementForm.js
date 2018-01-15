import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Grid, Segment } from "semantic-ui-react";
import InlineError from "../messages/InlineError";
import OptionTable from "../tables/OptionTable";

class ElementForm extends React.Component {
  state = {
    data: this.props.element,
    index: 0,
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props) {
    this.setState({
      data: props.element
    });
  }

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.METADATA_NAME) errors.METADATA_NAME = "Can't be blank";
    if (!data.CREATE_MAN) errors.CREATE_MAN = "Can't be blank";
    if (!data.CREATE_DATE) errors.CREATE_DATE = "Can't be blank";
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} fluid="true" stackable>
            <Form.Field error={!!errors.METADATA_NAME}>
              <label htmlFor="METADATA_NAME">名称</label>
              <input
                type="text"
                id="METADATA_NAME"
                name="METADATA_NAME"
                placeholder="Title"
                value={data.METADATA_NAME}
                onChange={this.onChange}
              />
              {errors.METADATA_NAME && (
                <InlineError text={errors.METADATA_NAME} />
              )}
            </Form.Field>
            <Form.Field error={!!errors.METADATA_IDENTIFY}>
              <label htmlFor="METADATA_IDENTIFY">编码</label>
              <input
                type="text"
                id="METADATA_IDENTIFY"
                name="METADATA_IDENTIFY"
                placeholder=""
                value={data.METADATA_IDENTIFY}
                onChange={this.onChange}
              />
              {errors.METADATA_IDENTIFY && (
                <InlineError text={errors.METADATA_IDENTIFY} />
              )}
            </Form.Field>
            <Form.Field error={!!errors.COMPLETENAME}>
              <label htmlFor="COMPLETENAME">别名</label>
              <input
                type="text"
                id="COMPLETENAME"
                name="COMPLETENAME"
                placeholder=""
                value={data.COMPLETENAME}
                onChange={this.onChange}
              />
              {errors.COMPLETENAME && (
                <InlineError text={errors.COMPLETENAME} />
              )}
            </Form.Field>
            <Form.Field error={!!errors.METADATA_INTRO}>
              <label htmlFor="METADATA_INTRO">数据元定义</label>
              <input
                type="text"
                id="METADATA_INTRO"
                name="METADATA_INTRO"
                placeholder=""
                value={data.METADATA_INTRO}
                onChange={this.onChange}
              />
              {errors.METADATA_INTRO && (
                <InlineError text={errors.METADATA_INTRO} />
              )}
            </Form.Field>
            <Form.Field error={!!errors.DATA_OBJECT_NAME}>
              <label htmlFor="DATA_OBJECT_NAME">对象类名称</label>
              <input
                type="text"
                id="DATA_OBJECT_NAME"
                name="DATA_OBJECT_NAME"
                placeholder=""
                value={data.DATA_OBJECT_NAME}
                onChange={this.onChange}
              />
              {errors.DATA_OBJECT_NAME && (
                <InlineError text={errors.DATA_OBJECT_NAME} />
              )}
            </Form.Field>
            <Form.Field error={!!errors.DATA_FEATURE_NAME}>
              <label htmlFor="DATA_FEATURE_NAME">特性名称</label>
              <input
                type="text"
                id="DATA_FEATURE_NAME"
                name="DATA_FEATURE_NAME"
                placeholder=""
                value={data.DATA_FEATURE_NAME}
                onChange={this.onChange}
              />
              {errors.DATA_FEATURE_NAME && (
                <InlineError text={errors.DATA_FEATURE_NAME} />
              )}
            </Form.Field>
            <Form.Field error={!!errors.DATA_UNIT}>
              <label htmlFor="DATA_UNIT">特性单位</label>
              <input
                type="text"
                id="DATA_UNIT"
                name="DATA_UNIT"
                placeholder=""
                value={data.DATA_UNIT}
                onChange={this.onChange}
              />
              {errors.DATA_UNIT && <InlineError text={errors.DATA_UNIT} />}
            </Form.Field>
            <Form.Field error={!!errors.DATA_DISPLAY}>
              <label htmlFor="DATA_DISPLAY">表示类</label>
              <input
                type="text"
                id="DATA_DISPLAY"
                name="DATA_DISPLAY"
                placeholder=""
                value={data.DATA_DISPLAY}
                onChange={this.onChange}
              />
              {errors.DATA_DISPLAY && (
                <InlineError text={errors.DATA_DISPLAY} />
              )}
            </Form.Field>
            <Form.Field error={!!errors.DATA_META_DATATYPE}>
              <label htmlFor="DATA_META_DATATYPE">数据类型</label>
              <input
                type="text"
                id="DATA_META_DATATYPE"
                name="DATA_META_DATATYPE"
                placeholder=""
                value={data.DATA_META_DATATYPE}
                onChange={this.onChange}
              />
              {errors.DATA_META_DATATYPE && (
                <InlineError text={errors.DATA_META_DATATYPE} />
              )}
            </Form.Field>
            <Form.Field error={!!errors.DATA_META_DISPLAY}>
              <label htmlFor="DATA_META_DISPLAY">表示格式</label>
              <input
                type="text"
                id="DATA_META_DISPLAY"
                name="DATA_META_DISPLAY"
                placeholder=""
                value={data.DATA_META_DISPLAY}
                onChange={this.onChange}
              />
              {errors.DATA_META_DISPLAY && (
                <InlineError text={errors.DATA_META_DISPLAY} />
              )}
            </Form.Field>
            <Form.Field error={!!errors.CREATE_MAN}>
              <label htmlFor="CREATE_MAN">创建人</label>
              <input
                type="text"
                id="CREATE_MAN"
                name="CREATE_MAN"
                placeholder="Authors"
                value={data.CREATE_MAN}
                onChange={this.onChange}
              />
              {errors.CREATE_MAN && <InlineError text={errors.CREATE_MAN} />}
            </Form.Field>

            <Form.Field error={!!errors.CREATE_DATE}>
              <label htmlFor="CREATE_DATE">创建日期</label>
              <input
                id="CREATE_DATE"
                name="CREATE_DATE"
                value={data.CREATE_DATE}
                onChange={this.onChange}
              />
              {errors.CREATE_DATE && <InlineError text={errors.CREATE_DATE} />}
            </Form.Field>
            <OptionTable />

            <Grid.Row>
              <Button primary>添加</Button>
              <Button primary>提交新增</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

ElementForm.propTypes = {
  submit: PropTypes.func.isRequired,
  element: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    METADATA_NAME: PropTypes.string.isRequired,
    CREATE_MAN: PropTypes.string.isRequired,
    CREATE_DATE: PropTypes.string.isRequired
  }).isRequired
};

export default ElementForm;
