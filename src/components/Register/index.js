import React from 'react';
import {
	Register as Container,
	FirstName,
	LastName,
	Error,
	Username,
	Password,
	Submit,
	Question,
} from './styles/register';

const Register = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};
Register.Error = ({ children, ...restProps }) => {
	return <Error {...restProps}>{children}</Error>;
};
Register.FirstName = ({ children, ...restProps }) => {
	return <FirstName {...restProps}>{children}</FirstName>;
};
Register.LastName = ({ children, ...restProps }) => {
	return <LastName {...restProps}>{children}</LastName>;
};
Register.Username = ({ children, ...restProps }) => {
	return <Username {...restProps}>{children}</Username>;
};
Register.Password = ({ children, ...restProps }) => {
	return <Password {...restProps}>{children}</Password>;
};
Register.Submit = ({ children, ...restProps }) => {
	return <Submit {...restProps}>{children}</Submit>;
};
Register.Question = ({ children, ...restProps }) => {
	return <Question {...restProps}>{children}</Question>;
};

export default Register;
