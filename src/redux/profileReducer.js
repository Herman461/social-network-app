import { ADD_POST, UPDATE_NEW_POST_TEXT } from './actions';

const initialState = {
	posts: [
	{ likesCount: 23, message: 'Классная аватарка! Я на тебя подписан!', id: 1 },
	{ likesCount: 5, message: 'Yo Yo Yo', id: 2 },
	{ likesCount: 34, message: 'Хорошая веб-страница! Мне очень нравится', id: 3 },
	{ likesCount: 120, message: 'Изучению программирование каждый день.', id: 4 },
	],
	newPostText: '',
}

export const profileReducer = (state = initialState, action) => {
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