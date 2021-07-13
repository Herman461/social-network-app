import { SET_USERS, TOGGLE_SUBSCRIBE } from './actions';

let initialState = {
	users: []
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_SUBSCRIBE:
			return {
				...state,
				users: state.users.map(user => user.id === action.userId ? {...user, subscribed: !user.subscribed} : user)
			}
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users]
			}
		default:
			return state;
	}
}