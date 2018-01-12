import React from "react";
import { Card, Label, Button } from "semantic-ui-react";
import AddSetCtA from "../ctas/AddSetCtA";

const GroupOfSetPage = () => (
  <Card.Group itemsPerRow={6}>
    <Card color="blue">
      <Card.Content>
        <Label corner="right" as="a" icon="grid layout" />
        <Card.Header>数据组1</Card.Header>
        <Card.Meta />
        <Card.Description textAlign="center" />
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            进入
          </Button>
          <Button basic color="red">
            剥离
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card color="blue">
      <Card.Content>
        <Label corner="right" as="a" icon="grid layout" />
        <Card.Header>数据组2</Card.Header>
        <Card.Meta />
        <Card.Description textAlign="center" />
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            进入
          </Button>
          <Button basic color="red">
            剥离
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card color="blue">
      <Card.Content>
        <Label corner="right" as="a" icon="grid layout" />
        <Card.Header>数据组3</Card.Header>
        <Card.Meta />
        <Card.Description textAlign="center" />
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            进入
          </Button>
          <Button basic color="red">
            剥离
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card color="blue">
      <Card.Content>
        <Label corner="right" as="a" icon="grid layout" />
        <Card.Header>数据组4</Card.Header>
        <Card.Meta />
        <Card.Description textAlign="center" />
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            进入
          </Button>
          <Button basic color="red">
            剥离
          </Button>
        </div>
      </Card.Content>
    </Card>
    <AddSetCtA />
  </Card.Group>
);

export default GroupOfSetPage;
