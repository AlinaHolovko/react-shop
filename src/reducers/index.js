import { createReducer, isAsyncThunkAction } from "@reduxjs/toolkit";
import * as actions from "../actions";

const initialState = {
  cards: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
  card: JSON.parse(localStorage.getItem("card")) || {},
  isModal: false,
  isModalSecond: false,
  isFav: false,
  countBasket: 0,
  countFavorite: 0,
  loading: true,
};

export default createReducer(initialState, (builder) => {
  builder

    .addCase(actions.actionCard, (state, { payload }) => {
      state.card = { ...payload };
    })

    .addCase(actions.actionModalSecond, (state) => {
      state.isModalSecond = !state.isModalSecond;
      //console.log(state.isModalSecond);
    })

    .addCase(actions.actionModal, (state) => {
      state.isModal = !state.isModal;
      //console.log(state.isModal);
    })

    .addCase(actions.actionIsFav, (state) => {
      state.isFav = !state.isFav;
    })

    .addCase(actions.actionCountBasket, (state) => {
      state.countBasket = state.basket.length;
      //console.log(state.countBasket);
    })

    .addCase(actions.actionCountFavorite, (state) => {
      state.countFavorite = state.favorite.length;
      //console.log(state.countFavorite);
    })

    .addCase(actions.actionBasket, (state, { payload }) => {
      state.basket = [...state.basket, payload];
    })

    .addCase(actions.actionDeleteBasket, (state, {payload}) => {
      state.basket = state.basket.filter((item) => item.id !== payload.id);
    })

    .addCase(actions.actionFavorite, (state, { payload }) => {
      //console.log(payload);
      state.favorite = [...state.favorite, payload];
    })

    .addCase(actions.actionDeleteFavorite, (state, { payload }) => {
      state.favorite = state.favorite.filter((item) => item.id !== payload.id);
    })

    .addMatcher(
      isAsyncThunkAction(actions.actionFetchCard),
      (state, { payload, meta }) => {
        if (meta.requestStatus === "fulfilled") {
          //console.log(payload);
          state.card = { ...payload };
        }
      }
    )

    .addMatcher(
      isAsyncThunkAction(actions.actionFetchCards),
      (state, { payload, meta }) => {
        if (meta.requestStatus === "fulfilled") {
         // console.log(payload);
          state.cards = [...payload];
          state.loading = false;
        } else {
          state.loading = true;
        }
      }
    )

    .addMatcher(
      isAsyncThunkAction(actions.actionFetchBasket),
      (state, { payload, meta }) => {
        if (meta.requestStatus === "fulfilled") {
          state.basket = [...payload];
          state.loading = false;
        } else {
          state.loading = true;
        }
      }
    )

    .addMatcher(
      isAsyncThunkAction(actions.actionFetchFavorite),
      (state, { payload, meta }) => {
        if (meta.requestStatus === "fulfilled") {
          state.favorite = [...payload];
        }
      }
    );
});
