import React from "react";
import PropTypes from "prop-types";
import { Table, Dimmer, Loader } from "semantic-ui-react";
import Paginator from "../tools/Paginator";
import ElementRows from "../rows/ElementRows";

class ElementTable extends React.Component {
  state = { data: { rows: [] }, active: false };
  search = searchParam => {
    this.setState({ active: true });
    this.props.submit(searchParam).then(() => this.setState({ active: false }));
  };
  handleRowClick = e => {
    const activeRowID = parseInt(e.target.name, 10);
    if (this.props.getActiveRow() && this.props.getActiveRow() === activeRowID)
      this.props.setActiveRow(0);
    else this.props.setActiveRow(activeRowID);
  };
  render() {
    const { active } = this.state;
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
              <Table.HeaderCell>数据元编码</Table.HeaderCell>
              <Table.HeaderCell>数据元名称</Table.HeaderCell>
              <Table.HeaderCell>数据类型</Table.HeaderCell>
              <Table.HeaderCell>创建日期</Table.HeaderCell>
              <Table.HeaderCell>创建人</Table.HeaderCell>
              <Table.HeaderCell>来源</Table.HeaderCell>
              <Table.HeaderCell>标准</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <ElementRows
              data={data.rows}
              handleRowClick={this.handleRowClick}
              getActiveRow={this.props.getActiveRow}
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

ElementTable.propTypes = {
  submit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    total: PropTypes.number.isRequired,
    rows: PropTypes.array.isRequired
  }).isRequired,
  getParam: PropTypes.func.isRequired
};

export default ElementTable;
