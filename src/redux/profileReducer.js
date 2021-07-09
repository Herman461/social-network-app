import { ADD_POST, UPDATE_NEW_POST_TEXT } from './actions';

export const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
		let newPost = { likesCount: 0, message: state.newPostText, id: 5 };
		state.posts.push(newPost);
		state.newPostText = '';
		return state;
		case UPDATE_NEW_POST_TEXT:
		state.newPostText = action.postText;
		return state;
		default:
		return state;
	}
}