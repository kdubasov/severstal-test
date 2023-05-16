import React from 'react';
import {Link, useLocation} from "react-router-dom";
import "./NavbarTop.css";

interface ILocation {
	hash: string,
	key: string,
	pathname: string,
	search: string,
	state: null | string,
}

const NavbarTop: React.FC = () => {

	const location:ILocation = useLocation();

	const links = [
		{
			path: "/query/get_get",
			title: "GET",
		},
		{
			path: "/query/post_post",
			title: "POST",
		},
		{
			path: "/query/delete_delete",
			title: "DELETE",
		},
	]

	return (
		<div className="NavbarTop">
			<div className="link-container">
				{
					links.map(elem => (
						<Link
							to={elem.path}
							key={elem.path}
							className={elem.path === location.pathname ? "active" : ""}
						>
							{elem.title}
						</Link>
					))
				}
			</div>
		</div>
	);
};

export default NavbarTop;
