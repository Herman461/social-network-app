import React from 'react';

import DialogItem from './DialogItem';
import Message from './Message';


const Dialogs = (props) => {
   let dialogsElements = props.state.dialogs.map((dialog) => (
      <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
   ));
   let messagesElements = props.state.messages.map((message) => (
      <Message text={message.text} key={message.id} id={message.id} />
   ));

   return (
      <div className="dialogs">
         <ul className="dialogs__names">{dialogsElements}</ul>
         <ul className="dialogs__messages">{messagesElements}</ul>
      </div>
   );
};

export default Dialogs;
