import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h4>数据元管理平台</h4>
    {isAuthenticated ? (
      <button onClick={() => logout()}>退出系统</button>
    ) : (
      <div>
        <Link to="/login">登录</Link> or <Link to="signup">添加用户</Link>
      </div>
    )}
  </div>
);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.realname
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
