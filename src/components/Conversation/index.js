import React from 'react';
import {
	Conversation as Container,
	Message,
	Card,
	Profile,
	Picture,
	Time,
	TextMessage,
	FormInput,
	WriteMessage,
	Send,
} from './styles/conversation';
const Conversation = ({ children, ...restProps }) => (
	<Container {...restProps}>{children}</Container>
);
Conversation.Message = ({ children, ...restProps }) => (
	<Message {...restProps}>{children}</Message>
);
Conversation.Card = ({ children, ...restProps }) => (
	<Card {...restProps}>{children}</Card>
);
Conversation.Profile = ({ children, ...restProps }) => (
	<Profile {...restProps}>{children}</Profile>
);
Conversation.Picture = ({ ...restProps }) => <Picture {...restProps} />;
Conversation.Time = ({ children, ...restProps }) => (
	<Time {...restProps}>{children}</Time>
);
Conversation.TextMessage = ({ children, ...restProps }) => (
	<TextMessage {...restProps}>{children}</TextMessage>
);
Conversation.FormInput = ({ children, ...restProps }) => (
	<FormInput {...restProps}>{children}</FormInput>
);
Conversation.WriteMessage = ({ children, ...restProps }) => (
	<WriteMessage {...restProps}>{children}</WriteMessage>
);
Conversation.Send = ({ children, ...restProps }) => (
	<Send {...restProps}>{children}</Send>
);
export default Conversation;
