import React from 'react';
import {
	ChatLists as Container,
	Header,
	Brand,
	Logo,
	Title,
	Setting,
	SearchForm,
	SearchInput,
	SearchSubmit,
	ListUsers,
	ListMessages,
	Username,
	Card,
	Picture,
	MessageContainer,
	Name,
	LastMessage,
	Time,
	NewMessage,
	Bullet,
} from './styles/chatLists';

const ChatLists = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
);
ChatLists.Header = ({ children, ...restProps }) => (
	<Header {...restProps}>{children}</Header>
);
ChatLists.Brand = ({ children, ...restProps }) => (
	<Brand {...restProps}>{children}</Brand>
);
ChatLists.Logo = ({ ...restProps }) => <Logo {...restProps} />;
ChatLists.Title = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
);
ChatLists.Setting = ({ children, ...restProps }) => (
	<Setting {...restProps}>{children}</Setting>
);
ChatLists.SearchForm = ({ children, ...restProps }) => (
	<SearchForm {...restProps}>{children}</SearchForm>
);
ChatLists.SearchInput = ({ ...restProps }) => <SearchInput {...restProps} />;
ChatLists.SearchSubmit = ({ children, ...restProps }) => (
	<SearchSubmit {...restProps}>{children}</SearchSubmit>
);
ChatLists.ListUsers = ({ children, ...restProps }) => (
	<ListUsers {...restProps}>{children}</ListUsers>
);
ChatLists.ListMessages = ({ children, ...restProps }) => (
	<ListMessages {...restProps}>{children}</ListMessages>
);
ChatLists.Card = ({ children, ...restProps }) => (
	<Card {...restProps}>{children}</Card>
);
ChatLists.Picture = ({ ...restProps }) => <Picture {...restProps} />;
ChatLists.MessageContainer = ({ children, ...restProps }) => (
	<MessageContainer {...restProps}>{children}</MessageContainer>
);
ChatLists.Name = ({ children, ...restProps }) => (
	<Name {...restProps}>{children}</Name>
);
ChatLists.Username = ({ children, ...restProps }) => (
	<Username {...restProps}>{children}</Username>
);
ChatLists.LastMessage = ({ children, ...restProps }) => (
	<LastMessage {...restProps}>{children}</LastMessage>
);
ChatLists.Time = ({ children, ...restProps }) => (
	<Time {...restProps}>{children}</Time>
);
ChatLists.NewMessage = ({ children, ...restProps }) => (
	<NewMessage {...restProps}>{children}</NewMessage>
);
ChatLists.Bullet = ({ children, ...restProps }) => (
	<Bullet {...restProps}>{children}</Bullet>
);

export default ChatLists;
