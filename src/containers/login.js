import React, { useState } from 'react';
import { Login } from '../components';
import { useNavigate } from 'react-router';
import { loginValidate } from '../utils/validate';

const LoginContainer = ({ setLogin, setUser, ...restProps }) => {
	const [isLoginError, setLoginError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();
	const handleLogin = (data) => {
		data.preventDefault();
		const username = data.target.username.value.toLowerCase();
		const password = data.target.password.value;
		const valid = loginValidate(username, password);
		if (valid.err) {
			setLoginError(valid.err);
			setErrorMessage(valid.msg);
			return false;
		}
		// POST DATA API
		fetch('http://localhost:8000/auth', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.err) {
					setLoginError(true);
					setErrorMessage(res.msg);
					return;
				}
				setUser(res.data);
				alert('Login Successful');
			});
	};

	return (
		<Login onSubmit={(data) => handleLogin(data)} method='post'>
			{isLoginError && <Login.Error>{errorMessage}</Login.Error>}
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
					setLogin(false);
				}}>
				Register?
			</Login.Question>
		</Login>
	);
};

export default LoginContainer;
