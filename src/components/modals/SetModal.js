import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Modal, Button } from "semantic-ui-react";
import AddPage from "../pages/AddPage";
import DeletePage from "../pages/DeletePage";
import EditPage from "../pages/EditPage";
import ExportPage from "../pages/ExportPage";
import ImportPage from "../pages/ImportPage";
import { searchSetInfo } from "../../actions/dataset";

class SetModal extends React.Component {
  state = { data: { ID: 1 }, open: false };
  onClick = () => {
    const ID = this.props.getActiveRow();
    if (ID === 0) return;
    const param = { ID };
    this.props.searchSetInfo(param).then(res => {
      this.setState({ data: res.rows[0] });
    });
  };
  close = () => this.setState({ open: false });
  open = () => {
    if (this.props.getActiveRow() !== 0) this.setState({ open: true });
  };
  render() {
    const { open, data } = this.state;
    const { title, icon, size, component, getActiveRow } = this.props;
    return (
      <Modal
        dimmer="blurring"
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size={size}
        trigger={<Button basic circular icon={icon} onClick={this.onClick} />}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          {component === "add" && (
            <AddPage
              close={this.close}
              data={data}
              getActiveRow={getActiveRow}
            />
          )}
          {component === "delete" && (
            <DeletePage
              close={this.close}
              data={data}
              getActiveRow={getActiveRow}
            />
          )}
          {component === "edit" && (
            <EditPage
              close={this.close}
              data={data}
              getActiveRow={getActiveRow}
            />
          )}
          {component === "export" && (
            <ExportPage
              close={this.close}
              data={data}
              getActiveRow={getActiveRow}
            />
          )}
          {component === "import" && (
            <ImportPage
              close={this.close}
              data={data}
              getActiveRow={getActiveRow}
            />
          )}
        </Modal.Content>
      </Modal>
    );
  }
}

SetModal.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  component: PropTypes.string.isRequired,
  searchSetInfo: PropTypes.func.isRequired,
  getActiveRow: PropTypes.func.isRequired
};
export default connect(null, { searchSetInfo })(SetModal);
