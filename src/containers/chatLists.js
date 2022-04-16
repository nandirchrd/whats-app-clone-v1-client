import React, { useEffect, useState } from 'react';
import { ChatLists } from '../components';
import { AiOutlineSearch as Search } from 'react-icons/ai';
const ChatListsContainer = ({ user, setConversation, setUser2, io }) => {
	const [isLoading, setLoading] = useState(false);
	const [chatList, setChatList] = useState([]);
	const [searchList, setsearchList] = useState([]);
	const [messageData, setmessageData] = useState('');

	const handleSearch = (data) => {
		data.preventDefault();
		const keyword = data.target.keyword.value;
		if (keyword === user.username) return;
		// GET DATA FROM SERVER
		fetch('http://localhost:8000/get-users', {
			method: 'POST',
			body: JSON.stringify({ keyword }),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => setsearchList(res));
	};
	const getMessagge = (data) => {
		if (data.user2 === user.username) {
			setUser2(data.user1);
		} else {
			setUser2(data.user2);
		}
		setmessageData(data);
		fetch('http://localhost:8000/get-message', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => setConversation(res.length ? res[0].messages : res));
	};
	useEffect(() => {
		function getData() {
			setLoading(true);
			fetch('http://localhost:8000/get-messages', {
				method: 'POST',
				body: JSON.stringify({ username: user.username }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => res.json())
				.then((res) => {
					setLoading(false);
					setChatList(res);
				});
		}
		getData();
	}, []);

	useEffect(() => {
		const idMsg = messageData.id;
		console.log(idMsg);
		io.on(`new-message:${idMsg}`, (data) => {
			console.log(data);
			getMessagge(messageData);
		});
	}, [messageData]);

	// console.log(chatList);
	return (
		<ChatLists>
			{/* HEADER */}
			<ChatLists.Header>
				<ChatLists.Brand>
					<ChatLists.Logo src='assets/images/WhatsApp_icon.png' />
					<ChatLists.Title>WhatsApp Clone</ChatLists.Title>
				</ChatLists.Brand>
				<ChatLists.Setting>Logout</ChatLists.Setting>
			</ChatLists.Header>
			{/* HEADER */}

			{/* SEARCH USER */}
			<ChatLists.SearchForm
				onSubmit={(data) => {
					handleSearch(data);
				}}>
				<ChatLists.SearchInput
					type='text'
					name='keyword'
					placeholder='Search'
				/>
				<ChatLists.SearchSubmit type='submit'>
					<Search />
				</ChatLists.SearchSubmit>
				<ChatLists.ListUsers>
					{searchList.map((data) => (
						<ChatLists.Card
							key={data.username}
							onClick={() =>
								getMessagge({
									user1: user.username,
									user2: data.username,
								})
							}>
							<ChatLists.Picture />
							<ChatLists.MessageContainer>
								<ChatLists.Name>
									{data.details.firstname}{' '}
									{data.details.lastname}
								</ChatLists.Name>
								<ChatLists.Username>
									{data.username}
								</ChatLists.Username>
							</ChatLists.MessageContainer>
						</ChatLists.Card>
					))}
				</ChatLists.ListUsers>
			</ChatLists.SearchForm>
			{/* SEARCH USER */}

			{/* LIST MESSAGES */}

			<ChatLists.ListMessages>
				{isLoading ? (
					<div>Loading</div>
				) : (
					<>
						{chatList.map((data, i) => {
							const length = data.messages.length;

							const lastMessage = data.messages[length - 1].msg;
							return (
								<ChatLists.Card
									key={data.id}
									onClick={() => {
										getMessagge(data);
									}}>
									<ChatLists.Picture />
									<ChatLists.MessageContainer>
										<ChatLists.Name>
											{data.user1 === user.username
												? data.user2
												: data.user1}
										</ChatLists.Name>
										<ChatLists.LastMessage>
											{lastMessage}
										</ChatLists.LastMessage>
									</ChatLists.MessageContainer>
									<ChatLists.Time>
										{data.timestamp}
									</ChatLists.Time>
								</ChatLists.Card>
							);
						})}
					</>
				)}
			</ChatLists.ListMessages>
			{/* LIST MESSAGES */}
		</ChatLists>
	);
};

export default ChatListsContainer;
