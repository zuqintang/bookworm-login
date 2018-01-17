import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu, Segment } from "semantic-ui-react";
import DatagroupTable from "../tables/GroupTable";
import ElementTable from "../tables/ElementTable";
import { fetchSetChildren } from "../../actions/sets";
import PanelForm from "../forms/PanelForm";
import { DATA_GROUP_TYPE, DATA_ELEMENT_TYPE } from "../../types";

class SetPanel extends React.Component {
  state = {
    param: {
      limit: 10,
      offset: 0,
      keyword: "",
      datasetID: this.props.getActiveRow() || 0,
      activeItem: DATA_GROUP_TYPE
    },
    activeRow: 0,
    data: { group: { total: 0, rows: [] }, element: { total: 0, rows: [] } }
  };
  setParam = param => this.setState({ param });
  getParam = () => {
    const param = this.state.param;
    return param;
  };
  setActiveRow = activeRow => this.setState({ activeRow });
  getActiveRow = () => this.state.activeRow;
  handleItemClick = (e, { id }) =>
    this.setState({
      param: { ...this.state.param, activeItem: id }
    });
  fetchSetChildren = param =>
    this.props.fetchSetChildren(param).then(res => {
      if (param.activeItem === 1) {
        this.setState({ data: { ...this.state.data, group: res.data } });
      } else {
        this.setState({ data: { ...this.state.data, element: res.data } });
      }
    });
  render() {
    const { data, param } = this.state;
    return (
      <div>
        <style>{`
          .ui.tabular.menu {
            margin:0;
          }
        `}</style>
        <Menu secondary>
          <Menu.Item
            name="数据组"
            id={DATA_GROUP_TYPE}
            active={param.activeItem === DATA_GROUP_TYPE}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="数据元"
            id={DATA_ELEMENT_TYPE}
            active={param.activeItem === DATA_ELEMENT_TYPE}
            onClick={this.handleItemClick}
          />
          <PanelForm
            submit={this.fetchSetChildren}
            setParam={this.setParam}
            getParam={this.getParam}
          />
        </Menu>
        <Segment attached="bottom">
          {param.activeItem === DATA_GROUP_TYPE && (
            <DatagroupTable
              submit={this.fetchSetChildren}
              getParam={this.getParam}
              data={data.group}
            />
          )}
          {param.activeItem === DATA_ELEMENT_TYPE && (
            <ElementTable
              data={data.element}
              submit={this.fetchSetChildren}
              param={param}
              getParam={this.getParam}
              setActiveRow={this.setActiveRow}
              getActiveRow={this.getActiveRow}
            />
          )}
        </Segment>
      </div>
    );
  }
}

SetPanel.propTypes = {
  fetchSetChildren: PropTypes.func.isRequired,
  getActiveRow: PropTypes.func.isRequired
};

export default connect(null, { fetchSetChildren })(SetPanel);
