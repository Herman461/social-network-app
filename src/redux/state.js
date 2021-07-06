let state = {
   profilePage: {
      posts: [
         { likesCount: 23, message: 'Классная аватарка! Я на тебя подписан!', id: 1 },
         { likesCount: 5, message: 'Yo Yo Yo', id: 2 },
         { likesCount: 34, message: 'Хорошая веб-страница! Мне очень нравится', id: 3 },
         { likesCount: 120, message: 'Изучению программирование каждый день.', id: 4 },
      ],
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
   },
};

export default state;
