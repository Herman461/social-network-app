import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { 
	setUsers,
	toggleFollow,
	filterUsers, 
	updateUsersSearch,
	setTotalUsersCount,
	setSelectedPage } from '../../redux/actions';


const mapStateToProps = (state) => ({
	filteredUsers: state.usersPage.filteredUsers,
	searchText: state.usersPage.text,
	totalUsersCount: state.usersPage.totalUsersCount,
	pageSize: state.usersPage.pageSize,
	selectedPage: state.usersPage.selectedPage
});

const mapDispatchToProps = (dispatch) => ({
	setUsers: (users) => dispatch(setUsers(users)),
	toggleFollow: (userId) => dispatch(toggleFollow(userId)),
	filterUsers: () => dispatch(filterUsers()),
	updateUsersSearch: (searchText) => dispatch(updateUsersSearch(searchText)),
	setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
	setSelectedPage: (page) => dispatch(setSelectedPage(page))
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;