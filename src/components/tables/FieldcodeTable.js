import React from "react";
import { Table, Dimmer, Loader } from "semantic-ui-react";
import FieldcodeRows from "../rows/FieldcodeRows";
import Paginator from "../tools/Paginator";

class FieldcodeTable extends React.Component {
  state = { activeRow: 0, data: { rows: [] }, active: false };
  componentDidMount = () => this.onInit();
  onInit = () => this.search(this.props.getParam());
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
              <Table.HeaderCell>唯一标识</Table.HeaderCell>
              <Table.HeaderCell>值域名称</Table.HeaderCell>
              <Table.HeaderCell>创建日期</Table.HeaderCell>
              <Table.HeaderCell>创建人</Table.HeaderCell>
              <Table.HeaderCell>来源</Table.HeaderCell>
              <Table.HeaderCell>标准</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <FieldcodeRows
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

export default FieldcodeTable;
