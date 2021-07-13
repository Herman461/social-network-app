import React from 'react';
import UserItem from './UserItem';
import * as axios from 'axios';
import UsersSearch from './UsersSearch';

class Users extends React.Component {
	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
		.then(response => {
			this.props.setUsers(response.data.items)
		});
	}

	getUsersElements() {
		return this.props.filteredUsers.map(user => (
			<UserItem
				key={user.id}
				setUsers={this.props.setUsers}
				toggleFollow={this.props.toggleFollow}
				user={user}
			/>
		));

	}
	render() {
		return (
			<div className="users">
				<div className="users__title">Users</div>
				<UsersSearch 
					filterUsers={this.props.filterUsers}
					updateUsersSearch={this.props.updateUsersSearch}
					searchText={this.props.searchText}
				/>
				<ul className="users__items">
					{this.getUsersElements()}
				</ul>
			</div>
		);
	 } 

};

export default Users;