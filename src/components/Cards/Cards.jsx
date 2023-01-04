import React, { Component } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

class Cards extends Component {
  render() {
    const { cardProps, hendlerBasket, addToFavorites, modalOpen } =
      this.props;
    const cardItem = cardProps.map((card, index) => (
      <Card
        key={index}
        currentCard={card}
        hendlerBasket={hendlerBasket}
        addToFavorites={addToFavorites}
        modalOpen={modalOpen}
      />
    ));

    return <div className="products">{cardItem}</div>;
  }
}

Cards.propTypes = {
  cardProps: PropTypes.array,
  hendlerBasket: PropTypes.func,
  addToFavorites: PropTypes.func,
  modalOpen: PropTypes.func,
}

export default Cards;
