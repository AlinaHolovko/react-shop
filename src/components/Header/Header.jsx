import Heart from "../icons/Heart";
import Basket from "../icons/Basket";
import Navigation from "../Navigation";
import PropTypes from "prop-types";

import "./Header.scss";

function Header({ countBasket, countHeart}) {
  
  return (
    <div className="header">
      <Navigation />
      <div className="header__icons">
      <Basket actions={<p className="basket_counter">{countBasket}</p>} />
      <Heart actions={<p className="heart_counter">{countHeart}</p>} />
      </div>
    </div>
  );
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
