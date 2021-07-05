import React from 'react';
import ava from '../assets/img/ava.jpg';
import smile from '../assets/img/icons/smile.svg';
import camera from '../assets/img/icons/camera.png';
import music from '../assets/img/icons/music.png';
import micro from '../assets/img/icons/micro.png';

const Profile = () => {
   return (
      <div className="content-page__user-info user-info">
         <div className="user-info__column">
            <div className="user-info__ava">
               <img src={ava} />
            </div>
         </div>
         <div className="user-info__column">
            <div className="user-info__name">Илон Маск</div>
            <div className="user-info__label">
               Откуда берётся инновационное мышление? Я думаю, это настрой. Надо решить: мы
               попробуем сделать по-другому.
            </div>
            <form className="user-info__new-post new-post">
               <div className="new-post__body">
                  <textarea
                     placeholder="Создать новый пост..."
                     className="new-post__textarea"></textarea>
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
         </div>
      </div>
   );
};

export default Profile;
