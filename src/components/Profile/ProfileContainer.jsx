import React from 'react';

import { addPost, updateNewPostText } from '../../redux/actions';
import Profile from './Profile';

const ProfileContainer = (props) => {
   let state = props.store.getState().profilePage;

   function updatePost(text) {
      props.store.dispatch(updateNewPostText(text));
   }

   function onAddPost() {
      props.store.dispatch(addPost());
   }

   return (
      <Profile 
         addPost={onAddPost}
         updatePost={updatePost}
         posts={state.posts}
         newPostText={state.newPostText}
      />
   );
};

export default ProfileContainer;
