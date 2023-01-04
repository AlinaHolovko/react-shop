import React, { Component } from "react";
import Button from "../Button";
import Heart from "../icons/Heart";
import PropTypes from "prop-types";

import "../Cards/Cards.scss";

class Card extends Component {
  state = {
    isFav: false,
  };

  favToggle = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isFav: !prevState.isFav,
      };
    });
  };

  componentDidMount = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    let card = favorites.find((card) => card.id === this.props.currentCard.id);
    if (favorites.includes(card)) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isFav: true,
        };
      });
    }
  };

  render() {
    const { currentCard } = this.props;
    const { isFav } = this.state;
    const { title, price, url, color, article, id } = currentCard;

    return (
      <div className="products_card" id={id}>
        <div className="card_icon">
          <img className="card_icon_img" src={url} alt={title} />
        </div>
        <div className="card_description">
          <p className="title">
            <b>Назва:</b> {title}
          </p>
          <p className="price">
            <b>Ціна:</b> {price}
          </p>
          <p>
            <b>Колір:</b>
            <span className="color" style={{ backgroundColor: color }}></span>
          </p>
          <p>
            <b>Артикль:</b> {article}
          </p>
        </div>
        <div className="buttons-wrap">
          <Button
            text="Додати до кошика"
            backgroundColor="#8bb1a8"
            onClick={() => {
              this.props.hendlerBasket(currentCard);
              this.props.modalOpen();
            }}
          />
        </div>
        <Heart
          fill={isFav ? "pink" : "gray"}
          onClick={() => {
            this.props.addToFavorites(this.props.currentCard);
            console.log(this.props.currentCard);
            this.favToggle();
          }}
        />
      </div>
    );
  }
}

Card.propTypes = {
  currentCard: PropTypes.object,
  isFav: PropTypes.bool,
  title: PropTypes.string,
  price: PropTypes.number, 
  url: PropTypes.string,
  color: PropTypes.string,
  article: PropTypes.number,
  id: PropTypes.number
}

Card.defaultProps = {
  isFav: false
}

export default Card;
