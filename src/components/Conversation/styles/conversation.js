import styled from 'styled-components/macro';

export const Conversation = styled.div`
	@media screen and (max-width: 992px) {
		display: none;
	}
	position: relative;
	flex: 4;
	border: 5px solid purple;
	max-height: 100vh;
	max-width: 100%;
	padding: 0.5em;
	overflow-y: auto;
`;
export const Message = styled.div`
	padding: 1em;
	max-width: 100%;
	height: 75vh;
	border: 1px solid green;
	overflow-y: auto;
	::-webkit-scrollbar {
		width: 2px;
	}
	::-webkit-scrollbar-thumb {
		background-color: green;
	}
`;
export const Card = styled.div`
	margin-bottom: 1em;
	display: flex;
	justify-content: ${({ isUser }) => (isUser ? 'end' : 'start')};
	align-items: flex-start;
	width: 100%;
	/* border: 1px solid darkred; */
`;
export const Profile = styled.div`
	order: ${({ isUser }) => (isUser ? 1 : 0)};
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 4em;
	/* border: 1px solid green; */
`;
export const Picture = styled.img`
	width: 60px;
	height: 60px;
	background-color: red;
	border-radius: 50%;
`;
export const Time = styled.span`
	margin-top: 0.5em;
	font-size: 0.4em;
	display: block;
	/* border: 1px solid red; */
`;
export const TextMessage = styled.span`
	font-size: 0.8em;
	color: ${({ isUser }) => (isUser ? 'black' : 'white')};
	background-color: ${({ isUser }) => (isUser ? '#25d366' : '#435a64')};
	border-radius: 20px;
	${({ isUser }) =>
		isUser ? 'border-top-right-radius: 0;' : 'border-top-left-radius: 0;'}
	overflow-y: auto;
	padding: 1em;
	word-wrap: break-word;
	max-width: 100%;
`;
export const FormInput = styled.form`
	gap: 1em;
	padding: 0.5em 0;
	display: flex;
	align-items: center;
	/* border: 2px solid red; */
	min-height: 2em;
	position: absolute;
	bottom: 0.5em;
	right: 0.5em;
	left: 0.5em;
`;
export const WriteMessage = styled.textarea`
	background-color: #435a64;
	color: white;
	::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}
	border-radius: 10px;
	resize: none;
	overflow-y: auto;
	padding: 0.5em;
	width: 92%;
	min-height: 4em;
	max-height: 20em;

	::-webkit-scrollbar {
		width: 2px;
	}
	::-webkit-scrollbar-thumb {
		background-color: green;
	}
`;
export const Send = styled.button`
	padding: 0.5em 1em;
	border: 1px solid red;
	background-color: unset;
	cursor: pointer;
`;
