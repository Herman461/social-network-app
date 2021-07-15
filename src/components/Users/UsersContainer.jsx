import React from 'react';
import { connect } from 'react-redux';

import * as axios from 'axios';
import Users from './Users';

import { 
	setUsers,
	toggleFollow,
	filterUsers, 
	updateUsersSearch,
	setTotalUsersCount,
	setSelectedPage } from '../../redux/actions';

class UsersComponent extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`)
		.then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount)
		});
	}

	render() {
		return <Users
			filteredUsers={this.props.filteredUsers}
			setUsers={this.props.setUsers}
			toggleFollow={this.props.toggleFollow}
			filterUsers={this.props.filterUsers}
			updateUsersSearch={this.props.updateUsersSearch}
			searchText={this.props.searchText}
		 />; //! сюда не приходят пропсы
	 } 

};


const mapStateToProps = (state) => ({
	searchText: state.usersPage.text,
	totalUsersCount: state.usersPage.totalUsersCount,
	filteredUsers: state.usersPage.filteredUsers,
});

const mapDispatchToProps = (dispatch) => ({
	setUsers: (users) => dispatch(setUsers(users)),
	toggleFollow: (userId) => dispatch(toggleFollow(userId)),
	filterUsers: () => dispatch(filterUsers()),
	updateUsersSearch: (searchText) => dispatch(updateUsersSearch(searchText)),
	setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer;