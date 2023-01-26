import * as types from "./actionTypes";

import {getCookie} from "../../utils/cookie";
import http from "../../http/http";

export const deleteUserId = () => ({
    type: types.DELETE_USER_ID
})

export const setUserId = (userId) => ({
    type: types.SET_USER_ID,
    userId
})

export const getUserId = () => ({
    type: types.GET_USER_ID
})

export const isAuth = () => {

    return (dispatch) => {
        const token = getCookie('token')

        http.post('/auth/verify-token', {
            token
        })
            .then(response => {
                const {userId} = response

                if (userId) {
                    dispatch(setUserId(userId))
                }
            })
    }
}
