import { createSlice } from "@reduxjs/toolkit";

export const authUserSlice = createSlice({
    name: "authUser",
    initialState: {
        token: "",
    },
    
    reducers: {
        login: (state, action) => {
            //{type: "authUSer/login", payload: token}
            
            state.token = action.payload.token;
        },

        logout: (state) => {
            //{type: "authUser/logout"}
            state.token = ""
        },
    },
});

export const {login, logout} = authUserSlice.actions;