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
            // return state;
        },

        logout: (state) => {
            //{type: "authUser/logout"}
            state = {
                token: "",
                // user: {}
            }
            return state;
        },
    },
});

export const {login, logout} = authUserSlice.actions;