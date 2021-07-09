import React from 'react';
import { sendMessage, updateNewMessageText } from '../../redux/actions';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
   let state = props.store.getState().dialogsPage;
   const onSendMessage = () => {
      props.store.dispatch(sendMessage());
   };
   const updateMessage = (text) => {
      props.store.dispatch(updateNewMessageText(text));
   };

   return (
      <Dialogs updateMessage={updateMessage}
         sendMessage={onSendMessage}
         dialogs={state.dialogs} 
         messages={state.messages}
         newMessageText={state.newMessageText}
      />
   );
};

export default DialogsContainer;
