import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import state, {
   addPost,
   updateNewPostText,
   subscribe,
   addMessage,
   updateNewMessageText,
} from './redux/state';

let rerenderEntireTree = () =>
   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <App
               state={state}
               updateNewPostText={updateNewPostText}
               addPost={addPost}
               addMessage={addMessage}
               updateNewMessageText={updateNewMessageText}
            />
         </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root'),
   );

rerenderEntireTree();
subscribe(rerenderEntireTree);
