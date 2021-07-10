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
		{
			let stateCopy = { ...state };
			stateCopy.posts = [ ...state.posts ];

			let newPost = { likesCount: 0, message: state.newPostText, id: 5 };
			stateCopy.posts.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT:
		{
			let stateCopy = { ...state };
			stateCopy.newPostText = action.postText;
			return stateCopy;
		}
		default:
			return state;
	}
}