import React from 'react';
import { Header } from '../components';

const HeaderContainer = () => {
	return (
		<Header>
			<Header.Icon src='assets/images/WhatsApp_icon.png' />
			<Header.Title>Simple. Secure. Reliable Messaging.</Header.Title>
			<Header.Text>
				With WhatsApp, you'll get fast, simple, secure messaging and
				calling for free*. Available on phones all over the world
			</Header.Text>
		</Header>
	);
};

export default HeaderContainer;
