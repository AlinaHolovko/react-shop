import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";


import {
  selectorBasket,
  selectorLoading,
} from "../../selectors";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import EmptyPage from "../../components/EmptyPage";

import { ReactComponent as Close } from "../../components/icons/close.svg";

import "./BasketPage.scss";

function BasketPage({
  secondModalOpen,
  removeFromBasket,
  handlerCard,
  closeModal,
  isModalSecond,
}) {
  const [currentCard, setCurrentCard] = useState({});
  const basket = useSelector(selectorBasket);
  const loading = useSelector(selectorLoading);

  const basketItem = basket.map((currentCard) => (
    <div
      className="products_card basket"
      id={currentCard.id}
      key={currentCard.id}
    >
      <div className="card_icon">
        <img
          className="card_icon_img"
          src={currentCard.url}
          alt={currentCard.title}
        />
      </div>
      <div className="card_description">
        <p className="title">
          <b>Назва:</b> {currentCard.title}
        </p>
        <p className="price">
          <b>Ціна:</b> {currentCard.price}
        </p>
        <p>
          <b>Колір:</b>
          <span
            className="color"
            style={{ backgroundColor: currentCard.color }}
          ></span>
        </p>
        <p>
          <b>Артикль:</b> {currentCard.article}
        </p>
      </div>
      <div className="buttons-wrap">
        <Close
          onClick={() => {
            handlerCard(currentCard);
            setCurrentCard(currentCard);
            secondModalOpen();
          }}
        />
      </div>
    </div>
  ));

  return (
    <>
      {loading ? (
        <EmptyPage text="КОШИК" />
      ) : (
        <div className="products">{basketItem}</div>
      )}

      {isModalSecond && (
        <Modal
          backgroundColor="#D5D8E3"
          text="Товар додано до кошика. Якщо хочете видалити його, натисніть ОК"
          header="Видалення товару"
          onClick={closeModal}
          actions={
            <div className="buttons-wrap">
              <Button
                text="OK"
                backgroundColor="#95979E"
                onClick={() => {
                  removeFromBasket(currentCard);
                }}
              />
              <Button
                text="Cancel"
                backgroundColor="#95979E"
                onClick={closeModal}
              />
              <Close onClick={closeModal} />
            </div>
          }
        />
      )}
    </>
  );
}

BasketPage.propTypes = {
  removeFromFavorites: PropTypes.func,
  favorite: PropTypes.array,
  basket: PropTypes.array,
  secondModalOpen: PropTypes.func,
  removeFromBasket: PropTypes.func,
  handlerCard: PropTypes.func,
  closeModal: PropTypes.func,
  modalSecondToggle: PropTypes.func,
};

export default BasketPage;
