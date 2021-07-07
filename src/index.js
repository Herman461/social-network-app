import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

window.store = store;

let rerenderEntireTree = () =>
   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <App
               state={store.getState()}
               updateNewPostText={store.updateNewPostText.bind(store)}
               addPost={store.addPost.bind(store)}
               updateNewMessageText={store.updateNewMessageText.bind(store)}
               addMessage={store.addMessage.bind(store)}
            />
         </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root'),
   );

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
