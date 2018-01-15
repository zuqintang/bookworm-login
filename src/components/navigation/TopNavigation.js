import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import * as action from "../../actions/auth";

const TopNavigation = ({ user, logout, hasSet, selectSet }) => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to="/dashboard">
      首页
    </Menu.Item>
    {!hasSet &&
      !selectSet && (
        <Menu.Item as={Link} to="/sets/new">
          新增
        </Menu.Item>
      )}
    {!hasSet &&
      !selectSet && (
        <Menu.Item as={Link} to="/sets/new">
          检索与导出
        </Menu.Item>
      )}
    {!hasSet &&
      !selectSet && (
        <Menu.Item as={Link} to="/sets/new">
          同义元映射
        </Menu.Item>
      )}
    {!hasSet &&
      !selectSet && (
        <Menu.Item as={Link} to="/sets/new">
          概念域后关联
        </Menu.Item>
      )}
    {!hasSet &&
      !selectSet && (
        <Menu.Item as={Link} to="/sets/new">
          EPM数据同步
        </Menu.Item>
      )}
    {!hasSet &&
      !selectSet && (
        <Menu.Item as={Link} to="/sets/new">
          引用查询
        </Menu.Item>
      )}
    {selectSet && (
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
    <Menu.Menu position="right">
      <Dropdown
        trigger={<Image avatar src={gravatarUrl(`${user.username}@cde.com`)} />}
      >
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => logout()}>登出</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

TopNavigation.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired
  }).isRequired,
  hasSet: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  selectSet: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    hasSet: !!state.hasSet,
    selectSet: !!state.sets.activeRow
  };
}

export default connect(mapStateToProps, { logout: action.logout })(
  TopNavigation
);
