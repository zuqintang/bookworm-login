import React from "react";
import PropTypes from "prop-types";
import { Table, Dimmer, Loader } from "semantic-ui-react";
import Paginator from "../tools/Paginator";
import GroupRows from "../rows/GroupRows";

class DatagroupTable extends React.Component {
  state = { activeRow: 0, data: { rows: [] }, active: false };
  getActiveRow = () => {
    const activeRowID = this.state.activeRow;
    return activeRowID;
  };
  search = searchParam => {
    this.setState({ active: true });
    this.props.submit(searchParam).then(() => this.setState({ active: false }));
  };
  handleRowClick = e => {
    const activeRowID = parseInt(e.target.name, 10);
    if (this.state.activeRow === activeRowID) this.setState({ activeRow: 0 });
    else this.setState({ activeRow: activeRowID });
  };
  render() {
    const { active, activeRow } = this.state;
    const { data } = this.props;
    const param = this.props.getParam();
    return (
      <Dimmer.Dimmable>
        <Dimmer active={active} inverted onClickOutside={this.handleHide}>
          <Loader />
        </Dimmer>
        <Table celled selectable stackable compact="very">
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>数据组名称</Table.HeaderCell>
              <Table.HeaderCell>编码</Table.HeaderCell>
              <Table.HeaderCell>来源</Table.HeaderCell>
              <Table.HeaderCell>所属学科</Table.HeaderCell>
              <Table.HeaderCell>创建日期</Table.HeaderCell>
              <Table.HeaderCell>创建人</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <GroupRows
              data={data.rows}
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
      </Dimmer.Dimmable>
    );
  }
}

DatagroupTable.propTypes = {
  submit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    total: PropTypes.number.isRequired,
    rows: PropTypes.array.isRequired
  }).isRequired,
  getParam: PropTypes.func.isRequired
};

export default DatagroupTable;
