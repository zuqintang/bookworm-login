import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { Grid, Label, Button, Divider } from "semantic-ui-react";

const colors = [
  // { color: "red", text: "新增数据集" },
  // { color: "orange", text: "数据集关联数据组" },
  // { color: "yellow", text: "数据组关联数据元" },
  // { color: "olive", text: "数据元关联值域" }
  { color: "green", text: "值域关联值域项" },
  { color: "teal", text: "新增数据元" },
  { color: "blue", text: "新增数据集" }
  // { color: "violet", text: "新增数据组" },
  // { color: "purple", text: "删除数据元" },
  // { color: "pink", text: "删除数据组" }
  // { color: "brown", text: "删除数据集" },
  // { color: "grey", text: "导入数据集" },
  // { color: "black", text: "导入数据集" }
];

const MaintainFlow = () => (
  <Grid columns={3}>
    <Divider horizontal header>
      入口
    </Divider>
    <Grid.Row textAlign="center">
      <Grid.Column width={5}>
        <Button
          as={Link}
          to="/setflow"
          size="massive"
          primary
          icon="table"
          label="数据集"
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Button
          as={Link}
          to="/groupflow"
          size="massive"
          primary
          icon="table"
          label="数据组"
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Button
          as={Link}
          to="/elementflow"
          size="massive"
          primary
          icon="table"
          label="数据元"
        />
      </Grid.Column>
    </Grid.Row>
    <Divider horizontal>常用业务</Divider>
    <Label.Group>
      {colors.map(color => (
        <Label color={color.color} key={color.color}>
          {_.capitalize(color.text)}
        </Label>
      ))}
    </Label.Group>
  </Grid>
);

export default MaintainFlow;
