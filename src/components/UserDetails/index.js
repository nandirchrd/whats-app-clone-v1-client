import React from 'react';
import {
	UserDetails as Container,
	Toggle,
	Picture,
	IsOnline,
	Icon,
	IsOnlineTitle,
	Name,
	Status,
	Details,
	DetailsTitle,
	LabelUsername,
	Username,
	LabelGender,
	Gender,
	LabelDateOfBirth,
	DateOfBirth,
	LabelInterest,
	Interest,
} from './styles/userDetails';
const UserDetails = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
);
UserDetails.Toggle = ({ children, ...restProps }) => (
	<Toggle {...restProps}>{children}</Toggle>
);
UserDetails.Picture = ({ ...restProps }) => <Picture {...restProps} />;
UserDetails.IsOnline = ({ children, ...restProps }) => (
	<IsOnline {...restProps}>{children}</IsOnline>
);
UserDetails.Icon = ({ children, ...restProps }) => (
	<Icon {...restProps}>{children}</Icon>
);
UserDetails.IsOnlineTitle = ({ children, ...restProps }) => (
	<IsOnlineTitle {...restProps}>{children}</IsOnlineTitle>
);
UserDetails.Name = ({ children, ...restProps }) => (
	<Name {...restProps}>{children}</Name>
);
UserDetails.Status = ({ children, ...restProps }) => (
	<Status {...restProps}>{children}</Status>
);
UserDetails.Details = ({ children, ...restProps }) => (
	<Details {...restProps}>{children}</Details>
);
UserDetails.DetailsTitle = ({ children, ...restProps }) => (
	<DetailsTitle {...restProps}>{children}</DetailsTitle>
);
UserDetails.LabelUsername = ({ children, ...restProps }) => (
	<LabelUsername {...restProps}>{children}</LabelUsername>
);
UserDetails.Username = ({ children, ...restProps }) => (
	<Username {...restProps}>{children}</Username>
);
UserDetails.LabelGender = ({ children, ...restProps }) => (
	<LabelGender {...restProps}>{children}</LabelGender>
);
UserDetails.Gender = ({ children, ...restProps }) => (
	<Gender {...restProps}>{children}</Gender>
);
UserDetails.LabelDateOfBirth = ({ children, ...restProps }) => (
	<LabelDateOfBirth {...restProps}>{children}</LabelDateOfBirth>
);
UserDetails.DateOfBirth = ({ children, ...restProps }) => (
	<DateOfBirth {...restProps}>{children}</DateOfBirth>
);
UserDetails.LabelInterest = ({ children, ...restProps }) => (
	<LabelInterest {...restProps}>{children}</LabelInterest>
);
UserDetails.Interest = ({ children, ...restProps }) => (
	<Interest {...restProps}>{children}</Interest>
);

export default UserDetails;
