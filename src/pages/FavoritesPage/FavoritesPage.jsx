import { useSelector } from "react-redux/";
import { selectorLoading } from "../../selectors";


import Heart from "../../components/icons/Heart";
import EmptyPage from "../../components/EmptyPage";
import PropTypes from "prop-types";

function FavoritesPage({ removeFromFavorites, favorite }) {

  const favItem = favorite.map((currentCard) => (
    <div className="products_card" id={currentCard.id} key={currentCard.id}>
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
        <Heart
          fill="pink"
          onClick={() => {
            removeFromFavorites(currentCard);
          }}
        />
      </div>
    </div>
  ));

  return (
    <>
      {favorite.length === 0 ? (
        <EmptyPage text="FAVORITE" />
      ) : (
        <div className="products">{favItem}</div>
      )}
    </>
  );
}

FavoritesPage.propTypes = {
  removeFromFavorites: PropTypes.func,
  favorite: PropTypes.array,
};

export default FavoritesPage;
