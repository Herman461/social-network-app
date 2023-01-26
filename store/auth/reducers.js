import * as types from "./actionTypes";


export const auth = (state = false, action) => {

    switch (action.type) {
        case types.SET_USER_IS_AUTHORIZED:
            return true
        case types.SET_USER_IS_UNAUTHORIZED:
            return false
        default:
            return state
    }
}

export const userId = (state = null, action) => {

    switch (action.type) {
        case types.DELETE_USER_ID:
            return null
        case types.SET_USER_ID:
            return action.userId
        case types.GET_USER_ID:
            return state
        default:
            return state;
    }
}
