import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image, Container, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as action from "../../actions/auth";

const TopNavigation = ({ user, logout, selectSet, selectElement }) => (
  <Menu inverted style={{ marginBottom: "2em" }} color="teal">
    <Container>
      <Menu.Item as={Link} to="/dashboard">
        首页
      </Menu.Item>
      {!selectSet &&
        !selectElement && (
          <Menu.Item as={Link} to="/sets/new">
            数据元维护
          </Menu.Item>
        )}
      {!selectSet &&
        !selectElement && (
          <Menu.Item as={Link} to="/sets/new">
            检索与导出
          </Menu.Item>
        )}
      {!selectSet &&
        !selectElement && (
          <Menu.Item as={Link} to="/sets/new">
            同义元映射
          </Menu.Item>
        )}
      {!selectSet &&
        !selectElement && (
          <Menu.Item as={Link} to="/sets/new">
            概念域后关联
          </Menu.Item>
        )}
      {!selectSet &&
        !selectElement && (
          <Menu.Item as={Link} to="/sets/new">
            EPM数据同步
          </Menu.Item>
        )}
      {!selectSet &&
        !selectElement && (
          <Menu.Item as={Link} to="/sets/new">
            引用查询
          </Menu.Item>
        )}
      {/* {selectSet && (
        <Menu.Item as={Link} to="/sets/edit">
          修改
        </Menu.Item>
      )}
      {selectSet && (
        <Menu.Item as={Link} to="/sets/group">
          添加数据组
        </Menu.Item>
      )}
      {selectSet && (
        <Menu.Item as={Link} to="/sets/element">
          对照数据元
        </Menu.Item>
      )}
      {selectSet && (
        <Menu.Item as={Link} to="/sets/addOption">
          添加值域项
        </Menu.Item>
      )}
      {selectSet && (
        <Menu.Item as={Link} to="/sets/info">
          添加数据元
        </Menu.Item>
      )}
      {selectElement && (
        <Menu.Item as={Link} to="/elements/new">
          新增
        </Menu.Item>
      )} */}
      <Menu.Menu position="right">
        <Menu.Item as="label">{user.username}</Menu.Item>
        <Menu.Item onClick={() => logout()}>登出</Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired,
  selectSet: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    selectSet: !!state.sets.activeRow,
    selectElement: !!state.elements.activeRow
  };
}

export default connect(mapStateToProps, { logout: action.logout })(
  TopNavigation
);
