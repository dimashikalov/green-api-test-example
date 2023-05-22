import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatList: [],
  chatId: "",
  currentChat: undefined,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    getCurrentChat: (state, action) => {
      console.log("action", action.payload);
      state.currentChat = state.chatList.find(
        (chat) => chat.chatId === action.payload
      );
      console.log("state", state.currentChat);
    },

    addChat(state, action) {
      console.log("action", action.payload);
      state.chatList.push(action.payload);
      console.log("state", state.chatList);
    },

    addMessageInChat(state, action) {
      console.log("action", action.payload);
      state.chatList.map((chat) => {
        if (chat.chatId === action.payload.chatId) {
          chat.messages = [...chat.messages, action.payload.newMessage];
        }
      });
      console.log("state", state.chatList);
    },

    setChatId(state, action) {
      console.log("action", action.payload);
      state.chatId = action.payload;
      console.log("state", state.chatId);
    },
  },
});

export const { addChat, addMessageInChat, getCurrentChat, setChatId } =
  chatSlice.actions;

export default chatSlice.reducer;
