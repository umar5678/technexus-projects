import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      return {
        ...state,
        transactions: action.payload,
      };
    },
    removeTransactions: (state) => {
      state.transactions = [];
    },
  },
});

export const { setTransactions, removeTransactions } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
