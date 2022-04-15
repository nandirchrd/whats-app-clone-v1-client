import React from 'react';
import {
	Login as Container,
	Error,
	Username,
	Password,
	Submit,
	Question,
} from './styles/login';

const Login = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};
Login.Error = ({ children, ...restProps }) => {
	return <Error {...restProps}>{children}</Error>;
};
Login.Username = ({ children, ...restProps }) => {
	return <Username {...restProps}>{children}</Username>;
};
Login.Password = ({ children, ...restProps }) => {
	return <Password {...restProps}>{children}</Password>;
};
Login.Submit = ({ children, ...restProps }) => {
	return <Submit {...restProps}>{children}</Submit>;
};
Login.Question = ({ children, ...restProps }) => {
	return <Question {...restProps}>{children}</Question>;
};

export default Login;
