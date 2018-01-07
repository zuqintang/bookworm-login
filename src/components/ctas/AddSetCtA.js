import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AddSetCtA = () => (
  <Card centered>
    <Card.Content textAlign="center">
      <Card.Header>添加新的数据集</Card.Header>
      <Link to="/sets/new">
        <Icon name="plus circle" size="massive" />
      </Link>
    </Card.Content>
  </Card>
);

export default AddSetCtA;
