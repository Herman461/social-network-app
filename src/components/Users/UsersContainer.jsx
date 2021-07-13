import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { setUsers, toggleSubscribe } from '../../redux/actions';


const mapStateToProps = (state) => ({
	users: state.usersPage.users
})
const mapDispatchToProps = (dispatch) => ({
	setUsers: (users) => dispatch(setUsers(users)),
	toggleSubscribe: (userId) => dispatch(toggleSubscribe(userId)),
})
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;