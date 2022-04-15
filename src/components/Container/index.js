import React from 'react';
import { Container as Cont } from './styles/container';
const Container = ({ children, ...restProps }) => (
	<Cont {...restProps}>{children}</Cont>
);

export default Container;
