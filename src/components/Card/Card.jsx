import {useState, useEffect } from "react";
import Button from "../Button";
import Heart from "../icons/Heart";

import PropTypes from "prop-types";

import "../../pages/CardsPage/CardsPage.scss";

function Card({ currentCard, addToFavorites, handlerCard, modalOpen}) {
  const [isFav, setIsFav] = useState(false);

  const { title, price, url, color, article, id } = currentCard;
  
  useEffect(() => {
    
    const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
      if (favorites.find((item) => item.id === currentCard.id)) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
  }, [currentCard]);

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
            handlerCard(currentCard);
            modalOpen();
          }}
        />
      </div>
      <Heart
        fill={isFav ? "pink" : "gray"}
        onClick={() => {
          addToFavorites();
         setIsFav(!isFav);
        }}
      />
    </div>
  );
}

Card.propTypes = {
  currentCard: PropTypes.object,
  addToFavorites: PropTypes.func,
  handlerCurrentCard: PropTypes.func,
  modalOpen: PropTypes.func,
};

Card.defaultProps = {
  isFav: false,
};

export default Card;
