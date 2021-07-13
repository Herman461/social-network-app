import React from 'react';
import UserItem from './UserItem';
import * as axios from 'axios';

const Users = (props) => {

	if (props.users.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
		.then(response => {
			props.setUsers(response.data.items)
		});
	}
	
	let usersElements = props.users.map(user => (
		<UserItem
			key={user.id}
			setUsers={props.setUsers}
			toggleFollow={props.toggleFollow}
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