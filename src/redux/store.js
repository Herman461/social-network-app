import { ADD_POST, UPDATE_NEW_POST_TEXT, SEND_MESSAGE, UPDATE_NEW_MESSAGE_TEXT } from './actions';

let store = {
   _state: {
      profilePage: {
         posts: [
            { likesCount: 23, message: 'Классная аватарка! Я на тебя подписан!', id: 1 },
            { likesCount: 5, message: 'Yo Yo Yo', id: 2 },
            { likesCount: 34, message: 'Хорошая веб-страница! Мне очень нравится', id: 3 },
            { likesCount: 120, message: 'Изучению программирование каждый день.', id: 4 },
         ],
         newPostText: '',
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: 'Джон' },
            { id: 2, name: 'Иван' },
            { id: 3, name: 'Лера' },
            { id: 4, name: 'Катя' },
            { id: 5, name: 'Степан' },
         ],
         messages: [
            { id: 1, text: 'Привет React' },
            { id: 2, text: 'Изучаю Реакт и Редакс!' },
            { id: 3, text: 'Мне нравится изучать JS!!!' },
         ],
         newMessageText: '',
      },
   },
   getState() {
      return this._state;
   },
   _callSubscriber() {},
   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) {
      switch (action.type) {
         case ADD_POST:
            let newPost = { likesCount: 0, message: this._state.profilePage.newPostText, id: 5 };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
            break;
         case UPDATE_NEW_POST_TEXT:
            this._state.profilePage.newPostText = action.postText;
            this._callSubscriber();
            break;
         case SEND_MESSAGE:
            let newMessage = { id: 4, text: this._state.dialogsPage.newMessageText };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber();
            break;
         case UPDATE_NEW_MESSAGE_TEXT:
            this._state.dialogsPage.newMessageText = action.messageText;
            this._callSubscriber();
            break;
      }
   }
};

export default store;
