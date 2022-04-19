import React, { useState } from 'react';
import { Register } from '../components';
import { registerValidate } from '../utils/validate';
import { Navigate } from 'react-router-dom';
import host from './../utils/host';

const RegisterContainer = ({ setMode, setUser, ...restProps }) => {
	const [RegisterError, setRegisterError] = useState({ err: false });
	const handleRegister = async (data) => {
		data.preventDefault();
		// DESCRUCTURING VARIABEL
		const [username, password, firstname, lastname] = [
			data.target.username.value.toLowerCase(),
			data.target.password.value,
			data.target.firstname.value,
			data.target.lastname.value,
		];

		// CHECKING FOR DATA VALIDATION
		const validation = registerValidate({
			username,
			password,
			firstname,
			lastname,
		});
		// IF VALIDATE ERROR RETURN, AND SET REGISTER ERROR TO TRUE
		if (validation.err) return setRegisterError(validation);

		// POST DATA TO THE SERVER
		const res = await fetch(host('public', '/register'), {
			method: 'POST',
			body: JSON.stringify({
				username,
				password,
				details: { firstname, lastname },
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		// WAITING RESPONSE FROM THE SERVER
		// CONVERT DATA TO JSON
		const result = await res.json();
		// IF RESPONSE ERROR RETURN, SET REGISTER ERROR TO TRUE
		if (result.err) return setRegisterError(result);

		// IF REGISTER SUCCESS SET USER FROM RESPONSE USER DATA FROM THE SERVER
		setUser(result.data);
		// SET DATA USER AND PASSWORD IN LOCAL STORAGE
		localStorage.setItem('user', `${username}`);
		localStorage.setItem('password', `${password}`);
		alert('Register Successfuly');
		return <Navigate to='/home' replace={true} />;
	};
	return (
		<Register
			onSubmit={(data) => {
				handleRegister(data);
			}}>
			{RegisterError.err && (
				<Register.Error>{RegisterError.msg}</Register.Error>
			)}
			<Register.FirstName
				type='text'
				name='firstname'
				placeholder='first name'
			/>
			<Register.LastName
				type='text'
				name='lastname'
				placeholder='last name'
			/>
			<Register.Username
				type='text'
				name='username'
				placeholder='@username'
			/>
			<Register.Password
				type='password'
				name='password'
				placeholder='password'
			/>
			<Register.Submit type='submit'>Register</Register.Submit>
			<Register.Question
				onClick={() => {
					setMode('LOGIN');
				}}>
				Login?
			</Register.Question>
		</Register>
	);
};

export default RegisterContainer;
