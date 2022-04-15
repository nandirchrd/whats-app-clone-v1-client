import React from 'react';
import { GetOnStore } from '../components';
import { HiOutlineDesktopComputer as Computer } from 'react-icons/hi';
import { SiGoogleplay as GooglePlay } from 'react-icons/si';
import { AiFillApple as Apple } from 'react-icons/ai';
const GetOnStoreContainer = () => {
	return (
		<GetOnStore>
			<GetOnStore.Item>
				<GetOnStore.Icon>
					<Apple />
				</GetOnStore.Icon>
				<GetOnStore.Description>
					<GetOnStore.Label>Get it on</GetOnStore.Label>
					<GetOnStore.Title>App Store</GetOnStore.Title>
				</GetOnStore.Description>
			</GetOnStore.Item>
			<GetOnStore.Item>
				<GetOnStore.Icon>
					<GooglePlay />
				</GetOnStore.Icon>
				<GetOnStore.Description>
					<GetOnStore.Label>Get it on</GetOnStore.Label>
					<GetOnStore.Title>Google Play</GetOnStore.Title>
				</GetOnStore.Description>
			</GetOnStore.Item>
			<GetOnStore.Item>
				<GetOnStore.Icon>
					<Computer />
				</GetOnStore.Icon>
				<GetOnStore.Description>
					<GetOnStore.Label>Get it on</GetOnStore.Label>
					<GetOnStore.Title>Mac or Windows</GetOnStore.Title>
				</GetOnStore.Description>
			</GetOnStore.Item>
		</GetOnStore>
	);
};

export default GetOnStoreContainer;
