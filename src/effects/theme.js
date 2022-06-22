// reducers takes an action and previous state and then returns a new state.

import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialStateValue = "";


//de-structuring to define the slice and export its action creators and reducers
export const themeSlice = createSlice({
    name: "theme",
    initialStateValue: {value: initialStateValue},
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
})


export const {changeColor} = themeSlice.actions;
export default themeSlice.reducer;