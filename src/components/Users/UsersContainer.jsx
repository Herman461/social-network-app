import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { setUsers, toggleFollow, filterUsers, updateUsersSearch } from '../../redux/actions';


const mapStateToProps = (state) => ({
	filteredUsers: state.usersPage.filteredUsers,
	searchText: state.usersPage.text
})
const mapDispatchToProps = (dispatch) => ({
	setUsers: (users) => dispatch(setUsers(users)),
	toggleFollow: (userId) => dispatch(toggleFollow(userId)),
	filterUsers: () => dispatch(filterUsers()),
	updateUsersSearch: (searchText) => dispatch(updateUsersSearch(searchText)),
})
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;