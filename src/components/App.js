import React from 'react';
import Header from './Header';
import Profile from './Profile';
import { Route } from 'react-router-dom';
import Friends from './Friends';
import Sidebar from './Sidebar';
import Dialogs from './Dialogs';
import Music from './Music';
import Gallery from './Gallery';

const App = () => {
   return (
      <div className="wrapper">
         <Header />
         <main className="page">
            <div className="page__container _container">
               <Sidebar />
               <div className="page__content content-page">
                  <Route component={Profile} path="/profile" />
                  <Route component={Dialogs} path="/dialogs" />
                  <Route component={Friends} path="/friends" />
                  <Route component={Music} path="/music" />
                  <Route component={Gallery} path="/gallery" />
               </div>
            </div>
         </main>
      </div>
   );
};

export default App;
