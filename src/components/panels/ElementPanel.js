import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import FieldcodeTable from "../tables/FieldcodeTable";
import { fetchFieldcode } from "../../actions/elements";

class ElementPanel extends React.Component {
  state = {
    param: {
      limit: 10,
      offset: 0,
      keyword: "",
      elementID: this.props.getActiveRow() || 0
    },
    data: { total: 0, rows: [] },
    loading: false
  };
  componentDidMount = () => this.onInit();
  componentWillReceiveProps(props) {
    this.setState({
      param: { ...this.state.param, elementID: props.getActiveRow() || 0 }
    });
  }

  onInit = () => this.fetchFieldcode(this.state.param);
  setParam = param => this.setState({ param });
  getParam = () => this.state.param;
  handleItemClick = (e, { id }) =>
    this.setState({
      param: { ...this.state.param, activeItem: id }
    });
  fetchFieldcode = param =>
    this.props
      .fetchFieldcode(param)
      .then(res => this.setState({ data: res.data, loading: false }));
  render() {
    const { data, loading } = this.state;
    return (
      <div>
        <Segment attached="bottom" loading={loading}>
          <FieldcodeTable
            submit={this.fetchFieldcode}
            getParam={this.getParam}
            data={data}
          />
        </Segment>
      </div>
    );
  }
}

ElementPanel.propTypes = {
  fetchFieldcode: PropTypes.func.isRequired,
  getActiveRow: PropTypes.func.isRequired
};

export default connect(null, { fetchFieldcode })(ElementPanel);
