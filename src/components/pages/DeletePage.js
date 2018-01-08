import React from "react";
import PropTypes from "prop-types";
import { Segment, Label, Grid, Form } from "semantic-ui-react";
import DatasetPanel from "../panels/DatasetPanel";
import SetInfo from "../infos/SetInfo";

class DeletePage extends React.Component {
  state = {
    data: { rows: [], sumPage: 0 },
    param: {
      studyTpId: "",
      limit: 10,
      offset: 0,
      keyword: ""
    }
  };
  setParam = param => this.setState({ param });
  handleContextRef = contextRef => this.setState({ contextRef });
  render() {
    const { data, getActiveRow } = this.props;
    return (
      <Grid>
        <Grid.Column width={5}>
          <SetInfo data={data} />
          <Segment raised>
            <Label as="a" color="teal" ribbon>
              操作
            </Label>
            <Form style={{ marginTop: "10px" }}>
              <Form.Group>
                <Form.Button color="brown">取关数据元</Form.Button>
                <Form.Button color="brown">取关数据集</Form.Button>
              </Form.Group>
              <Form.Button color="brown">删除数据集</Form.Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={11}>
          <DatasetPanel getActiveRow={getActiveRow} />
        </Grid.Column>
      </Grid>
    );
  }
}
DeletePage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  getActiveRow: PropTypes.func.isRequired
};

export default DeletePage;
