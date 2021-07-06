let state = {
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
};
window.state = state;

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree();
};

export const addPost = () => {
   let newPost = { likesCount: 0, message: state.profilePage.newPostText, id: 5 };
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree();
};

export const updateNewMessageText = (newText) => {
   state.dialogsPage.newMessageText = newText;
   rerenderEntireTree();
};
export const addMessage = () => {
   let newMessage = { id: 4, text: state.dialogsPage.newMessageText };
   state.dialogsPage.messages.push(newMessage);
   state.dialogsPage.newMessageText = '';
   rerenderEntireTree();
};

let rerenderEntireTree;
export const subscribe = (observer) => (rerenderEntireTree = observer);

export default state;
