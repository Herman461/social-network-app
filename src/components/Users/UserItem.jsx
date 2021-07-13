import React from 'react';
import ava from '../../assets/img/ava.jpg';

const UserItem = (props) => {
	return (
		<li className="users__item item-users">
			<div className="item-users__body">
				<div className="item-users__ava">
					<img src={ava} alt="" />
				</div>
				<div className="item-users__content">
					<div className="item-users__info info-users">
						<div className="info-users__top">
							<div className="info-users__name">{props.user.fullName}</div>
							<div className="info-users__location">
								{`${props.user.location.country}, ${props.user.location.city}`}
							</div>
						</div>
						<div className="info-users__status">{props.user.status}</div>
					</div>
				</div>
			</div>
			<button
				className="item-users__button" 
				onClick={() => props.toggleSubscribe(props.user.id)}
			>
				{props.user.subscribed ? "Вы подписаны" : "Подписаться"}
			</button>
		</li>
	);
}

export default UserItem;