import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

window.store = store;

let rerenderEntireTree = () =>
   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <App store={store} />
         </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root'),
   );

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
