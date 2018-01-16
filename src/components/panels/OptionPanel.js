import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu, Segment } from "semantic-ui-react";
import OptionTable from "../tables/OptionTable";
import { fetchOption } from "../../actions/elements";
import PanelForm from "../forms/PanelForm";

class OptionPanel extends React.Component {
  state = {
    param: {
      limit: 10,
      offset: 0,
      keyword: "",
      fieldcodeID: this.props.getActiveRow() || 0
    },
    data: { total: 0, rows: [] }
  };
  componentDidMount = () => this.onInit();
  onInit = () => this.fetchOption(this.state.param);
  setParam = param => this.setState({ param });
  getParam = () => {
    const param = this.state.param;
    return param;
  };
  handleItemClick = (e, { id }) =>
    this.setState({
      param: { ...this.state.param, activeItem: id }
    });
  fetchOption = param =>
    this.props
      .fetchOption(param)
      .then(res => this.setState({ data: res.data }));
  render() {
    const { data } = this.state;
    return (
      <div>
        <style>{`
          .ui.tabular.menu {
            margin:0;
          }
        `}</style>
        <Menu secondary>
          <PanelForm
            submit={this.fetchOption}
            setParam={this.setParam}
            getParam={this.getParam}
          />
        </Menu>
        <Segment attached="bottom">
          <OptionTable
            submit={this.fetchOption}
            getParam={this.getParam}
            data={data}
          />
        </Segment>
      </div>
    );
  }
}

OptionPanel.propTypes = {
  fetchOption: PropTypes.func.isRequired,
  getActiveRow: PropTypes.func.isRequired
};

export default connect(null, { fetchOption })(OptionPanel);
