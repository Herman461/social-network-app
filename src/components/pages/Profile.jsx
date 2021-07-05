import React from 'react';

import smile from '../../assets/img/icons/smile.svg';
import camera from '../../assets/img/icons/camera.png';
import music from '../../assets/img/icons/music.png';
import micro from '../../assets/img/icons/micro.png';
import ProfileInfo from '../ProfileComponents/ProfileInfo';
import Posts from '../ProfileComponents/Posts';

const Profile = () => {
   return (
      <div className="profile">
         <ProfileInfo />
         <form className="user-info__new-post new-post">
            <div className="new-post__body">
               <textarea
                  placeholder="Создать новый пост..."
                  className="new-post__textarea"></textarea>
               <button className="new-post__button">Добавить пост</button>
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
         <Posts />
      </div>
   );
};

export default Profile;
