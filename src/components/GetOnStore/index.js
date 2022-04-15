import React from 'react';
import {
	GetOnStore as Container,
	Item,
	Icon,
	Description,
	Title,
	Label,
} from './styles/getOnStore';

const GetOnStore = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};
GetOnStore.Item = ({ children, ...restProps }) => {
	return <Item {...restProps}>{children}</Item>;
};
GetOnStore.Icon = ({ children, ...restProps }) => {
	return <Icon {...restProps}>{children}</Icon>;
};
GetOnStore.Description = ({ children, ...restProps }) => {
	return <Description {...restProps}>{children}</Description>;
};
GetOnStore.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};
GetOnStore.Label = ({ children, ...restProps }) => {
	return <Label {...restProps}>{children}</Label>;
};

export default GetOnStore;
