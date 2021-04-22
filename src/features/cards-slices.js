import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: 1, title: "Card title", content: "This is the content of the card" },
//   { id: 2, title: "Card title", content: "This is the content of the card" },
//   { id: 3, title: "Card title", content: "This is the content of the card" },
//   { id: 4, title: "Card title", content: "This is the content of the card" },
//   { id: 5, title: "Card title", content: "This is the content of the card" },
//   { id: 6, title: "Card title", content: "This is the content of the card" },
// ];

const cards = createSlice({
  name: "cards",
  initialState: [],
  reducers: {
    cardAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { cardAdded } = cards.actions;

export const cardsReducer = cards.reducer;
