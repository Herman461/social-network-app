import React from 'react';
import * as axios from "axios";

class UsersPaging extends React.Component {
	onPageClick = (e, page) => {
		e.preventDefault();
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
		.then(response => this.props.setUsers(response.data.items))
		this.props.setSelectedPage(page);
	}

	handlePageChangeLeft = (e) => {
		e.preventDefault();
		if (this.props.selectedPage > 1) {
			this.props.setSelectedPage(this.props.selectedPage - 1)
		} else {
			return;
		}
		
	}

	handlePageChangeRight = (e) => {
		e.preventDefault();
		// if (this.props.selectedPage < 1) //! Доделать стрелку-переключатель на следующий элемент, сделать так, чтобы не выходило за пределы максимального значения
		this.props.setSelectedPage(this.props.selectedPage + 1)
	}

	getPagesElements = () => {
		let totalPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
		let pages = [];

		for (let i = 1; i <= totalPages; i++) {
			pages.push(i);
		} 

		return pages.map((page, pageIndex) => {
			if (this.props.totalUsersCount - 7 < this.props.selectedPage) {
				if (this.props.totalUsersCount - 8 > pageIndex) {
					return null;
				}
				else {
					return page === this.props.selectedPage + 7 ? 
						<li><a href="" className="paging__item">...</a></li> :  
						<li><a href=""
							onClick={(e) => this.onPageClick(e, page)}
							className={`paging__item${page === this.props.selectedPage ? " _active" : ""}`}>{page}</a></li>
				}
			}	
			else {
				if (this.props.selectedPage + 6 < pageIndex || this.props.selectedPage - 2 > pageIndex) {
				return null;	
				} else {
					return page === this.props.selectedPage + 7 ? 
						<li><a href="" className="paging__item">...</a></li> :  
						<li><a href=""
							onClick={(e) => this.onPageClick(e, page)}
							className={`paging__item${page === this.props.selectedPage ? " _active" : ""}`}>{page}</a></li>
				}
			}
		})

	}
	render() {
		return (
			<div className="users__pages">
				<div className="paging">
					<a href="" 	onClick={(e) => this.handlePageChangeLeft(e)} className="paging__arrow paging__arrow_previous"></a>
					<ul className="paging__list">
						{this.getPagesElements()}
					</ul>
					<a href="" onClick={(e) => this.handlePageChangeRight(e)} className="paging__arrow paging__arrow_next"></a>
				</div>
			</div>
	);
	}

}

export default UsersPaging;