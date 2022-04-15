import React from 'react';
import { Nav as Container, Item } from './styles/nav';
const Nav = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
);
Nav.Item = ({ children, ...restProps }) => (
	<Item {...restProps}>{children}</Item>
);

export default Nav;
