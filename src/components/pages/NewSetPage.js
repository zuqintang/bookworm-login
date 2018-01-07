import React from "react";
import { Segment } from "semantic-ui-react";
import SearchSetForm from "../forms/SearchSetForm";

class NewSetPage extends React.Component {
  state = {
    set: null
  };
  render() {
    return (
      <Segment>
        <h1>添加新的数据集到数据集</h1>
        <SearchSetForm />
      </Segment>
    );
  }
}

export default NewSetPage;
