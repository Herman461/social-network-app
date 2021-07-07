export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";


export const addPost = () => ({
	type: ADD_POST,
});

export const updateNewPostText = (postText) => ({
	type: UPDATE_NEW_POST_TEXT,
	postText
})

export const sendMessage = () => ({
	type: SEND_MESSAGE
});

export const updateNewMessageText = (messageText) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	messageText
})

