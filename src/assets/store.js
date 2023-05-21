import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = {value: {}};
const userSlice = createSlice({
    name:"userDetails",
    initialState,
    reducers: {
        login:(state, action) =>{
            state.value = action.payload;
        },
        logout: (state) =>{
            state.value = initialState.value;
        }
    }
});
export const {login, logout} = userSlice.actions
export const store = configureStore({
    reducer:{
        userDetails: userSlice.reducer
    } 
})