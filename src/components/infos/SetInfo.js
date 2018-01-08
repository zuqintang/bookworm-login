import React from "react";
import { Segment, Label, List } from "semantic-ui-react";
import { FormatStandard, FormatStudy } from "../tools/Formater";

const SetInfo = ({ data }) => (
  <Segment raised>
    <Label as="a" color="teal" ribbon>
      数据集信息
    </Label>
    <List divided selection>
      <List.Item>
        <Label color="blue" horizontal>
          编码
        </Label>
        {data.ID}
      </List.Item>
      <List.Item>
        <Label color="blue" horizontal>
          名称
        </Label>
        {data.DS_NAME}
      </List.Item>
      <List.Item>
        <Label color="blue" horizontal>
          来源
        </Label>
        {FormatStandard(data.STANDARD)}
      </List.Item>
      <List.Item>
        <Label color="blue" horizontal>
          所属学科
        </Label>
        {FormatStudy(data.STUDY_TYPE)}
      </List.Item>
      <List.Item>
        <Label color="blue" horizontal>
          创建人
        </Label>
        {data.CREATOR}
      </List.Item>
      <List.Item>
        <Label color="blue" horizontal>
          创建日期
        </Label>
        {data.CREATED_AT}
      </List.Item>
      <List.Item>
        <Label color="blue" horizontal>
          修改人
        </Label>
        {data.UPDATOR}
      </List.Item>
      <List.Item>
        <Label color="blue" horizontal>
          最后修改日期
        </Label>
        {data.UPDATED_AT}
      </List.Item>
    </List>
  </Segment>
);

export default SetInfo;
