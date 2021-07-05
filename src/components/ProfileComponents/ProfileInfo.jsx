import React from 'react';
import ava from '../../assets/img/ava.jpg';

const ProfileInfo = () => {
   return (
      <div className="profile__info info-profile">
         <div className="info-profile__column">
            <div className="info-profile__ava">
               <img src={ava} />
            </div>
         </div>
         <div className="info-profile__column">
            <div className="info-profile__name">Илон Маск</div>
            <div className="info-profile__label">
               Откуда берётся инновационное мышление? Я думаю, это настрой. Надо решить: мы
               попробуем сделать по-другому.
            </div>
         </div>
      </div>
   );
};

export default ProfileInfo;
