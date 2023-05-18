import { useSelector, useDispatch } from "react-redux";
import { useEffect} from "react";
import PropTypes from "prop-types";

import Card from "../../components/Card/Card";
import { actionFetchCards } from "../../actions";
import { selectorCards } from "../../selectors";

import './CardsPage.scss'

function Cards({handlerCard, addToFavorites, modalOpen}) {
  
  const cards = useSelector(selectorCards);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchCards())
  }, [])

  const cardItem = cards.map((card) => (
    <Card
      key={card.id}
      currentCard={card}
      handlerCard={handlerCard}
      addToFavorites={() => addToFavorites(card)}
      modalOpen={modalOpen}
    />
  ));

  return <div className="products">{cardItem}</div>;
}

Cards.propTypes = {
  handlerBasket: PropTypes.func,
  addToFavorites: PropTypes.func,
  modalOpen: PropTypes.func,
  handlerCard: PropTypes.func,
};

export default Cards;
