import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatStore";

const rootReducer = combineReducers({
  chats: chatReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
