import React, { useState } from 'react';
import ChatListsContainer from '../containers/chatLists';
import ConversationContainer from '../containers/conversation';
import socket from './../utils/socket';
import { Navigate } from 'react-router';
const io = socket('http://localhost:8000');
const Home = ({ user, ...restProps }) => {
	const [conversation, setConversation] = useState([]);
	const [user2, setUser2] = useState();
	if (!user) return <Navigate to='/' />;
	return (
		<div className='home'>
			<ChatListsContainer
				io={io}
				user={user}
				setConversation={setConversation}
				setUser2={setUser2}
			/>
			<ConversationContainer
				conversation={conversation}
				user1={user.username}
				user2={user2}
				io={io}
			/>
		</div>
	);
};

export default Home;
