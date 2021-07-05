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
   return <li className="dialogs__message">{props.text}</li>;
};

const Dialogs = () => {
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

   let dialogsElements = dialogs.map((dialog) => (
      <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
   ));
   let messagesElements = messages.map((message) => (
      <Message text={message.text} key={message.id} id={message.id} />
   ))
   return (
      <div className="dialogs">
         <ul className="dialogs__names">{dialogsElements}</ul>
         <ul className="dialogs__messages">
            {messagesElements}
         </ul>
      </div>
   );
};

export default Dialogs;
