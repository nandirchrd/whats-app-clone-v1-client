import React, { useState } from 'react';
import { Navigate } from 'react-router';
import { Container } from '../components';
import NavBarContainer from '../containers/navbar';
import HeaderContainer from '../containers/header';
import LoginContainer from '../containers/login';
import RegisterContainer from '../containers/register';
import GetOnStoreContainer from '../containers/getOnStore';

const LandingPage = ({ user, setUser }) => {
	const [mode, setMode] = useState('LOGIN');
	if (user) return <Navigate to='/home' />;
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
					<a href="https://dribbble.com/shots/15425733-What-s-App-Web-Redesign?utm_source=Clipboard_Shot&utm_campaign=albofazl&utm_content=What's%20App%20Web%20Redesign&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=albofazl&utm_content=What's%20App%20Web%20Redesign&utm_medium=Social_Share">
						https://dribbble.com/albofazl
					</a>
				</p>
			</div>
		</Container>
	);
};

export default LandingPage;
