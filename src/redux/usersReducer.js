import { SET_USERS, TOGGLE_FOLLOW } from './actions';

let initialState = {
	users: []
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(user => user.id === action.userId ? {...user, followed: !user.followed} : user)
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