import React from "react";
import { Table, Label, List } from "semantic-ui-react";
import { FormatStandard } from "../tools/Formater";
import OptionPanel from "../panels/OptionPanel";

function FieldcodeRows(props) {
  const rows = props.data;
  const activeRow = props.getActiveRow();
  const getActiveRow = props.getActiveRow;
  const fieldcodeRows = rows.map(row => (
    <Table.Row key={row.ID}>
      {activeRow !== row.ID && (
        <Table.Cell>
          <Label as="a" name={row.ID} onClick={props.handleRowClick}>
            {row.FIELDCODE_TABLECODE}
          </Label>
        </Table.Cell>
      )}
      {activeRow !== row.ID && (
        <Table.Cell>
          <Label as="a" name={row.ID} onClick={props.handleRowClick}>
            {row.FIELDCODE_NAME}
          </Label>
        </Table.Cell>
      )}
      {activeRow !== row.ID && <Table.Cell>{row.CREATE_DATE}</Table.Cell>}
      {activeRow !== row.ID && <Table.Cell>{row.CREATE_MAN}</Table.Cell>}
      {activeRow !== row.ID && <Table.Cell>{row.FIELD_FROM}</Table.Cell>}
      {activeRow !== row.ID && (
        <Table.Cell>{FormatStandard(row.STANDARD)}</Table.Cell>
      )}
      {activeRow === row.ID && (
        <Table.Cell verticalAlign="top">
          <Label
            as="a"
            name={row.ID}
            onClick={props.handleRowClick}
            color="teal"
            ribbon
          >
            {row.FIELDCODE_NAME}
          </Label>
          <List divided selection>
            <List.Item>
              <Label color="blue" horizontal>
                编码
              </Label>
              {row.FIELDCODE_TABLECODE}
            </List.Item>
            <List.Item>
              <Label color="blue" horizontal>
                创建日期
              </Label>
              {row.CREATE_DATE}
            </List.Item>
            <List.Item>
              <Label color="blue" horizontal>
                创建人
              </Label>
              {row.CREATE_MAN}
            </List.Item>
            <List.Item>
              <Label color="blue" horizontal>
                来源
              </Label>
              {row.FIELD_FROM}
            </List.Item>
            <List.Item>
              <Label color="blue" horizontal>
                标准
              </Label>
              {FormatStandard(row.STANDARD)}
            </List.Item>
          </List>
        </Table.Cell>
      )}
      {activeRow === row.ID && (
        <Table.Cell colSpan={6}>
          <OptionPanel getActiveRow={getActiveRow} />
        </Table.Cell>
      )}
    </Table.Row>
  ));
  return fieldcodeRows;
}

export default FieldcodeRows;
