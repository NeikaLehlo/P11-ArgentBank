import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
    },

    reducers: {
        addUserData: (state, action) => {
            //{type: "userSlice/addUserData", payload: email, firstName, lastName, userName}
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.userName = action.payload.userName;
        },

        editUserName: (state, action) => {
            //{type: "userSlice/editUserName", payload: newUserName}
            state.userName = action.payload;
        },

        deleteUserData: (state) => {
            //{type: "userSlice/editUserData"}
            // return initialState;
            state.email = "";
            state.firstName = "";
            state.lastName = "";
            state.userName = "";
        },
    },
});

export const {addUserData, editUserName, deleteUserData} = userSlice.actions;