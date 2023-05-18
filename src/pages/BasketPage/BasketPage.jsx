import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { selectorBasket } from "../../selectors";

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
          <b>Title:</b> {currentCard.title}
        </p>
        <p className="price">
          <b>Price:</b> {currentCard.price}
        </p>
        <p>
          <b>Color:</b>
          <span
            className="color"
            style={{ backgroundColor: currentCard.color }}
          ></span>
        </p>
        <p>
          <b>Article:</b> {currentCard.article}
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
      {basket.length === 0 ? (
        <EmptyPage text="CART" />
      ) : (
        <div className="products">{basketItem}</div>
      )}

      {isModalSecond && (
        <Modal
          backgroundColor="#D5D8E3"
          text="The product has been added to the cart. If you want to remove it, click OK"
          header="Product removal"
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
                backgroundColor="green"
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
