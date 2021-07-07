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
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber();
   },
   addPost() {
      let newPost = { likesCount: 0, message: this._state.profilePage.newPostText, id: 5 };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber();
   },
   updateNewMessageText(newText) {
      this._state.dialogsPage.newMessageText = newText;
      this._callSubscriber();
   },
   addMessage() {
      let newMessage = { id: 4, text: this._state.dialogsPage.newMessageText };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber();
   },
   _callSubscriber() {},
   subscribe(observer) {
      this._callSubscriber = observer;
   }
};

export default store;
