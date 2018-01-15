import React from "react";
import PropTypes from "prop-types";
import { Table, Dimmer, Loader, Grid } from "semantic-ui-react";
import SetRows from "../rows/SetRows";
import Paginator from "../tools/Paginator";

class SetTable extends React.Component {
  state = {};
  handleRowClick = e => {
    const activeRowID = parseInt(e.target.name, 10);
    if (this.props.getActiveRow() === activeRowID) this.props.setActiveRow(0);
    else this.props.setActiveRow(activeRowID);
  };
  search = searchParam => {
    this.setState({ active: true });
    this.props.submit(searchParam).then(() => this.setState({ active: false }));
  };

  render() {
    const { active } = this.state;
    const { data, param } = this.props;
    return (
      <Dimmer.Dimmable>
        <Dimmer active={active} inverted onClickOutside={this.handleHide}>
          <Loader />
        </Dimmer>
        <Grid>
          <Grid.Column>
            <Table celled selectable stackable compact="very">
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>名称</Table.HeaderCell>
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
          </Grid.Column>
        </Grid>
      </Dimmer.Dimmable>
    );
  }
}

SetTable.propTypes = {
  submit: PropTypes.func.isRequired,
  getActiveRow: PropTypes.func.isRequired,
  setActiveRow: PropTypes.func.isRequired,
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

export default SetTable;
