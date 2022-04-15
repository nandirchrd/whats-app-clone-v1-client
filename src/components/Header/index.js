import React from 'react';
import { Header as Container, Icon, Title, Text } from './styles/header';
const Header = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
);

Header.Icon = ({ children, ...restProps }) => (
	<Icon {...restProps}>{children}</Icon>
);

Header.Title = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
);

Header.Text = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
);

export default Header;
