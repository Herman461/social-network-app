import React from 'react';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
   return (
      <div className="dialogs">
         <ul className="dialogs__names">
            <li><NavLink activeClassName="_active" to="/dialogs/1" className="dialogs__name">Джон</NavLink></li>
            <li><NavLink activeClassName="_active" to="/dialogs/2" className="dialogs__name">Иван</NavLink></li>
            <li><NavLink activeClassName="_active" to="/dialogs/3" className="dialogs__name">Лера</NavLink></li>
            <li><NavLink activeClassName="_active" to="/dialogs/4" className="dialogs__name">Катя</NavLink></li>
            <li><NavLink activeClassName="_active" to="/dialogs/5" className="dialogs__name">Степан</NavLink></li>
         </ul>
         <ul className="dialogs__messages">
            <li className="dialogs__message">Привет React</li>
            <li className="dialogs__message">Изучаю Реакт и Редакс!</li>
            <li className="dialogs__message">Мне нравится изучать JS!!!</li>
         </ul>
      </div>
   );
}

export default Dialogs;