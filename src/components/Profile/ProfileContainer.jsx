import React from 'react';

import { addPost, updateNewPostText } from '../../redux/actions';
import Profile from './Profile';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: () => dispatch(addPost()),
      updatePost: (text) => dispatch(updateNewPostText(text))
   }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;
