import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { Provider } from './StoreContext';

window.store = store;

let rerenderEntireTree = () =>
   ReactDOM.render(
      <Provider store={store}>
         <BrowserRouter>
            <React.StrictMode>
              <App />
           </React.StrictMode>
         </BrowserRouter>
      </Provider>,
      document.getElementById('root'),
   );

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
