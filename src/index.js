import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

let dialogs = [
   { id: 1, name: 'Джон' },
   { id: 2, name: 'Иван' },
   { id: 3, name: 'Лера' },
   { id: 4, name: 'Катя' },
   { id: 5, name: 'Степан' },
];

let messages = [
   { id: 1, text: 'Привет React' },
   { id: 2, text: 'Изучаю Реакт и Редакс!' },
   { id: 3, text: 'Мне нравится изучать JS!!!' },
];

let posts = [
   { likesCount: 23, message: 'Классная аватарка! Я на тебя подписан!', id: 1 },
   { likesCount: 5, message: 'Yo Yo Yo', id: 2 },
   { likesCount: 34, message: 'Хорошая веб-страница! Мне очень нравится', id: 3 },
   { likesCount: 120, message: 'Изучению программирование каждый день.', id: 4 },
];

ReactDOM.render(
   <BrowserRouter>
      <React.StrictMode>
         <App dialogs={dialogs} messages={messages} posts={posts} />
      </React.StrictMode>
   </BrowserRouter>,
   document.getElementById('root'),
);
