export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
export const SET_USERS = 'SET_USERS';
export const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';

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

export const toggleSubscribe = (userId) => ({
	type: TOGGLE_SUBSCRIBE,
	userId
});


export const setUsers = (users) => ({
	type: SET_USERS,
	users
});




