import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';

ReactDOM.render(
   <BrowserRouter>
      <React.StrictMode>
         <App state={state} />
      </React.StrictMode>
   </BrowserRouter>,
   document.getElementById('root'),
);
