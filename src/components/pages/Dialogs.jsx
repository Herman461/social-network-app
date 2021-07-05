import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   return (
      <li>
         <NavLink activeClassName="_active" to={`/dialogs/${props.id}`} className="dialogs__name">
            {props.name}
         </NavLink>
      </li>
   );
};

const Message = (props) => {
   return <li className="dialogs__message">{props.message}</li>;
};

const Dialogs = () => {
   return (
      <div className="dialogs">
         <ul className="dialogs__names">
            <DialogItem name="Джон" id="1" />
            <DialogItem name="Иван" id="2" />
            <DialogItem name="Лера" id="3" />
            <DialogItem name="Катя" id="4" />
            <DialogItem name="Степан" id="5" />
         </ul>
         <ul className="dialogs__messages">
            <Message message="Привет React" />
            <Message message="Изучаю Реакт и Редакс!" />
            <Message message="Мне нравится изучать JS!!!" />
         </ul>
      </div>
   );
};

export default Dialogs;
