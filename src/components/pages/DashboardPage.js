import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Label, List, Statistic } from "semantic-ui-react";
import { fetchFimaly } from "../../actions/sets";
import { NATIONAL, ENTERPRISE, UNCHECK } from "../../types";

class DashboardPage extends React.Component {
  state = {
    data: {
      setByStd: [],
      setByStu: [],
      groupByStd: [],
      groupByStu: [],
      metaStd: [],
      metaStu: []
    }
  };
  componentDidMount = () => this.onInit(this.props);
  onInit = props => props.fetchFimaly();
  render() {
    const { data } = this.props;
    return Object.keys(data).length === 0 ? (
      <p>数据加载中</p>
    ) : (
      <Card.Group itemsPerRow={3}>
        <Card color="blue">
          <Card.Content>
            <Label corner="right" as="a" icon="grid layout" />
            <Card.Header>数据集</Card.Header>
            <Card.Meta />
            <Card.Description textAlign="center">
              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header
                      as={Link}
                      size="huge"
                      to={{
                        pathname: "/sets",
                        query: { standard: NATIONAL }
                      }}
                    >
                      <Statistic size="small" horizontal>
                        <Statistic.Value>
                          {data.setStd.length === 2 && data.setStd[0].total}
                          {data.setStd.length === 1 &&
                            data.setStd[0].flag === 0 &&
                            data.setStd[0].total}
                        </Statistic.Value>
                        <Statistic.Label>国标</Statistic.Label>
                      </Statistic>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header
                      as={Link}
                      size="huge"
                      to={{
                        pathname: "/sets",
                        query: { standard: ENTERPRISE }
                      }}
                    >
                      <Statistic size="small" horizontal>
                        <Statistic.Value>
                          {data.setStd.length === 2 && data.setStd[1].total}
                          {data.setStd.length === 1 &&
                            data.setStd[0].flag === 1 &&
                            data.setStd[0].total}
                          {data.setStd.length === 1 &&
                            data.setStd[0].flag === 0 && <span>0</span>}
                        </Statistic.Value>
                        <Statistic.Label>企标</Statistic.Label>
                      </Statistic>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">
                      <Statistic size="small" horizontal>
                        <Statistic.Value>
                          {data.setStu.length === 2 && data.setStu[0].total}
                          {data.setStu.length === 1 &&
                            data.setStu[0].flag === 0 &&
                            data.setStu[0].total}
                        </Statistic.Value>
                        <Statistic.Label>未审核</Statistic.Label>
                      </Statistic>
                    </List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card color="blue">
          <Card.Content>
            <Label corner="right" as="a" icon="block layout" />
            <Card.Header>数据组</Card.Header>
            <Card.Meta />
            <Card.Description textAlign="center">
              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header
                      as={Link}
                      size="huge"
                      to={{
                        pathname: "/groups",
                        query: { standard: NATIONAL }
                      }}
                    >
                      <Statistic size="small" horizontal>
                        <Statistic.Value>
                          {data.groupStd.length === 2 && data.groupStd[0].total}
                          {data.groupStd.length === 1 &&
                            data.groupStd[0].flag === 0 &&
                            data.groupStd[0].total}
                          {data.groupStd.length === 1 &&
                            data.groupStd[0].flag === 1 && <span>0</span>}
                        </Statistic.Value>
                        <Statistic.Label>国标</Statistic.Label>
                      </Statistic>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header
                      as={Link}
                      size="huge"
                      to={{
                        pathname: "/groups",
                        query: { standard: ENTERPRISE }
                      }}
                    >
                      <Statistic size="small" horizontal>
                        <Statistic.Value>
                          {data.groupStd.length === 2 && data.groupStd[1].total}
                          {data.groupStd.length === 1 &&
                            data.groupStd[0].flag === 1 &&
                            data.groupStd[0].total}
                          {data.groupStd.length === 1 &&
                            data.groupStd[0].flag === 0 && <span>0</span>}
                        </Statistic.Value>
                        <Statistic.Label>企标</Statistic.Label>
                      </Statistic>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">
                      <Statistic size="small" horizontal>
                        <Statistic.Value>
                          {data.groupStu.length === 2 && data.groupStu[0].total}
                          {data.groupStu.length === 1 &&
                            data.groupStu[0].flag === 0 &&
                            data.groupStu[0].total}
                        </Statistic.Value>
                        <Statistic.Label>未审核</Statistic.Label>
                      </Statistic>
                    </List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card color="blue">
          <Card.Content>
            <Label corner="right" as="a" icon="stop" />
            <Card.Header>数据元</Card.Header>
            <Card.Meta />
            <Card.Description textAlign="center">
              <List divided relaxed>
                <List.Item>
                  <List.Content>
                    <List.Header as={Link} size="huge" to="/elments">
                      <Statistic size="small" horizontal>
                        <Statistic.Value>
                          {data.metaStd.length === 2 && data.metaStd[0].total}
                          {data.metaStd.length === 1 &&
                            data.metaStd[0].flag === 0 &&
                            data.metaStd[0].total}
                        </Statistic.Value>
                        <Statistic.Label>国标</Statistic.Label>
                      </Statistic>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">
                      <Statistic size="small" horizontal>
                        <Statistic.Value>
                          {data.metaStd.length === 2 && data.metaStd[1].total}
                          {data.metaStd.length === 1 &&
                            data.metaStd[0].flag === 1 &&
                            data.metaStd[0].total}
                        </Statistic.Value>
                        <Statistic.Label>企标</Statistic.Label>
                      </Statistic>
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header as="a">
                      <Statistic size="small" horizontal>
                        <Statistic.Value>
                          {data.metaStu.length === 2 && data.metaStu[0].total}
                          {data.metaStu.length === 1 &&
                            data.metaStu[0].flag === 0 &&
                            data.metaStu[0].total}
                        </Statistic.Value>
                        <Statistic.Label>未审核</Statistic.Label>
                      </Statistic>
                    </List.Header>
                  </List.Content>
                </List.Item>
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

DashboardPage.propTypes = {
  data: PropTypes.shape({}).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    data: state.sets
  };
}

export default connect(mapStateToProps, { fetchFimaly })(DashboardPage);
