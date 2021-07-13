import {
	SET_USERS,
	TOGGLE_FOLLOW,
	UPDATE_USERS_SEARCH,
	FILTER_USERS } from './actions';

let initialState = {
	users: [],
	filteredUsers: [],
	text: "",

}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(user => 
					user.id === action.userId ? 
					{...user, followed: !user.followed} : user
				)
			}
		case SET_USERS:
			return {
				...state,
				users: [...state.users, ...action.users],
				filteredUsers: [...state.filteredUsers, ...action.users]
			}
		case FILTER_USERS:
			return {
				...state,
				users: state.users.filter(user => user.name.includes(state.text))
			}
		case UPDATE_USERS_SEARCH:
			return {
				...state,
				text: action.searchText
			};
		default:
			return state;
	}
}
