import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

class Paginator extends React.Component {
  state = { current: 1, activeItem: 1 };
  onClick = e => {
    this.setState({
      current: parseInt(e.target.text, 10),
      activeItem: parseInt(e.target.text, 10)
    });
    const { param } = this.props;
    const offset = (e.target.text - 1) * param.limit;
    const data = { ...this.props.param, offset };
    this.props.onPageSubmit(data);
  };
  onPreClick = () => {
    if (this.state.current > 1) {
      this.setState({
        current: this.state.current - 1,
        activeItem: this.state.current - 1
      });
      const param = this.props.param;
      const offset = (this.state.current - 2) * param.limit;
      const data = { ...this.props.param, offset };
      this.props.onPageSubmit(data);
    }
  };
  onSufClick = () => {
    if (this.state.current < this.props.total) {
      this.setState({
        current: this.state.current + 1,
        activeItem: this.state.current + 1
      });
      const param = this.props.param;
      const offset = this.state.current * param.limit;
      const data = { ...this.props.param, offset };
      this.props.onPageSubmit(data);
    }
  };
  render() {
    const { total } = this.props;
    const { current, activeItem } = this.state;
    return (
      <Menu floated="right" pagination>
        <Menu.Item as="a" icon onClick={this.onPreClick}>
          <Icon name="left chevron" />
        </Menu.Item>
        <Menu.Item as="a" icon onClick={this.onClick} active={activeItem === 1}>
          1
        </Menu.Item>

        {total >= 8 && current > 4 && <Menu.Item>...</Menu.Item>}
        {((total >= 2 && total < 8) || (total >= 8 && current <= 4)) && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === 2}
          >
            2
          </Menu.Item>
        )}

        {total >= 8 &&
          current >= total - 3 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === total - 4}
            >
              {total - 4}
            </Menu.Item>
          )}
        {total >= 8 &&
          current > 4 &&
          current < total - 3 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === current - 1}
            >
              {current - 1}
            </Menu.Item>
          )}

        {((total >= 3 && total < 8) || (total >= 8 && current <= 4)) && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === 3}
          >
            3
          </Menu.Item>
        )}

        {total >= 8 &&
          current > total - 3 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === total - 3}
            >
              {total - 3}
            </Menu.Item>
          )}
        {total >= 8 &&
          current > 4 &&
          current <= total - 3 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === current}
            >
              {current}
            </Menu.Item>
          )}
        {((total >= 4 && total < 8) || (total >= 8 && current <= 4)) && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === 4}
          >
            4
          </Menu.Item>
        )}

        {current > total - 3 &&
          total >= 8 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === total - 2}
            >
              {total - 2}
            </Menu.Item>
          )}
        {current > 4 &&
          current <= total - 3 &&
          total >= 8 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === current + 1}
            >
              {current + 1}
            </Menu.Item>
          )}
        {((total >= 5 && total < 8) || (total >= 8 && current <= 4)) && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === 5}
          >
            5
          </Menu.Item>
        )}

        {current > total - 3 &&
          total >= 8 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === total - 1}
            >
              {total - 1}
            </Menu.Item>
          )}
        {total >= 8 &&
          current <= total - 3 &&
          total >= 8 && <Menu.Item>...</Menu.Item>}
        {total >= 6 &&
          total < 8 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === 6}
            >
              6
            </Menu.Item>
          )}

        {total >= 7 && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === total}
          >
            {total}
          </Menu.Item>
        )}
        <Menu.Item as="a" icon onClick={this.onSufClick}>
          <Icon name="right chevron" />
        </Menu.Item>
      </Menu>
    );
  }
}

Paginator.propTypes = {
  param: PropTypes.shape({}).isRequired,
  onPageSubmit: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

export default Paginator;
