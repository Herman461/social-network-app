import React from 'react';
import UserItem from './UserItem';

const Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
			{ subscribed: true, fullName: "Dmitry K.", location: { country: "Belarus", city: "Minsk" }, status: "I'm looking for a job right now", id: 1 },
			{ subscribed: false, fullName: "Svetlana D.", location: { country: "Belarus", city: "Minsk"}, status: "I'm so pretty", id: 2 },
			{ subscribed: true, fullName: "Sergei S.", location: { country: "Ukraine", city: "Kiev"}, status: "I like football", id: 3 },
			{ subscribed: true, fullName: "Andrew T.", location: { country: "United States", city: "Philadelphia"}, status: "I am  free to help you to create good Video Production", id: 4 }
		])
	}
	let usersElements = props.users.map(user => (
		<UserItem
			key={user.id}
			setUsers={props.setUsers}
			toggleSubscribe={props.toggleSubscribe}
			user={user}
		/>
	));

	return (
		<div className="users">
			<div className="users__title">Users</div>
			<ul className="users__items">
				{usersElements}
			</ul>
		</div>
	);
};

export default Users;