import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatList: [],
  chatId: "",
  currentChat: {},
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    getCurrentChat: (state, action) => {
      state.chatList.find((chat) => chat.chatId === action.payload);
    },

    addChat(state, action) {
      state.chatList.push(action.payload);
    },

    addMessageInChat(state, action) {
      state.chatList.map((chat) => {
        if (chat.chatId === action.payload.chatId) {
          chat.messages = [...chat.messages, action.payload.message];
        }
      });
    },
  },
});

export const { addChat, addMessageInChat, getCurrentChat } = chatSlice.actions;

export default chatSlice.reducer;
