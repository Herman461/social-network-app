import React from 'react';
import UsersSearch from './UsersSearch';
import UsersPagingContainer  from './UsersPagingContainer';
import UsersItem from './UsersItem';


const Users = (props) => {
	let usersElements = props.filteredUsers.map(user => (
		<UsersItem
			key={user.id}
			setUsers={props.setUsers}
			toggleFollow={props.toggleFollow}
			user={user}
		/>
	));
	
	return (
		<div className="users">
			<div className="users__title">Users</div>
			<UsersPagingContainer />
			<UsersSearch 
				filterUsers={props.filterUsers}
				updateUsersSearch={props.updateUsersSearch}
				searchText={props.searchText}
			/>
			<ul className="users__items">
				{usersElements}
			</ul>
		</div>
	);
};

export default Users;