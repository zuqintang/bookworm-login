import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import SetForm from "../forms/SetForm";
import * as action from "../../actions/sets";
import { DATA_SET_TYPE } from "../../types";

class EditSetPage extends React.Component {
  componentDidMount = () => this.onInit(this.props);
  onInit = props => props.fetchSet(props.activeRow);
  submit = data =>
    this.props.saveSet(data).then(() => this.props.history.push("/sets"));
  render() {
    const { activeRowdata } = this.props;
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            {activeRowdata ? (
              <SetForm
                submit={this.submit}
                data={activeRowdata}
                type={DATA_SET_TYPE}
              />
            ) : (
              <p>数据加载中。。。</p>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

EditSetPage.propTypes = {
  saveSet: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};

function mapStateToProps(state) {
  return {
    activeRow: { ID: state.sets.activeRow },
    activeRowdata: state.sets.activeRowData
  };
}

EditSetPage.propTypes = {};

export default connect(mapStateToProps, {
  saveSet: action.saveSet,
  fetchSet: action.fetchSet
})(EditSetPage);
