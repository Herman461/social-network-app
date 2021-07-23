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
	setSelectedPage,
	toggleIsFetching } from '../../redux/actions';

class UsersComponent extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching();
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`, 
		{ withCredentials: true })
		.then(response => {
			this.props.toggleIsFetching();
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount)
		});
	}

	render() {
		return <Users {...this.props} />;
	 } 

};


const mapStateToProps = (state) => ({
	searchText: state.usersPage.text,
	totalUsersCount: state.usersPage.totalUsersCount,
	filteredUsers: state.usersPage.filteredUsers,
	isFetching: state.usersPage.isFetching,
});

const UsersContainer = connect(mapStateToProps,
{setUsers, toggleFollow, filterUsers, updateUsersSearch, 
setTotalUsersCount, toggleIsFetching})(UsersComponent);

export default UsersContainer;