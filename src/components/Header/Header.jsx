import React, { Component } from "react";
import Heart from "../icons/Heart";
import Basket from "../icons/Basket";
import PropTypes from "prop-types";

import "./Header.scss";

class Header extends Component {

  render() {
    const { countBasket, countHeart} = this.props;
    return (
      <div className="header">
        <Basket actions={<p className="basket_counter">{countBasket}</p>} />
        <Heart actions={<p className="heart_counter">{countHeart}</p>} />
      </div>
    );
  }
}

Header.protoTypes = {
  countBasket: PropTypes.number,
  countHeart: PropTypes.number
}

Header.defaultProps = {
  countBasket: 0,
  countHeart: 0
}

export default Header;
