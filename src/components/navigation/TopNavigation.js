import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import { logout } from "../../actions/auth";
import { allSetsSelector } from "../../reducers/sets";

const TopNavigation = ({ user, logout, hasSet }) => (
  <Menu secondary pointing>
    <Menu.Item as={Link} to="/dashboard">
      首页
    </Menu.Item>
    {!hasSet && (
      <Menu.Item as={Link} to="/sets/new">
        新增数据集
      </Menu.Item>
    )}
    {hasSet && (
      <Menu.Item as={Link} to="/sets/addElement">
        对照数据元
      </Menu.Item>
    )}
    {hasSet && (
      <Menu.Item as={Link} to="/sets/addElement">
        添加数据元
      </Menu.Item>
    )}
    {hasSet && (
      <Menu.Item as={Link} to="/sets/addOption">
        添加值域项
      </Menu.Item>
    )}
    <Menu.Menu position="right">
      <Dropdown
        trigger={
          <Image avatar src={gravatarUrl(user.username + "@hotmail.com")} />
        }
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
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    hasSet: !!state.hasSet
  };
}

export default connect(mapStateToProps, { logout })(TopNavigation);
