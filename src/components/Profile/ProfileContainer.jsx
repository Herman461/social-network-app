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

const ProfileContainer = connect(mapStateToProps, { addPost, updateNewPostText })(Profile)

export default ProfileContainer;
