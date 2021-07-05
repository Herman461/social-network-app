import React from 'react';

import Post from './Post';

const Posts = (props) => {
   let posts = [
      { likesCount: 23, message: 'Классная аватарка! Я на тебя подписан!', id: 1 },
      { likesCount: 5, message: 'Yo Yo Yo', id: 2 },
      { likesCount: 34, message: 'Хорошая веб-страница! Мне очень нравится', id: 3 },
      { likesCount: 120, message: 'Изучению программирование каждый день.', id: 4 },
   ];
   let postsElements = posts.map((post) => (
      <Post likesCount={post.likesCount} key={post.id} id={post.id} message={post.message} />
   ));

   return (
      <div className="profile__posts posts-profile">
         <ul className="posts-profile__items">{postsElements}</ul>
      </div>
   );
};

export default Posts;
