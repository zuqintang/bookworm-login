import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import LoginForm from "../forms/LoginForm";
import logo from "../../asserts/images/logo.png";
import background from "../../asserts/images/background.jpg";

const LoginPage = () => (
  <div
    className="login-form"
    style={{
      background: `url(${background}) repeat fixed top`
    }}
  >
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      centered
      columns={2}
      style={{ height: "100%" }}
      verticalAlign="middle"
    >
      <Grid.Column width={5}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src={logo} /> CDE数据元管理平台
        </Header>
        <LoginForm />
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginPage;
