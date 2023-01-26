import { combineReducers } from 'redux'
import {
    postLoader,
    posts
} from './reducers'

export const profile = combineReducers({
    postLoader,
    posts
})
