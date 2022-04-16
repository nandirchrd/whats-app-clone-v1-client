import React, { useState } from 'react';
import { Container } from '../components';
import NavBarContainer from '../containers/navbar';
import HeaderContainer from '../containers/header';
import LoginContainer from '../containers/login';
import RegisterContainer from '../containers/register';
import GetOnStoreContainer from '../containers/getOnStore';
import { Navigate } from 'react-router';

const LandingPage = ({ user, setUser }) => {
	const [isLogin, setLogin] = useState(true);
	if (user) return <Navigate to='/home' />;
	return (
		<Container className='landing-page'>
			<NavBarContainer />
			<HeaderContainer />
			{isLogin ? (
				<LoginContainer setLogin={setLogin} setUser={setUser} />
			) : (
				<RegisterContainer setLogin={setLogin} setUser={setUser} />
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
