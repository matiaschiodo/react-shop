import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/account">My account</a>
				</li>
				<li>
					<a href="/signup">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;