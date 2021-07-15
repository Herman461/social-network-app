import React from 'react';

import { connect } from 'react-redux';
import * as axios from 'axios';

import { addPost, updateNewPostText, setUserProfile } from '../../redux/actions';
import Profile from './Profile';

class ProfileContainer extends React.Component {
   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then(response => this.props.setUserProfile(response.data))
   }
   render() {
      return <Profile {...this.props} />
   }
}
 
const mapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText,
      profile: state.profilePage.profile
   }
}



export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(ProfileContainer);
