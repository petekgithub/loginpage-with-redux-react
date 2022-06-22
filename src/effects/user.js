// Step 1: Implement userSlice method and export actions and reducer.

// createSlice is a HOF
// slice is a   collection of redux reducer logic and actions for single feature in your app, typically defined together in a single file.

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    firstName: "",
    lastName: "",
    age:0,
    email:""
}

// userSlice method contains all the values required to create a reducer. 
// After that, we need to export the actions and the reducer.
export const userSlice = createSlice({
    name: "user" ,
    initialState: { value: initialStateValue},
    reducers:{
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = action.payload;
        },
    }
});


export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
