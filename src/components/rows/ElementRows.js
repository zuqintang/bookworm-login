import React from "react";
import { Table, Label } from "semantic-ui-react";
import { FormatStandard } from "../tools/Formater";

function ElementRows(props) {
  const rows = props.data;
  const elementRows = rows.map(row => (
    <Table.Row key={row.ID}>
      <Table.Cell>
        <Label as="a" name={row.ID} onClick={props.handleRowClick}>
          {row.METADATA_IDENTIFY}
        </Label>
      </Table.Cell>
      <Table.Cell>
        <Label as="a" name={row.ID} onClick={props.handleRowClick}>
          {row.METADATA_NAME}
        </Label>
      </Table.Cell>
      <Table.Cell>{row.DATA_META_DATATYPE}</Table.Cell>
      <Table.Cell>{row.CREATE_DATE}</Table.Cell>
      <Table.Cell>{row.CREATE_MAN}</Table.Cell>
      <Table.Cell>{row.DATAMETA_FROM}</Table.Cell>
      <Table.Cell>{FormatStandard(row.STANDARD)}</Table.Cell>
    </Table.Row>
  ));
  return elementRows;
}

export default ElementRows;
