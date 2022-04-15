import styled from 'styled-components/macro';

export const Register = styled.form`
	margin-top: 1em;
	display: flex;
	flex-direction: column;
	/* border: 1px solid red; */
`;
export const Error = styled.div`
	padding: 0.5em 0;
	margin-top: 1em;
	border-bottom: 1px solid red;
	color: red;
`;
export const FirstName = styled.input`
	padding: 0.5em 0;
	margin-top: 1em;
	border: none;
	border-bottom: 2px solid #25d366;
`;
export const LastName = styled.input`
	padding: 0.5em 0;
	margin-top: 1em;
	border: none;
	border-bottom: 2px solid #25d366;
`;
export const Born = styled.input`
	padding: 0.5em 0;
	margin-top: 1em;
	border: none;
	border-bottom: 2px solid #25d366;
`;
export const Username = styled.input`
	padding: 0.5em 0;
	margin-top: 1em;
	border: none;
	border-bottom: 2px solid #25d366;
`;
export const Password = styled.input`
	padding: 0.5em 0;
	margin-top: 1em;
	border: none;
	border-bottom: 2px solid #25d366;
`;
export const Submit = styled.button`
	cursor: pointer;
	margin-top: 1.5em;
	border: none;
	padding: 0.2em 0.5em;
	background-color: #25d366;
	color: white;
`;
export const Question = styled.span`
	font-size: 0.8em;
	margin-top: 1em;
	cursor: pointer;
	display: block;
	margin: 0 auto;
	margin-top: 20px;
`;
