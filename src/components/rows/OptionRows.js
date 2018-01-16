import React from "react";
import { Table } from "semantic-ui-react";
import { FormatStandard } from "../tools/Formater";

function OptionRows(props) {
  const rows = props.data;
  const optionRows = rows.map(row => (
    <Table.Row key={row.ID}>
      <Table.Cell>{row.FIELDCODE_TABLECODE}</Table.Cell>
      <Table.Cell>{row.FIELDCODE_VALUE}</Table.Cell>
      <Table.Cell>{row.FIELDCODE_VALUE_CN_NAME}</Table.Cell>
      <Table.Cell>{row.FIELDORDER}</Table.Cell>
      <Table.Cell>{row.CREATE_MAN}</Table.Cell>
      <Table.Cell>{row.CREATE_DATE}</Table.Cell>
      <Table.Cell>{row.FIELD_FROM}</Table.Cell>
      <Table.Cell>{FormatStandard(row.STANDARD)}</Table.Cell>
    </Table.Row>
  ));
  return optionRows;
}

export default OptionRows;
