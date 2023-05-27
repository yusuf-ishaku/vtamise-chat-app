import { configureStore, createSlice } from "@reduxjs/toolkit";
import  {userSlice} from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
export const {login, logout} = userSlice.actions;

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const reducer = combineReducers({
    userDetails: userSlice.reducer,
});
const persistedReducer= persistReducer(persistConfig, reducer)
export const store = configureStore({
    reducer: persistReducer,
})