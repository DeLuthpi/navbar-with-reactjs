/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import "../assets/css/navbar-style.css";

const Navbar = (props) => {
	return (
		<header className="header">
			<nav className="navbar">
				<div className="navbar-box">
					<span className="navbar-logo">
						<a href="/">
							<img className="logo-image" src={props?.logo} alt="logo" />
							<span className="logo-name-1">{props?.logoName1}</span><span className="logo-name-2"> {props?.logoName2}</span>
						</a>
					</span>
					<div className="navbar-btn">
						<div className="navbar-device">
							<div className="grid-icon">
								<div className="icon-cart">
									<span className="icon-count"> 0 </span>
									<a href="/cart"><i className="fa-solid fa-basket-shopping"></i></a>
								</div>
								<div className="icon-user">
									<a href="/profile"><i className="fa-regular fa-user"></i></a>
								</div>
							</div>
						</div>
						<span className="icon-hamburger">
							<button id="btn-hamburger" className="btn-hamburger" onClick={props?.handleClick}><i className="fa-solid fa-bars btn-icon" id="btn-icon"></i></button>
						</span>
					</div>
				</div>

				<div className="navbar-menu">
					<ul className="menu-box opacity-0">
						{props?.menus.map(list => (
							<li className={`${props?.currentPage === list.page ? 'menu-list active' : 'menu-list'}`} key={list.page}><a href={list.page}> {list.name}</a></li>
						))}
					</ul>
					<div className="btn-box">
						{!props?.isShowLogin ? <a href="/login" className="btn-login">Login</a> : 
							<div className="grid-icon">
								<div className="icon-cart">
									<span className="icon-count"> 0 </span>
									<a href="/cart"><i className="fa-solid fa-basket-shopping"></i></a>
								</div>
								<div className="icon-user">
									<a href="/profile"><i className="fa-regular fa-user"></i></a>
								</div>
							</div>
						}				
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;