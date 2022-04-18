import React, { useState } from 'react';
import { Conversation } from '../components';
import host from './../utils/host';
const ConversationContainer = ({
	message,
	setActiveMessage,
	user1,
	user2,
	io,
}) => {
	const [inpMessage, setInpMessage] = useState('');
	const handleSendMessage = (data) => {
		data.preventDefault();
		if (!user2) return;
		fetch(host('public', '/post-message'), {
			method: 'POST',
			body: JSON.stringify({
				user1: user1,
				user2: user2,
				messages: { msg: inpMessage, sender: user1 },
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				// IO EMIT ID MESSAGE
				// USER1 = SENDER
				// USER2 = RECEIVER
				io.emit('new-message', {
					id: res.data.id,
					sender: res.data.messages[res.data.messages.length - 1]
						.sender,
					receiver:
						res.data.messages[res.data.messages.length - 1]
							.sender === res.data.user1
							? res.data.user2
							: res.data.user1,
				});
				console.log(res);
				setActiveMessage(res.data);

				setInpMessage('');
			});
	};
	return (
		<Conversation>
			{/* CONVERSATION MESSAGE */}

			<Conversation.Message>
				{!message.messages ? (
					<Conversation.Card>No Messages</Conversation.Card>
				) : (
					message.messages.map((data) => (
						<Conversation.Card
							key={data.id}
							isUser={data.sender === user1}>
							<Conversation.Profile
								isUser={data.sender === user1}>
								<Conversation.Picture
									src={
										message.picture
											? data.picture
											: '/assets/images/default_avatar.png'
									}
								/>
								<Conversation.Time>
									{data.sender === user1 ? 'YOU' : user2}
								</Conversation.Time>
							</Conversation.Profile>
							<Conversation.TextMessage
								isUser={data.sender === user1}>
								{data.msg}
								<Conversation.Time>
									{data.timestamp}
								</Conversation.Time>
							</Conversation.TextMessage>
						</Conversation.Card>
					))
				)}
			</Conversation.Message>
			{/* CONVERSATION MESSAGE */}

			{/* WRITE MESSAGE */}
			<Conversation.FormInput
				method='post'
				onSubmit={(data) => handleSendMessage(data)}>
				<Conversation.WriteMessage
					name='message'
					onChange={({ target }) => {
						setInpMessage(target.value);
					}}
					value={inpMessage}
					placeholder='Write messages...'
				/>
				<Conversation.Send type='submit'>Send</Conversation.Send>
			</Conversation.FormInput>
			{/* WRITE MESSAGE */}
		</Conversation>
	);
};

export default ConversationContainer;
