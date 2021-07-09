import React from 'react';
import { sendMessage, updateNewMessageText } from '../../redux/actions';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {


   return (
      <StoreContext.Consumer>
      {
         store => {
            let state = store.getState().dialogsPage;

            const onSendMessage = () => {
               store.dispatch(sendMessage());
            };

            const updateMessage = (text) => {
               store.dispatch(updateNewMessageText(text));
            };
            return (
               <Dialogs updateMessage={updateMessage}
                  sendMessage={onSendMessage}
                  dialogs={state.dialogs} 
                  messages={state.messages}
                  newMessageText={state.newMessageText}
               />
            );
         }
      }
      </StoreContext.Consumer>

   );
};

export default DialogsContainer;
