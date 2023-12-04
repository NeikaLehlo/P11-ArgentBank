import { configureStore } from "@reduxjs/toolkit";
import { authUserSlice } from "./authUserSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        authUser: authUserSlice.reducer
    }
})