import React from "react";
import PropTypes from "prop-types";
import { Table, Grid } from "semantic-ui-react";
import SetSelectRows from "../rows/SetSelectRows";
import Paginator from "../tools/Paginator";

class DatasetSelectTable extends React.Component {
  state = { activeRow: 0 };
  getActiveRow = () => {
    const activeRowID = this.state.activeRow;
    return activeRowID;
  };
  handleRowClick = e => {
    const activeRowID = parseInt(e.target.name, 10);
    if (this.state.activeRow === activeRowID) this.setState({ activeRow: 0 });
    else this.setState({ activeRow: activeRowID });
  };
  search = searchParam => {
    this.props.submit(searchParam);
  };

  render() {
    const { activeRow } = this.state;
    const { data, param } = this.props;
    return (
      <Grid width={16}>
        <Grid.Column width={15}>
          <Table celled selectable stackable compact="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>数据集名称</Table.HeaderCell>
                <Table.HeaderCell>编码</Table.HeaderCell>
                <Table.HeaderCell>来源</Table.HeaderCell>
                <Table.HeaderCell>所属学科</Table.HeaderCell>
                <Table.HeaderCell>创建日期</Table.HeaderCell>
                <Table.HeaderCell>创建人</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <SetSelectRows
                setData={data.rows}
                activeRow={activeRow}
                handleRowClick={this.handleRowClick}
                getActiveRow={this.getActiveRow}
                param={param}
              />
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="7">
                  <Paginator
                    onPageSubmit={this.search}
                    param={param}
                    total={Math.ceil(data.total / 10)}
                    setParam={this.props.setParam}
                  />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Grid.Column>
      </Grid>
    );
  }
}

DatasetSelectTable.propTypes = {
  submit: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default DatasetSelectTable;
