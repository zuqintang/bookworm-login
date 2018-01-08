import React from "react";
import PropTypes from "prop-types";
import { Segment, Label, Grid, Button, Form } from "semantic-ui-react";
import DatasetPanel from "../panels/DatasetPanel";
import SetInfo from "../infos/SetInfo";

const options = [
  { key: 0, text: "请选择", value: "" },
  { key: 1, text: "检验标本号", value: "0" },
  { key: 2, text: "检验技师签名", value: "1" },
  { key: 3, text: "检验报告备注", value: "2" },
  { key: 4, text: "检验报告单编号", value: "3" }
];

class EditPage extends React.Component {
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
            <Form>
              <Form.Input placeholder="输入条件" />
              <Form.Select
                name="STANDARD"
                id="STANDARD"
                onChange={this.onChange}
                options={options}
              />
              <Button>添加</Button>
              <Button>移除</Button>
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
EditPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
  getActiveRow: PropTypes.func.isRequired
};

export default EditPage;
