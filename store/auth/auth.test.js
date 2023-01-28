// import {store} from '../store'
import * as axios from "axios";
import {getUserId, setUserId, authReducer} from "./auth";
import configureStore from 'redux-mock-store'

jest.mock('axios')

const middlewares = []

const mockStore = configureStore(middlewares)

const initialState = {
    auth: {
        isAuth: false,
        userId: undefined
    }

}

const store = mockStore(initialState)

describe('Auth redux tests', () => {
    it ('Check if user is authenticated', async () => {
        const expectedActions = [
            {
                type: getUserId.toString()
            },
            {
                type: setUserId.toString()
            }
        ]

        await store.dispatch(getUserId())

        expect(store.getActions()).toEqual(expectedActions)
    })

    it ('Should return the initial state', () => {
        expect(authReducer(undefined, {type: undefined})).toEqual(initialState.auth)
    })
})
