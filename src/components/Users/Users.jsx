import React from 'react';
import UsersItem from './UsersItem';
import * as axios from 'axios';
import UsersSearch from './UsersSearch';
import UsersPaging from './UsersPaging';

class Users extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
		.then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount)
		});
	}

	getUsersElements() {
		return this.props.filteredUsers.map(user => (
			<UsersItem
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
				<UsersPaging 
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					selectedPage={this.props.selectedPage}
					setSelectedPage={this.props.setSelectedPage}
					setUsers={this.props.setUsers}
				/>
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