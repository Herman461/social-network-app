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
   let dialogsData = [
      { id: 1, name: 'Джон' },
      { id: 2, name: 'Иван' },
      { id: 3, name: 'Лера' },
      { id: 4, name: 'Катя' },
      { id: 5, name: 'Степан' },
   ];
   let messagesData = [
      { id: 1, message: 'Привет React' },
      { id: 2, message: 'Изучаю Реакт и Редакс!' },
      { id: 3, message: 'Мне нравится изучать JS!!!' },
   ];
   return (
      <div className="dialogs">
         <ul className="dialogs__names">
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
         </ul>
         <ul className="dialogs__messages">
            <Message message={messagesData[0].message} id={dialogsData[0].id} />
            <Message message={messagesData[1].message} id={dialogsData[1].id}/>
            <Message message={messagesData[2].message} id={dialogsData[2].id} />
         </ul>
      </div>
   );
};

export default Dialogs;
