import React from "react";
import PropTypes from "prop-types";

export default class MyButton extends React.Component {
  static defaultProps = {
    children: "Click here"
  };

  static propTypes = {
    eventClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return (
      <button onClick={e => this.props.eventClick(new Date())}>
        {this.props.children}
      </button>
    );
  }
}