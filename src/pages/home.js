import React, { useState } from 'react';
import ChatListsContainer from '../containers/chatLists';
import ConversationContainer from '../containers/conversation';
import socket from './../utils/socket';
import { Navigate } from 'react-router';

const io = socket('http://localhost:8000');
io.emit('loggedIn', '@dudu');

const Home = ({ user, ...restProps }) => {
	const [conversation, setConversation] = useState(null);
	if (!user) return <Navigate to='/' />;
	return (
		<div className='home'>
			<ChatListsContainer user={user} setConversation={setConversation} />
			<ConversationContainer conversation={conversation} />
		</div>
	);
};

export default Home;
