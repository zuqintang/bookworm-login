import React from "react";
import PropTypes from "prop-types";
import { Segment, Label, Grid, Button, Form } from "semantic-ui-react";
import DatasetPanel from "../panels/DatasetPanel";
import SetInfo from "../infos/SetInfo";

class ImportPage extends React.Component {
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
              <Form>
                <Form.Input type="file" />
                <Button primary>预览</Button>
                <Button primary>导入</Button>
                <Button>模版下载</Button>
              </Form>
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
ImportPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  getActiveRow: PropTypes.func.isRequired
};

export default ImportPage;
