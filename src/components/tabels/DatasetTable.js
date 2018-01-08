import React from "react";
import PropTypes from "prop-types";
import { Table, Dimmer, Loader, Grid, Label } from "semantic-ui-react";
import SetRows from "../rows/SetRows";
import Paginator from "../tools/Paginator";
import DatasetTool from "../tools/DatasetTool";

class DatasetTable extends React.Component {
  state = { activeRow: 0, loading: false };
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
    this.setState({ active: true });
    this.props.submit(searchParam).then(() => this.setState({ active: false }));
  };

  render() {
    const { active, activeRow } = this.state;
    const { data, param } = this.props;
    return (
      <Dimmer.Dimmable>
        <Dimmer active={active} inverted onClickOutside={this.handleHide}>
          <Loader />
        </Dimmer>
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
                <SetRows
                  setData={data.rows}
                  activeRow={activeRow}
                  handleRowClick={this.handleRowClick}
                  getActiveRow={this.getActiveRow}
                />
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="7">
                    <Paginator
                      onPageSubmit={this.search}
                      param={param}
                      total={data.total}
                    />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
          <Grid.Column width={1}>
            <Label as="a" color="teal" ribbon>
              操作面板
            </Label>
            <DatasetTool getActiveRow={this.getActiveRow} />
          </Grid.Column>
        </Grid>
      </Dimmer.Dimmable>
    );
  }
}

DatasetTable.propTypes = {
  submit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    total: PropTypes.number.isRequired,
    rows: PropTypes.array.isRequired
  }).isRequired,
  param: PropTypes.shape({
    study: PropTypes.number.isRequired,
    keyword: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired
  }).isRequired
};

export default DatasetTable;
