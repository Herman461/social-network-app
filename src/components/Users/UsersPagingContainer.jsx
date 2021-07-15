import React from 'react';
import * as axios from "axios";
import UsersPaging from './UsersPaging';
import { connect } from 'react-redux';
import { setSelectedPage, setUsers, toggleIsFetching } from '../../redux/actions';

class UsersPagingContainer extends React.Component {
	onPageClick = (e, page) => {
		e.preventDefault();
		this.props.toggleIsFetching();
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
		.then(response => {
			this.props.toggleIsFetching();
			this.props.setUsers(response.data.items);
		})
		this.props.setSelectedPage(page);
	}

	render() {
		return <UsersPaging
			selectedPage={this.props.selectedPage}
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			setSelectedPage={this.props.setSelectedPage}
			onPageClick={this.onPageClick}
			pageNeighbours={this.props.pageNeighbours}
		 />
	}

}

const mapStateToProps = (state) => ({
	selectedPage: state.usersPage.selectedPage,
	totalUsersCount: state.usersPage.totalUsersCount,
	pageSize: state.usersPage.pageSize,
	pageNeighbours: state.usersPage.pageNeighbours
})

const mapDispatchToProps = (dispatch) => ({
	setSelectedPage: (page) => dispatch(setSelectedPage(page)),
	setUsers: (users) => dispatch(setUsers(users)),
	toggleIsFetching: () => dispatch(toggleIsFetching())
});


export default connect(mapStateToProps, mapDispatchToProps)(UsersPagingContainer);