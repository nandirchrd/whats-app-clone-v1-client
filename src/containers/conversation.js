import React from 'react';
import { Conversation } from '../components';
const ConversationContainer = ({ conversation }) => {
	return (
		<Conversation>
			{/* CONVERSATION MESSAGE */}
			<Conversation.Message>
				<Conversation.Card>
					<Conversation.Profile>
						<Conversation.Picture />
						<Conversation.Time>1.21</Conversation.Time>
					</Conversation.Profile>
					<Conversation.TextMessage>
						Hey Guys
					</Conversation.TextMessage>
				</Conversation.Card>
			</Conversation.Message>
			{/* CONVERSATION MESSAGE */}

			{/* WRITE MESSAGE */}
			<Conversation.FormInput method='post'>
				<Conversation.WriteMessage placeholder='Write messages...' />
				<Conversation.Send type='submit'>Send</Conversation.Send>
			</Conversation.FormInput>
			{/* WRITE MESSAGE */}
		</Conversation>
	);
};

export default ConversationContainer;
