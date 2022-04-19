import styled from 'styled-components/macro';
import React from 'react';

export const ChatLists = styled.div.attrs(() => ({
	className: 'chatList',
}))`
	/* color: white; // netral
	color: #435a64; // netral
	color: #25d366; // primary */
	padding: 0.5em;
	display: flex;
	flex-direction: column;
	/* border: 1px solid red; */
	flex: 2;
	min-height: 100vh;
	min-width: 15em;
`;
export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* border: 1px solid red; */
	padding: 0.5em 0;
`;
export const Brand = styled.div`
	display: flex;
	align-items: center;
`;
export const Logo = styled.img`
	max-width: 1.5em;
`;
export const Title = styled.h5`
	font-size: 0.5em;
`;
export const Setting = styled.button`
	font-size: 1em;
	cursor: pointer;
	border: none;
	background-color: unset;
	&:hover {
		transform: translateY(-5px);
		color: tomato;
	}
`;
export const SearchForm = styled.form`
	margin-top: 0.2em;
	position: relative;
	width: 100%;
	/* border: 1px solid red; */
	max-height: 200px;
	overflow-y: hidden;
`;
export const SearchInput = styled.input`
	position: relative;
	top: 0;
	width: 100%;
`;
export const SearchSubmit = styled.button`
	font-size: 1em;
	padding: 0.11em;
	color: #435a64;
	background-color: unset;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
`;
//
export const ListUsers = styled.div`
	/* border: 1px solid red; */
	position: relative;
	margin-top: 0.2em;
	width: 100%;
	max-height: 150px;
	overflow-y: auto;
	box-shadow: inset 0px 0px 2px black;
`;
export const ListMessages = styled.div`
	margin-top: 0.5em;
	max-height: 80vh;
	overflow-y: auto;
	flex: 5;
	/* border: 1px solid red; */
`;
export const Card = styled.div`
	gap: 0.2em;
	padding: 1.2em 0;
	cursor: pointer;
	/* border: 1px solid red; */
	display: flex;
	align-items: center;
	height: 2em;
	&:hover {
		background-color: gray;
	}
`;

export const Picture = styled.img`
	border-radius: 50%;
	border: none;
	width: 1.5em;
	height: 1.5em;
	/* background-color: #25d366; */
`;

export const MessageContainer = styled.div`
	flex: 2;
	/* border: 1px solid blue; */
	display: flex;
	flex-direction: column;
`;
export const Name = styled.span`
	font-size: 0.8em;
`;
export const LastMessage = styled.span`
	font-size: 0.5em;
`;
export const Username = styled.span`
	font-size: 0.5em;
`;
export const Time = styled.span`
	color: #435a64;
	font-size: 0.5em;
	/* border: 1px solid green; */
	flex: 0.3;
`;
export const NewMessage = styled.div`
	color: white;
	background-color: green;
	padding: 0.5em;
	border-radius: 50%;
	font-weight: bolder;
	font-size: 0.8em;
	min-width: 1.2em;
	min-height: 1.2em;
	flex: 0.2;
	display: flex;
	border: 1px solid green;
`;

export const Bullet = styled.button`
	color: white;
	text-align: center;
	margin: auto;
	font-size: 0.5em;
	font-weight: bold;
	border: none;
	border-radius: 50%;
	width: 1.2rem;
	height: 1.2rem;
	background-color: #25d366;
`;
