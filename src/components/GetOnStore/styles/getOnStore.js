import styled from 'styled-components/macro';

export const GetOnStore = styled.div`
	margin-top: 2em;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
`;

export const Item = styled.button`
	font-size: min(max(0.5em, 3.5vw), 0.8em);
	cursor: pointer;
	border-radius: 5px;
	display: flex;
	padding: 0.2em 0.8em;
	background-color: black;
	border: none;
	color: white;
`;

export const Icon = styled.span`
	padding: 0.2em;
	margin: auto 0;
`;

export const Description = styled.div`
	margin: auto 0;
	display: flex;
	flex-direction: column;
	font-size: 0.8em;
`;

export const Label = styled.span`
	font-size: 0.5em;
	text-align: left;
`;

export const Title = styled.span`
	text-align: left;
`;
