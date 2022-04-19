import React from 'react';
import { GetOnStore } from '../components';
import { HiOutlineDesktopComputer as Computer } from 'react-icons/hi';
import { SiGoogleplay as GooglePlay } from 'react-icons/si';
import { AiFillApple as Apple } from 'react-icons/ai';
const GetOnStoreContainer = () => {
	const store = [
		{ icon: <Apple />, label: 'Get it on', title: 'App Store' },
		{ icon: <GooglePlay />, label: 'Get it on', title: 'Google Play' },
		{ icon: <Computer />, label: 'Get it on', title: 'Mac or Windows' },
	];
	return (
		<GetOnStore>
			{store.map((store) => (
				<GetOnStore.Item key={store.title}>
					<GetOnStore.Icon>{store.icon}</GetOnStore.Icon>
					<GetOnStore.Description>
						<GetOnStore.Label>{store.label}</GetOnStore.Label>
						<GetOnStore.Title>{store.title}</GetOnStore.Title>
					</GetOnStore.Description>
				</GetOnStore.Item>
			))}
		</GetOnStore>
	);
};

export default GetOnStoreContainer;
