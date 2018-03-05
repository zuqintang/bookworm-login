import React from "react";
import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

const Footer = () => (
  <Segment vertical style={{ padding: "10em 0em" }}>
    <Container>
      <Grid divided stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header as="h4" content="外部链接" />
            <List link>
              <List.Item
                as="a"
                href="http://meta.omaha.org.cn/aboutData"
                target="_blank"
              >
                MESH词表中文版
              </List.Item>
              <List.Item
                as="a"
                href="http://meta.omaha.org.cn/standardFile/standard"
                target="_blank"
              >
                卫生部数据元标准文件
              </List.Item>
              <List.Item as="a">链接</List.Item>
              <List.Item as="a">链接</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header as="h4" content="其他系统" />
            <List link>
              <List.Item as="a" href="http://127.0.0.1:8080/home.html#/editor_index " target="_blank">
                CRF
              </List.Item>
              <List.Item as="a" href="http://127.0.0.1:8080/login.html" target="_blank">EDC</List.Item>
              <List.Item as="a">EMR</List.Item>
              <List.Item as="a">样本库</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">系统导航</Header>
            <p>Extra space for a call to action</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
