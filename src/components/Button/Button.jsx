import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

class Button extends Component {
  render() {
    const { backgroundColor, text, onClick } = this.props;
    return (
      
      <button
        className="button"
        style={{ backgroundColor: backgroundColor}}
        onClick={onClick}
      >
        {text}
      </button>
      
    );
  }
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}


export default Button;
