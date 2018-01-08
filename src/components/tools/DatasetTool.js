import React from "react";
import PropTypes from "prop-types";
import { Menu } from "semantic-ui-react";
import SetModal from "../modals/SetModal";

class DatasetTool extends React.Component {
  state = {};
  render() {
    const { getActiveRow } = this.props;
    return (
      <Menu.Menu position="right">
        <Menu.Item>
          <SetModal
            getActiveRow={getActiveRow}
            title={"添加新的数据集"}
            icon={"add circle"}
            size={"tiny"}
            component={"add"}
          />
          <SetModal
            getActiveRow={getActiveRow}
            title={"删除数据集"}
            icon={"trash outline"}
            size={"fullscreen"}
            component={"delete"}
          />
          <SetModal
            getActiveRow={getActiveRow}
            title={"修改数据集"}
            icon={"edit"}
            size={"fullscreen"}
            component={"edit"}
          />
          <SetModal
            getActiveRow={getActiveRow}
            title={"导入"}
            icon={"download"}
            size={"fullscreen"}
            component={"import"}
          />
          <SetModal
            getActiveRow={getActiveRow}
            title={"导出"}
            icon={"upload"}
            size={"fullscreen"}
            component={"export"}
          />
        </Menu.Item>
      </Menu.Menu>
    );
  }
}

DatasetTool.propTypes = {
  getActiveRow: PropTypes.func.isRequired
};

export default DatasetTool;
