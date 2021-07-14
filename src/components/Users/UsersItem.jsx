import React from 'react';
import ava from '../../assets/img/ava.jpg';

const UsersItem = (props) => {
	return (
		<li className="users__item item-users">
			<div className="item-users__body">
				<div className="item-users__ava">
					<img src={props.user.photos.small ? props.user.photos.small : ava} alt="" />
				</div>
				<div className="item-users__content">
					<div className="item-users__info info-users">
						<div className="info-users__name">{props.user.name}</div>
						<div className="info-users__status">{props.user.status}</div>
					</div>
				</div>
			</div>
			<button
				className="item-users__button" 
				onClick={() => props.toggleFollow(props.user.id)}
			>
				{props.user.followed ? "В друзьях" : "Добавить в друзья"}
			</button>
		</li>
	);
}

export default UsersItem;