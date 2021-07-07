import React from 'react';

import smile from '../../assets/img/icons/smile.svg';
import camera from '../../assets/img/icons/camera.png';
import music from '../../assets/img/icons/music.png';
import micro from '../../assets/img/icons/micro.png';
import { addPost, updateNewPostText} from '../../redux/actions';

import ProfileInfo from './ProfileInfo';
import Posts from './Posts';

const Profile = (props) => {
   function onPostChange(e) {
      let text = e.target.value;
      props.dispatch(updateNewPostText(text));
   }
   function addNewPost(e) {
      e.preventDefault();
      props.dispatch(addPost());
   }
   return (
      <div className="profile">
         <ProfileInfo />
         <form className="user-info__new-post new-post">
            <div className="new-post__body">
               <textarea
                  placeholder="Создать новый пост..."
                  className="new-post__textarea"
                  value={props.state.profilePage.newPostText}
                  onChange={onPostChange} />
               <button onClick={addNewPost} className="new-post__button">
                  Добавить пост
               </button>
               <ul className="new-post__actions">
                  <li className="new-post__action">
                     <img src={smile} />
                  </li>
                  <li className="new-post__action">
                     <img src={camera} />
                  </li>
                  <li className="new-post__action">
                     <img src={music} />
                  </li>
                  <li className="new-post__action">
                     <img src={micro} />
                  </li>
               </ul>
            </div>
         </form>
         <Posts posts={props.state.profilePage.posts} />
      </div>
   );
};

export default Profile;
