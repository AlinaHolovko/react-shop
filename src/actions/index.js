import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import sendRequest from "../helpers";

export const actionCards = createAction('ACTION_CARDS');
export const actionBasket = createAction("ACTION_BASKET");
export const actionDeleteBasket = createAction("ACTION_DELETE_BASKET");
export const actionFavorite = createAction("ACTION_FAVORITE");
export const actionDeleteFavorite = createAction('ACTION_DELETE_FAVORITE')
export const actionCard = createAction("ACTION_CARD");
export const actionModal = createAction('ACTION_MODAL');
export const actionModalSecond = createAction('ACTION_MODAL_SECOND');
export const actionIsFav = createAction('ACTION_IS_FAV');

export const actionCountBasket = createAction('ACTION_COUNT_BASKET');
export const actionCountFavorite = createAction('ACTION_COUNT_FAVORITE');

export const actionTest = createAction('ACTION__TEST')



export const actionFetchCards = createAsyncThunk("cards/fetchData",
    async () => {
        const data = await sendRequest(`${process.env.PUBLIC_URL}/productsArray.json`);
        return data;
    }
);

export const actionFetchBasket = createAsyncThunk("basket/fetchData",
    async () => {
        const results = await sendRequest(JSON.parse(localStorage.getItem("basket")) || []);
        return results;
    }
);

export const actionFetchFavorite = createAsyncThunk("favorite/fetchData",
    async () => {
        const results = await sendRequest(JSON.parse(localStorage.getItem("favorite")) || []);
        return results;
    }
);

export const actionFetchCard = createAsyncThunk("card/fetchData",
    async () => {
        const results = await sendRequest(JSON.parse(localStorage.getItem("card")) || []);
        return results;
    }
);