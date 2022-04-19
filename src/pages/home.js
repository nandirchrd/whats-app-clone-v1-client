import React, { useEffect, useState } from 'react';
import ChatListsContainer from '../containers/chatLists';
import ConversationContainer from '../containers/conversation';
import socket from 'socket.io-client';
import host from './../utils/host';
import { Navigate } from 'react-router';

const io = socket(host('public'));
const Home = ({ user, setUser, ...restProps }) => {
	const [message, setMessage] = useState({});
	const [user2, setUser2] = useState(null);
	const [activeMessage, setActiveMessage] = useState('');

	useEffect(() => {
		// console.log('MESSAGE:', message);
	}, [message]);
	useEffect(() => {
		// console.log('ACTIVE MESSAGE:', activeMessage);
	}, [activeMessage]);

	const handleLogOut = () => {
		setUser(null);
		localStorage.clear();
		return <Navigate to='/' replace={true} />;
	};
	if (!user) return <Navigate to='/' />;
	return (
		<div className='home'>
			<ChatListsContainer
				io={io}
				user={user}
				activeMessage={activeMessage}
				setMessage={setMessage}
				setUser2={setUser2}
				setActiveMessage={setActiveMessage}
				onLogOut={handleLogOut}
			/>
			<ConversationContainer
				setActiveMessage={setActiveMessage}
				message={message}
				user1={user.username}
				user2={user2}
				io={io}
			/>
		</div>
	);
};

export default Home;
