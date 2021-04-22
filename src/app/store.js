import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "../features/cards-slices";

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
  preloadedState,
});
