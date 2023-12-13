import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";
import commentSlice from "./slices/commentSlice";
const store = configureStore(
    {
        reducer: {
            app: appSlice,
            search: searchSlice,
            chat: chatSlice,
            comment: commentSlice
        }
    }
)

export default store;