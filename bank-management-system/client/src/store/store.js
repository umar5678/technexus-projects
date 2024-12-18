import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import transactionsSlice from "./transactionsSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// for multiple reducerSlices later on, i will use combineReducer in a separate file

const rootReducer = combineReducers({
  user: userSlice,
  transactions: transactionsSlice,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
