import React from 'react';

import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

import { addPost, updateNewPostText, setUserProfile } from '../../redux/actions';
import Profile from './Profile';

class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId || 2;
      axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId, { withCredentials: true })
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);



export default connect(mapStateToProps, { addPost, updateNewPostText, setUserProfile })(WithUrlDataContainerComponent);
