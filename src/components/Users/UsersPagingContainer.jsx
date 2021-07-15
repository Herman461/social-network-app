import React from 'react';
import * as axios from "axios";
import UsersPaging from './UsersPaging';
import { connect } from 'react-redux';
import { setSelectedPage, setUsers } from '../../redux/actions';

class UsersPagingContainer extends React.Component {
	onPageClick = (e, page) => {
		e.preventDefault();
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
		.then(response => this.props.setUsers(response.data.items))
		this.props.setSelectedPage(page);
	}

	render() {
		return <UsersPaging
			selectedPage={this.props.selectedPage}
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			setSelectedPage={this.props.setSelectedPage}
			onPageClick={this.onPageClick}
		 />
	}

}

const mapStateToProps = (state) => ({
	selectedPage: state.usersPage.selectedPage,
	totalUsersCount: state.usersPage.totalUsersCount,
	pageSize: state.usersPage.pageSize,
})

const mapDispatchToProps = (dispatch) => ({
	setSelectedPage: (page) => dispatch(setSelectedPage(page)),
	setUsers: (users) => dispatch(setUsers(users))
});


export default connect(mapStateToProps, mapDispatchToProps)(UsersPagingContainer);