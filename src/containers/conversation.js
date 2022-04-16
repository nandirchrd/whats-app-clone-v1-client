import React, { useState } from 'react';
import { Conversation } from '../components';
import host from './../utils/host';
const ConversationContainer = ({ conversation, user2, user1, io }) => {
	const [message, setMessage] = useState('');
	const handleSendMessage = (data) => {
		data.preventDefault();
		if (!user2) return;
		fetch(host('public', '/post-message'), {
			method: 'POST',
			body: JSON.stringify({
				user1: user1,
				user2: user2,
				messages: { msg: message, sender: user1 },
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				// IO EMIT ID MESSAGE
				io.emit(
					'new-message',
					`${res.data.id}`,
					`${res.data.user1}`,
					`${res.data.user2}`
				);
				console.log(res);
				setMessage('');
			});
	};
	console.log(conversation);
	return (
		<Conversation>
			{/* CONVERSATION MESSAGE */}

			<Conversation.Message>
				{conversation.length === 0 ? (
					<Conversation.Card>No Messages</Conversation.Card>
				) : (
					conversation.map((data) => (
						<Conversation.Card
							key={data.id}
							isUser={data.sender === user1}>
							<Conversation.Profile
								isUser={data.sender === user1}>
								<Conversation.Picture />
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
						setMessage(target.value);
					}}
					value={message}
					placeholder='Write messages...'
				/>
				<Conversation.Send type='submit'>Send</Conversation.Send>
			</Conversation.FormInput>
			{/* WRITE MESSAGE */}
		</Conversation>
	);
};

export default ConversationContainer;
