import { configureStore } from "@reduxjs/toolkit";
import chatbotReducer from "./chatbotSlice.jsx";

const store = configureStore({
  reducer: {
    chatbot: chatbotReducer,
  },
});

export default store;