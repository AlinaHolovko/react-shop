import React, { Component } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Cards from "./components/Cards";
import Header from "./components/Header";
import sendRequest from "./helpers";

import "./index.scss";

class App extends Component {
  state = {
    cards: [],
    basket: [],
    favorite: [],
    currentCard: {},
    isModal: false,
    isAdd: false
  };
  
  showCards = () => {
    sendRequest("./productsArray.json").then((data) => {
      this.setState({ cards: data });
    });
  };

  componentDidMount = () => {
    this.showCards();
    const localFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (localFavorites) {
      this.setState({ favorite: localFavorites });
    }

    const localBasket = JSON.parse(localStorage.getItem("baskets"));
    if (localBasket) {
      this.setState({ basket: localBasket });
    }
    // let card = localBasket.find((card) => card.id === this.currentCard.id);
    // if(localBasket.includes(card)) {
    //   this.setState({isAdd: false});
    // } else {
    //   this.setState({isAdd: true});
    // }

  };

  modalOpen = () => {
    this.setState({ isModal: true });
  };
  closeModal = () => {
    this.setState({ isModal: false });
  };

  hendlerBasket = (currentItem) => {
    localStorage.setItem("currentCard", JSON.stringify(currentItem));
    console.log(currentItem);
  };

  addToBasket = () => {

    const currentCard = JSON.parse(localStorage.getItem("currentCard"))
    console.log(JSON.parse(localStorage.getItem("currentCard")));
    console.log(currentCard);
    
    let card = this.state.basket.find((card) => card.id === currentCard.id);

    if (!this.state.basket.includes(card)) {
      this.setState(
        (prevState) => {
          return {
            ...prevState,
            basket: [...prevState.basket, currentCard],
            isModal: !prevState.isModal,
            isAdd: !prevState.isAdd
          };
        },
        () => {
          console.log(this.state.currentCard);
          console.log(this.state.basket);
          localStorage.setItem("baskets", JSON.stringify(this.state.basket));
        }
      );
    } else {
      this.setState(
        (prevState) => {
          return {
            ...prevState,
            basket: prevState.basket.filter(({ id }) => id !== currentCard.id),
            isModal: !prevState.isModal,
            isAdd: !prevState.isAdd
          };
        },
        () => {
          console.log(this.state.basket);
          localStorage.setItem("baskets", JSON.stringify(this.state.basket));
        }
      );
    }
  };

  addToFavorites = (currentCard) => {
    let card = this.state.favorite.find((card) => card.id === currentCard.id);
    if (!this.state.favorite.includes(card)) {
      this.setState(
        (prevState) => {
          return {
            ...prevState,
            favorite: [...prevState.favorite, currentCard],
            isFav: !prevState.isFav,
          };
        },
        () => {
          console.log(this.state.favorite);
          localStorage.setItem(
            "favorites",
            JSON.stringify(this.state.favorite)
          );
        }
      );
    } else {
      this.setState(
        (prevState) => {
          return {
            ...prevState,
            favorite: prevState.favorite.filter(
              ({ id }) => id !== currentCard.id
            ),
            isFav: false,
          };
        },
        () => {
          console.log(this.state.favorite);
          localStorage.setItem(
            "favorites",
            JSON.stringify(this.state.favorite)
          );
        }
      );
    }
  };

  render() {
    const { cards } = this.state;
    return (
      <>
        <Header
          countBasket={this.state.basket.length}
          countHeart={this.state.favorite.length}
        />
        <Cards
          cardProps={cards}
          addToFavorites={this.addToFavorites}
          hendlerBasket={this.hendlerBasket}
          modalOpen={() => this.modalOpen()}
        />

        {this.state.isModal && (
          <Modal
            backgroundColor="#D5D8E3"
            text={this.state.isAdd ? "Товар вже додано до кошика. Якщо хочете видалити його, натисніть ОК" : "Якщо ви хочете додати товар до кошика, натисніть ОК. Якщо ні - можете закрити вікно."}
            header="Додати товар до кошика"
            onClick={() => this.closeModal()}
            actions={
              <div className="buttons-wrap">
                <Button
                  text="OK"
                  backgroundColor="#95979E"
                  onClick={() => this.addToBasket()}
                />
                <Button
                  text="Cancel"
                  backgroundColor="#95979E"
                  onClick={() => this.closeModal()}
                />
                <svg
                  height="20px"
                  width="20px"
                  viewBox="0 0 500 500"
                  onClick={() => this.closeModal()}
                >
                  <path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249    C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306    C514.019,27.23,514.019,14.135,505.943,6.058z" />

                  <path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636    c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z" />
                </svg>
              </div>
            }
          />
        )}
      </>
    );
  }
}

export default App;
