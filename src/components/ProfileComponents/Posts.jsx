import React from 'react';

import Post from './Post';

const Posts = (props) => {
    let postsData = [
        { likesCount: 23, message: "Классная аватарка! Я на тебя подписан!", id: 1},
        { likesCount: 5, message: "Yo Yo Yo", id: 2},
        { likesCount: 34, message: "Хорошая веб-страница! Мне очень нравится", id: 3},
        { likesCount: 120, message: "Изучению программирование каждый день.", id: 4},
    ]
   return (
        <div className="profile__posts posts-profile">
            <ul className="posts-profile__items">
                <Post likesCount={postsData[0].likesCount} message={postsData[0].message} />
                <Post likesCount={postsData[1].likesCount} message={postsData[1].message} />
                <Post likesCount={postsData[2].likesCount} message={postsData[2].message} />
                <Post likesCount={postsData[3].likesCount} message={postsData[3].message} />
            </ul>
        </div>
   );
}

export default Posts;