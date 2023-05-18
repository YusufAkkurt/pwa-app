import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg bg-light">
				<div className="container">
					<Link className="navbar-brand" to="/">
						Navbar
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<div className="navbar-nav ms-auto mb-2 mb-lg-0">
							<NavLink className="nav-item nav-link" aria-current="page" to="/">
								Home
							</NavLink>
							<NavLink className="nav-item nav-link" aria-current="page" to="/about">
								About
							</NavLink>
							<NavLink className="nav-item nav-link" aria-current="page" to="/users">
								Users
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
