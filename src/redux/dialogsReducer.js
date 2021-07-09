import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from './actions';

export const dialogsReducer = (state, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
		let newMessage = { id: 4, text: state.newMessageText };
		state.messages.push(newMessage);
		state.newMessageText = '';
		return state;
		case UPDATE_NEW_MESSAGE_TEXT:
		state.newMessageText = action.messageText;
		return state;
	}
}