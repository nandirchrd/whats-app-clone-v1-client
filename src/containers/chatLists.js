import React, { useEffect, useState } from 'react';
import { ChatLists } from '../components';
import { AiOutlineSearch as Search } from 'react-icons/ai';
const ChatListsContainer = ({ user, setConversation }) => {
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
	const [isLoading, setLoading] = useState(false);
	const [chatList, setChatList] = useState([]);

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
			<ChatLists.SearchForm>
				<ChatLists.SearchInput
					type='text'
					name='search'
					placeholder='Search'
				/>
				<ChatLists.SearchSubmit type='submit'>
					<Search />
				</ChatLists.SearchSubmit>
			</ChatLists.SearchForm>
			{/* SEARCH USER */}

			{/* LIST MESSAGES */}

			<ChatLists.ListMessages>
				{isLoading ? (
					<div>Loading</div>
				) : (
					<>
						{chatList.map((data) => (
							<ChatLists.Card
								onClick={() => setConversation(data)}>
								<ChatLists.Picture />
								<ChatLists.MessageContainer>
									<ChatLists.Name>Nandi</ChatLists.Name>
									<ChatLists.LastMessage>
										Hello
									</ChatLists.LastMessage>
								</ChatLists.MessageContainer>
								<ChatLists.Time>1.12</ChatLists.Time>
								<ChatLists.NewMessage>226</ChatLists.NewMessage>
							</ChatLists.Card>
						))}
					</>
				)}
			</ChatLists.ListMessages>
			{/* LIST MESSAGES */}
		</ChatLists>
	);
};

export default ChatListsContainer;
