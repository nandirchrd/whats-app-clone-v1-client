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
		</Container>
	);
};

export default LandingPage;
