import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Container } from '../components';
import NavBarContainer from '../containers/navbar';
import HeaderContainer from '../containers/header';
import LoginContainer from '../containers/login';
import RegisterContainer from '../containers/register';
import GetOnStoreContainer from '../containers/getOnStore';
import host from './../utils/host';

const LandingPage = ({ user, setUser }) => {
	const [mode, setMode] = useState('LOGIN');
	let wait = false;
	if (localStorage.getItem('user') && localStorage.getItem('password')) {
		wait = true;
		const getUser = async () => {
			const [username, password] = [
				localStorage.getItem('user'),
				localStorage.getItem('password'),
			];
			const res = await fetch(host('public', '/auth'), {
				method: 'POST',
				body: JSON.stringify({ username, password }),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			// RESPONSE
			// GET THE RESULT DATA
			const result = await res.json();
			// GET DATA FROM THE SERVER
			setUser(result.data);
			return <Navigate to='/' replace={true} />;
		};
		getUser();
	}
	if (user) return <Navigate to='/home' />;
	if (wait) return null;
	return (
		<Container className='landing-page'>
			<NavBarContainer />
			<HeaderContainer />
			{mode === 'LOGIN' ? (
				<LoginContainer setMode={setMode} setUser={setUser} />
			) : (
				<RegisterContainer setMode={setMode} setUser={setUser} />
			)}
			<GetOnStoreContainer />
			<div
				style={{
					fontSize: '0.5em',
					textAlign: 'center',
					marginTop: '1em',
				}}>
				<p>
					Design src :{' '}
					<a
						rel='noreferrer'
						href="https://dribbble.com/shots/15425733-What-s-App-Web-Redesign?utm_source=Clipboard_Shot&utm_campaign=albofazl&utm_content=What's%20App%20Web%20Redesign&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=albofazl&utm_content=What's%20App%20Web%20Redesign&utm_medium=Social_Share"
						target='_blank'>
						https://dribbble.com/albofazl
					</a>
				</p>
			</div>
		</Container>
	);
};

export default LandingPage;
