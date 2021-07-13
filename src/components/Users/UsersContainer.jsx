import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { setUsers, toggleFollow } from '../../redux/actions';


const mapStateToProps = (state) => ({
	users: state.usersPage.users
})
const mapDispatchToProps = (dispatch) => ({
	setUsers: (users) => dispatch(setUsers(users)),
	toggleFollow: (userId) => dispatch(toggleFollow(userId)),
})
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;