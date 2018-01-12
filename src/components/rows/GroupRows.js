import React from "react";
import { List, Table, Label } from "semantic-ui-react";
import SetPanel from "../panels/SetPanel";
import { FormatStandard, FormatStudy } from "../tools/Formater";

function GroupRows(props) {
  const rows = props.data;
  const activeRow = props.activeRow;
  const getActiveRow = props.getActiveRow;
  let groupRowsList = <Table.Row />;
  if (rows.length > 0) {
    groupRowsList = rows.map(row => (
      <Table.Row key={row.ID}>
        {activeRow !== row.ID && (
          <Table.Cell>
            <Label as="a" name={row.ID} onClick={props.handleRowClick}>
              {row.DS_NAME}
            </Label>
          </Table.Cell>
        )}
        {activeRow !== row.ID && (
          <Table.Cell>
            <Label as="a" name={row.ID} onClick={props.handleRowClick}>
              {row.DS_CODE}
            </Label>
          </Table.Cell>
        )}
        {activeRow !== row.ID && (
          <Table.Cell>{FormatStandard(row.STANDARD)}</Table.Cell>
        )}
        {activeRow !== row.ID && (
          <Table.Cell>{FormatStudy(row.STUDY_TYPE)}</Table.Cell>
        )}
        {activeRow !== row.ID && <Table.Cell>{row.CREATED_AT}</Table.Cell>}
        {activeRow !== row.ID && <Table.Cell>{row.CREATOR}</Table.Cell>}
        {activeRow === row.ID && (
          <Table.Cell verticalAlign="top">
            <Label
              as="a"
              name={row.ID}
              onClick={props.handleRowClick}
              color="teal"
              ribbon
            >
              {row.DS_NAME}
            </Label>
            <List divided selection>
              <List.Item>
                <Label color="blue" horizontal>
                  编码
                </Label>
                {row.DS_CODE}
              </List.Item>
              <List.Item>
                <Label color="blue" horizontal>
                  来源
                </Label>
                {FormatStandard(row.STANDARD)}
              </List.Item>
              <List.Item>
                <Label color="blue" horizontal>
                  所属学科
                </Label>
                {FormatStudy(row.STUDY_TYPE)}
              </List.Item>
              <List.Item>
                <Label color="blue" horizontal>
                  创建日期
                </Label>
                {row.CREATED_AT}
              </List.Item>
              <List.Item>
                <Label color="blue" horizontal>
                  创建人
                </Label>
                {row.CREATOR}
              </List.Item>
            </List>
          </Table.Cell>
        )}
        {activeRow === row.ID && (
          <Table.Cell colSpan={5}>
            <SetPanel getActiveRow={getActiveRow} />
          </Table.Cell>
        )}
      </Table.Row>
    ));
  }
  return groupRowsList;
}

export default GroupRows;
