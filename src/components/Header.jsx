import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from './Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [ toggle, setToggle ] = useState(false);
	const [ toggleOrders, setToggleOrders ] = useState(false);
	const { state:{cart} } = useContext(AppContext);

	const handleClick = () => {
		setToggle(!toggle);
	}

	const verifyCart = (cartNumber) => {
		if ((cartNumber) && (cartNumber > 9)) {
		  return "+9";
		} else {
			return cartNumber;
		}
	}

    return (
        <nav>
			<img src={menu} alt="logo" className="menu"/>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo"/>
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li
						className="navbar-email"
						onClick={handleClick}
					>
						Matias Chiodo
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{cart.length > 0 && <div>{verifyCart(cart.length)}</div>}
					</li>
				</ul>
			</div>
			{toggle && <Menu/>}
			{toggleOrders &&
				<MyOrder
					toggleOrders={toggleOrders}
					setToggleOrders={setToggleOrders}
				/>}
		</nav>
    );
}

export default Header;