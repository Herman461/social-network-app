import http from "../../http/http";
import {createAction, createAsyncThunk, createReducer} from "@reduxjs/toolkit";
import {HYDRATE} from 'next-redux-wrapper';
import { getCookie, setCookie } from 'cookies-next';


interface AuthState {
    isAuth: boolean,
    userId: string | null
}

const initialState = {
    isAuth: false,
    userId: null
} as AuthState

export const setUserId = createAction<string | null>('auth/setUserId')
export const getUserId = createAction('auth/getUserId')
export const deleteUserId = createAction('auth/deleteUserId')

export const authReducer = createReducer(initialState, builder => {
    builder
        .addCase(setUserId, (state, action) => {
            return { userId: action.payload, isAuth: true }
        })
        .addCase(HYDRATE, (state, action) => {

            return {...initialState}
        })
})

