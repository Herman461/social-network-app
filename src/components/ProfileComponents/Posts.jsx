import React from 'react';

import Post from './Post';

const Posts = (props) => {
   return (
        <div className="profile__posts posts-profile">
            <ul className="posts-profile__items">
                <Post likesCount="23" text="Классная аватарка! Я на тебя подписан!"/>
                <Post likesCount="5" text="Yo Yo Yo" />
                <Post likesCount="34" text="Хорошая веб-страница! Мне очень нравится"/>
                <Post likesCount="120" text="Изучению программирование каждый день."/>
            </ul>
        </div>
   );
}

export default Posts;