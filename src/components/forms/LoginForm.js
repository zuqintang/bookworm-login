import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Grid, Header, Icon, Message } from "semantic-ui-react";
import background from "../../asserts/images/background.jpg";
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {
  state = { data: { username: "", password: "" }, errors: {}, loading: false };
  onChange = e =>
    this.setState({
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
          this.setState({ errors: err.response.data, loading: false })
        );
    }
  };
  validate = data => {
    const errors = {};
    if (!data.username) errors.username = "用户名不能为空";
    if (!data.password) errors.password = "密码不能为空";
    return errors;
  };
  render() {
    const { data, errors, loading } = this.state;
    return (
      <Grid verticalAlign="middle" textAlign="center">
        <style>
          {`
          body > div {
            background-image:url("${background}");
            background-position:center;
            background-repeat:no-repeat;
            background-size:cover
          }
          body > div, body > div > div, body > div > div > div { height:100% }
          body > div > div > div > div { height:90% }
           `}
        </style>
        <Grid.Column width={6}>
          <Header as="h1" inverted color="grey" textAlign="center">
            <Icon name="user circle" size="massive" />
          </Header>
          {errors.message && (
            <Message negative>
              <Message.Header>出错了</Message.Header>
              <p>{errors.message}</p>
            </Message>
          )}
          <Form
            color="grey"
            inverted
            onSubmit={this.onSubmit}
            loading={loading}
          >
            <Form.Input
              icon="user"
              iconPosition="left"
              name="username"
              placeholder="用户名"
              value={data.username}
              onChange={this.onChange}
              error={!!errors.username}
            />
            {errors.username && <InlineError text={errors.username} />}
            <Form.Input
              icon="lock"
              iconPosition="left"
              type="password"
              name="password"
              placeholder="密码"
              value={data.pasword}
              onChange={this.onChange}
              error={!!errors.password}
            />
            {errors.password && <InlineError text={errors.password} />}
            <Form.Group>
              <Form.Checkbox label="记住密码" inverted="true" color="grey" />
            </Form.Group>
            <Button color="grey" inverted fluid style={{ opacity: 0.8 }}>
              进入系统
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
