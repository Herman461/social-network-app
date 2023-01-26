import * as types from './actionTypes'
import http from "../../http/http";

// export const createPost = (userId) => ({
//     type: types.CREATE_POST,
//     userId
// })

export const deletePost = (postId) => ({
    type: types.DELETE_POST,
    postId
})

export const getPosts = (posts = []) => ({
    type: types.GET_POSTS,
    posts
})

export const updatePost = (postId, data) => ({
    type: types.UPDATE_POST,
    postId,
    data
})

export const addCommentToPost = (postId) => ({
    type: types.ADD_COMMENT_TO_POST,
    postId
})

export const deleteCommentFromPost = (postId) => ({
    type: types.DELETE_COMMENT_FROM_POST,
    postId
})

export const getCommentsFromPost = (postId, count = 10) => ({
    type: types.GET_COMMENTS_FROM_POST,
    postId,
    count
})

export const togglePostLoader = () => ({
    type: types.TOGGLE_POST_LOADER,
})


export const addPost = (post) => ({
    type: types.ADD_POST,
    post
})

export const createPost = (userId, post) => {
    return (dispatch) => {

        dispatch(togglePostLoader())

        return http.post('/profile/create-post', {
            userId,
            post
        })
            .then(response => {

                dispatch(addPost(response.post))
                dispatch(togglePostLoader())
            })
            .catch(error => console.log(error))
    }
}
