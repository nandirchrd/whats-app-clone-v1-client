import React, { useState } from 'react';
import { loginValidate } from '../utils/validate';
import host from './../utils/host';
import { Login } from '../components';
import { Navigate } from 'react-router-dom';

const LoginContainer = ({ setMode, setUser, ...restProps }) => {
	const [LoginError, setLoginError] = useState({ err: false });
	const handleLogin = async (data) => {
		data.preventDefault();
		const username = data.target.username.value.toLowerCase();
		const password = data.target.password.value;
		const validate = loginValidate({ username, password });
		if (validate.err) return setLoginError(validate);

		// POST DATA TO THE SERVER
		const res = await fetch(host('public', '/auth'), {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		// RESPONSE
		// GET THE RESULT DATA
		const result = await res.json();
		// IF ERROR RETURN ERR, SET LOGIN ERROR TO TRUE
		if (result.err) return setLoginError(result);

		// IF LOGIN SUCCESS SET USER FROM RESPONSE USER DATA FROM THE SERVER
		setUser(result.data);
		// SET DATA USER AND PASSWORD IN LOCAL STORAGE
		localStorage.setItem('user', `${username}`);
		localStorage.setItem('password', `${password}`);
		alert('Login Successful');
		return <Navigate to='/home' replace={true} />;
	};

	return (
		<Login onSubmit={(data) => handleLogin(data)}>
			{LoginError.err && <Login.Error>{LoginError.msg}</Login.Error>}
			<Login.Username
				type='text'
				name='username'
				placeholder='@username'
			/>
			<Login.Password
				type='password'
				name='password'
				placeholder='password'
			/>
			<Login.Submit type='submit'>Login</Login.Submit>
			<Login.Question
				onClick={() => {
					setMode('REGISTER');
				}}>
				Register?
			</Login.Question>
		</Login>
	);
};

export default LoginContainer;
