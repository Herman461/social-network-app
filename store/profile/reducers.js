import * as types from './actionTypes'

export const postLoader = (state = false, action) => {
    if (action.type === types.TOGGLE_POST_LOADER) {
        return !state
    } else {
        return state
    }
}

export const posts = (state = [], action) => {
    switch (action.type) {
        case types.ADD_POST:
            return [...state, action.post]
        case types.DELETE_POST:
            return state.filter(post => post.id !== action.postId)
        case types.GET_POSTS:
            return [...state, action.posts]
        default:
            return state;
    }
}


