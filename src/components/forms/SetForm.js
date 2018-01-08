import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Grid, Segment } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class SetForm extends React.Component {
  state = {
    data: {
      ID: this.props.set.ID,
      DS_NAME: this.props.set.DS_NAME,
      CREATOR: this.props.set.CREATOR,
      CREATED_AT: this.props.set.CREATED_AT
    },
    index: 0,
    loading: false,
    errors: {}
  };

  componentWillReceiveProps(props) {
    this.setState({
      data: {
        ID: props.set.ID,
        DS_NAME: props.set.DS_NAME,
        CREATOR: props.set.CREATOR,
        CREATED_AT: props.set.CREATED_AT
      }
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
    if (!data.DS_NAME) errors.DS_NAME = "Can't be blank";
    if (!data.CREATOR) errors.CREATOR = "Can't be blank";
    if (!data.CREATED_AT) errors.CREATED_AT = "Can't be blank";
    return errors;
  };

  render() {
    const { errors, data, loading } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.onSubmit} loading={loading}>
          <Grid columns={2} fluid="true" stackable>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.DS_NAME}>
                  <label htmlFor="DS_NAME">名称</label>
                  <input
                    type="text"
                    id="DS_NAME"
                    name="DS_NAME"
                    placeholder="Title"
                    value={data.DS_NAME}
                    onChange={this.onChange}
                  />
                  {errors.DS_NAME && <InlineError text={errors.DS_NAME} />}
                </Form.Field>

                <Form.Field error={!!errors.CREATOR}>
                  <label htmlFor="CREATOR">创建人</label>
                  <input
                    type="text"
                    id="CREATOR"
                    name="CREATOR"
                    placeholder="Authors"
                    value={data.CREATOR}
                    onChange={this.onChange}
                  />
                  {errors.CREATOR && <InlineError text={errors.CREATOR} />}
                </Form.Field>

                <Form.Field error={!!errors.CREATED_AT}>
                  <label htmlFor="CREATED_AT">创建日期</label>
                  <input
                    id="CREATED_AT"
                    name="CREATED_AT"
                    value={data.CREATED_AT}
                    onChange={this.onChange}
                  />
                  {errors.CREATED_AT && (
                    <InlineError text={errors.CREATED_AT} />
                  )}
                </Form.Field>
              </Grid.Column>

              {/* <Grid.Column>
                <Image size="small" src={data.cover} />
                {this.state.covers.length > 1 && (
                  <a role="button" tabIndex={0} onClick={this.changeCover}>
                    Another cover
                  </a>
                )}
              </Grid.Column> */}
            </Grid.Row>

            <Grid.Row>
              <Button primary>Save</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
  }
}

SetForm.propTypes = {
  submit: PropTypes.func.isRequired,
  set: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    DS_NAME: PropTypes.string.isRequired,
    CREATOR: PropTypes.string.isRequired,
    CREATED_AT: PropTypes.string.isRequired
  }).isRequired
};

export default SetForm;
