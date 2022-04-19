import React, { useEffect, useState } from 'react';
import { ChatLists } from '../components';
import { AiOutlineSearch as Search, AiOutlinePoweroff } from 'react-icons/ai';
import host from './../utils/host';
const ChatListsContainer = ({
	user,
	activeMessage,
	setActiveMessage,
	setMessage,
	setUser2,
	io,
	onLogOut,
	...restProps
}) => {
	const [isLoading, setLoading] = useState(false);
	const [chatList, setChatList] = useState([]);
	const [srcInp, setSrcInp] = useState('');
	const [searchList, setsearchList] = useState([]);

	const handleSearch = (data) => {
		data.preventDefault();
		const keyword = data.target.keyword.value;
		if (keyword === user.username) return;
		// GET DATA FROM SERVER
		fetch(host('public', '/get-users'), {
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
		// console.log('DATA:', data);
		setSrcInp('');
		setsearchList([]);

		fetch(host('public', '/get-message'), {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
				setMessage(res);
				setActiveMessage(res);
				// setActiveMessage(res.data);
			});
	};

	useEffect(() => {
		// console.log('CHATLIST:', chatList);
	}, [chatList]);
	useEffect(() => {
		function getData() {
			setLoading(true);
			fetch(host('public', '/get-messages'), {
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
		io.on(`update-chatlist:${user.username}`, () => {
			getData();
		});
	}, [io, user]);

	useEffect(() => {
		const idMsg = activeMessage.id;
		// console.log('IDMESSAGE:', idMsg);
		io.on(`new-message:${idMsg}`, () => {
			getMessagge(activeMessage);
		});
	}, [activeMessage, io]);

	return (
		<ChatLists>
			{/* HEADER */}
			<ChatLists.Header>
				<ChatLists.Brand>
					<ChatLists.Logo src='assets/images/WhatsApp_icon.png' />
					<ChatLists.Title>WhatsApp Clone</ChatLists.Title>
				</ChatLists.Brand>
				<ChatLists.Setting onClick={onLogOut}>
					<AiOutlinePoweroff />
				</ChatLists.Setting>
			</ChatLists.Header>
			{/* HEADER */}

			{/* SEARCH USER */}
			<ChatLists.SearchForm
				onSubmit={(data) => {
					handleSearch(data);
				}}>
				<ChatLists.SearchInput
					type='text'
					value={srcInp}
					onChange={({ target }) => setSrcInp(target.value)}
					name='keyword'
					placeholder='Search'
				/>
				<ChatLists.SearchSubmit type='submit'>
					<Search />
				</ChatLists.SearchSubmit>
				<ChatLists.ListUsers>
					{searchList.map((data) => {
						return (
							data.username !== user.username && (
								<ChatLists.Card
									key={data.username}
									onClick={() => {
										getMessagge({
											user1: user.username,
											user2: data.username,
										});
										if (window.innerWidth < 768) {
											document.querySelector(
												'.chatList'
											).style.display = 'none';
											document.querySelector(
												'.conversation'
											).style.display = 'block';
										}
									}}>
									<ChatLists.Picture
										src={
											data.picture
												? data.picture
												: '/assets/images/default_avatar.png'
										}
									/>
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
							)
						);
					})}
				</ChatLists.ListUsers>
			</ChatLists.SearchForm>
			{/* SEARCH USER */}

			{/* LIST MESSAGES */}

			<ChatLists.ListMessages>
				{isLoading ? (
					<img src='assets/images/loading.gif' />
				) : (
					<>
						{chatList
							.sort(
								(data1, data2) =>
									data2.sortTime - data1.sortTime
							)
							.map((data, i) => {
								const length = data.messages.length;

								const lastMessage =
									data.messages[length - 1].msg;
								return (
									<ChatLists.Card
										key={data.id}
										onClick={() => {
											getMessagge(data);
											if (window.innerWidth < 768) {
												document.querySelector(
													'.chatList'
												).style.display = 'none';
												document.querySelector(
													'.conversation'
												).style.display = 'block';
											}
										}}>
										<ChatLists.Picture
											src={
												data.picture
													? data.picture
													: '/assets/images/default_avatar.png'
											}
										/>
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
											{data.messages[
												data.messages.length - 1
											].sender === user.username
												? 'YOU'
												: ''}
										</ChatLists.Time>
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
