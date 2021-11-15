import React from 'react';
import '../styles/MyAccount.scss';

import logo from '@logos/logo_yard_sale.svg';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<p className="value">Matias Chiodo</p>
						<label for="email" className="label">Email</label>
						<p className="value">matiaschiodo@gmail.com</p>
						<label for="password" className="label">Password</label>
						<p className="value">*********</p>
					</div>
					<a href="/new-password"><input type="button" value="Edit" className="secondary-button login-button" /></a>
				</form>
			</div>
		</div>
	);
}

export default MyAccount;