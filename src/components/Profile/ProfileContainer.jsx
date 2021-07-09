import React from 'react';

import { addPost, updateNewPostText } from '../../redux/actions';
import Profile from './Profile';
import StoreContext from '../../StoreContext';

const ProfileContainer = (props) => {

   return (
      <StoreContext.Consumer>
      {
         store => {
            let state = store.getState().profilePage;

            function updatePost(text) {
               store.dispatch(updateNewPostText(text));
            }

            function onAddPost() {
               store.dispatch(addPost());
            }
            return (
               <Profile 
                  addPost={onAddPost}
                  updatePost={updatePost}
                  posts={state.posts}
                  newPostText={state.newPostText}
               />
            );
         }
      }
      </StoreContext.Consumer>
   );
};

export default ProfileContainer;
