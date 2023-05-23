import { configureStore, createSlice } from "@reduxjs/toolkit";
import  {userSlice} from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import {persistStore, persistReducer} from "redux-persist";
import thunk from 'redux-thunk';
export const {login, logout} = userSlice.actions;

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer= persistReducer(persistConfig, userSlice.reducer)
export const store = configureStore({
    reducer:{
        userDetails: persistedReducer
    } 
})