import React, { useState } from 'react';
import { Register } from '../components';
import { registerValidate } from '../utils/validate';
import host from './../utils/host';

const RegisterContainer = ({ setLogin, setUser, ...restProps }) => {
	const [isRegisterError, setRegisterError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const handleRegister = (data) => {
		data.preventDefault();
		const [username, password, firstname, lastname] = [
			data.target.username.value.toLowerCase(),
			data.target.password.value,
			data.target.firstname.value,
			data.target.lastname.value,
		];
		const valid = registerValidate(username, password, firstname, lastname);

		if (valid.err) {
			setRegisterError(true);
			setErrorMessage(valid.msg);
			return;
		}
		fetch(host('public', '/register'), {
			method: 'POST',
			body: JSON.stringify({
				username,
				password,
				details: { firstname, lastname },
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.err) {
					setErrorMessage(res.msg);
					setRegisterError(res.err);
					return;
				}
				setUser(res.data);
				alert('Register Successfuly');
			});
	};
	return (
		<Register
			onSubmit={(data) => {
				handleRegister(data);
			}}>
			{isRegisterError && <Register.Error>{errorMessage}</Register.Error>}
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
					setLogin(true);
				}}>
				Login?
			</Register.Question>
		</Register>
	);
};

export default RegisterContainer;
