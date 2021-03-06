import React from "react";
import { Table, Label, List } from "semantic-ui-react";
import { FormatStandard } from "../tools/Formater";
import ElementPanel from "../panels/ElementPanel";

function ElementRows(props) {
  const rows = props.data;
  const activeRow = props.getActiveRow();
  const getActiveRow = props.getActiveRow;
  const elementRows = rows.map(row => (
    <Table.Row key={row.ID}>
      {activeRow !== row.ID && (
        <Table.Cell>
          <Label as="a" name={row.ID} onClick={props.handleRowClick}>
            {row.METADATA_IDENTIFY}
          </Label>
        </Table.Cell>
      )}
      {activeRow !== row.ID && (
        <Table.Cell>
          <Label as="a" name={row.ID} onClick={props.handleRowClick}>
            {row.METADATA_NAME}
          </Label>
        </Table.Cell>
      )}
      {activeRow !== row.ID && (
        <Table.Cell>{row.DATA_META_DATATYPE}</Table.Cell>
      )}
      {activeRow !== row.ID && <Table.Cell>{row.CREATE_DATE}</Table.Cell>}
      {activeRow !== row.ID && <Table.Cell>{row.CREATE_MAN}</Table.Cell>}
      {activeRow !== row.ID && <Table.Cell>{row.DATAMETA_FROM}</Table.Cell>}
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
            {row.METADATA_NAME}
          </Label>
          <List divided selection>
            <List.Item>
              <Label color="blue" horizontal>
                编码
              </Label>
              {row.METADATA_IDENTIFY}
            </List.Item>
            <List.Item>
              <Label color="blue" horizontal>
                数据类型
              </Label>
              {row.DATA_META_DATATYPE}
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
              {row.DATAMETA_FROM}
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
          <ElementPanel getActiveRow={getActiveRow} />
        </Table.Cell>
      )}
    </Table.Row>
  ));
  return elementRows;
}

export default ElementRows;
