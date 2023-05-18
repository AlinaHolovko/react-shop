import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  actionModal,
  actionModalSecond,
  actionCountBasket,
  actionCountFavorite,
  actionIsFav,
  actionBasket,
  actionDeleteBasket,
  actionCard,
  actionFavorite,
  actionDeleteFavorite,
} from "./actions";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  selectorBasket,
  selectorFavorite,
  selectorCard,
  selectorCountBasket,
  selectorCountFavorite,
  selectorIsModal,
  selectorIsModalSecond,
  selectorIsFav,
} from "./selectors";

import Button from "./components/Button";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Cards from "./pages/CardsPage";

import FavoritesPage from "./pages/FavoritesPage";
import BasketPage from "./pages/BasketPage";

import { ReactComponent as Close } from "./components/icons/close.svg";

import "./index.scss";

function App() {
  //__________________________________________________________

  const dispatch = useDispatch();
  const card = useSelector(selectorCard);
  const basket = useSelector(selectorBasket);
  const favorite = useSelector(selectorFavorite);
  const isModal = useSelector(selectorIsModal);
  const isModalSecond = useSelector(selectorIsModalSecond);
  const countBasket = useSelector(selectorCountBasket);
  const countFavorite = useSelector(selectorCountFavorite);
  const isFav = useSelector(selectorIsFav);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
    localStorage.setItem("basket", JSON.stringify(basket));
    localStorage.setItem("card", JSON.stringify(card));

    if (JSON.parse(localStorage.getItem("favorite"))) {
      dispatch(actionCountFavorite());
    }

    if (JSON.parse(localStorage.getItem("basket"))) {
      dispatch(actionCountBasket());
    }
    // console.log("favorite", favorite);
    // console.log("basket", basket);
    // console.log(card);
  }, [favorite, basket, card]);

  const modalToggle = () => {
    dispatch(actionModal());
  };

  const modalSecondToggle = () => {
    dispatch(actionModalSecond());
  };

  const handlerCard = (card) => {
   dispatch(actionCard(card))
  };

  const addToBasket = (card) => {
    if (!basket.find((item) => item.id === card.id)) {
      dispatch(actionBasket(card));
      modalToggle();
    } else {
      alert(
        "Товар вже додано до кошика. Ви можете змінити кількість товарів у відповідному розділі"
      );
      modalToggle();
    }
  };

  const removeFromBasket = (card) => {
    if (basket.find((item) => item.id === card.id)) {
      dispatch(actionDeleteBasket(card));
      dispatch(modalSecondToggle());
    }
  };

  const addToFavorites = (card) => {
    if (!favorite.find((item) => item.id === card.id)) {
      dispatch(actionFavorite(card));
      dispatch(actionIsFav());
    } else {
      deleteFavorite(card);
    }
  };

  const deleteFavorite = (card) => {
    dispatch(actionDeleteFavorite(card));
    dispatch(actionIsFav());
  };

  return (
    <>
      <Header countBasket={countBasket} countHeart={countFavorite} />
      <Routes>
        <Route
          path="/"
          element={
            <Cards
              addToFavorites={addToFavorites}
              modalOpen={modalToggle}
              isFav={isFav}
              handlerCard={handlerCard}
            />
          }
        />
        <Route
          path="/basket"
          element={
            <BasketPage
              basket={basket}
              handlerCard={handlerCard}
              removeFromBasket={removeFromBasket}
              isModalSecond={isModalSecond}
              closeModal={modalSecondToggle}
              secondModalOpen={modalSecondToggle}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favorite={favorite}
              removeFromFavorites={deleteFavorite}
            />
          }
        />
      </Routes>

      {isModal && (
        <Modal
          backgroundColor="#D5D8E3"
          text="Якщо ви хочете додати товар до кошика, натисніть ОК. Якщо ні - можете закрити вікно."
          header="Додати товар до кошика"
          onClick={() => modalToggle()}
          actions={
            <div className="buttons-wrap">
              <Button
                text="OK"
                backgroundColor="#95979E"
                onClick={() => addToBasket(card)}
              />
              <Button
                text="Cancel"
                backgroundColor="#95979E"
                onClick={() => modalToggle()}
              />
              <Close onClick={() => modalToggle()} />
            </div>
          }
        />
      )}
    </>
  );
}

export default App;
