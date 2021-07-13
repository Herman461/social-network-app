export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
export const SET_USERS = 'SET_USERS';
export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
export const FILTER_USERS = 'FILTER_USERS';
export const UPDATE_USERS_SEARCH = 'UPDATE_USERS_SEARCH';


export const addPost = () => ({
	type: ADD_POST,
});

export const updateNewPostText = (postText) => ({
	type: UPDATE_NEW_POST_TEXT,
	postText
});

export const sendMessage = () => ({
	type: SEND_MESSAGE
});

export const updateNewMessageText = (messageText) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	messageText
});

export const toggleFollow = (userId) => ({
	type: TOGGLE_FOLLOW,
	userId
});


export const setUsers = (users) => ({
	type: SET_USERS,
	users
});

export const filterUsers = () => ({
	type: FILTER_USERS,
});

export const updateUsersSearch = (searchText) => ({
	type: UPDATE_USERS_SEARCH,
	searchText
});




