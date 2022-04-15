import { io } from 'socket.io-client';

export default function connection(host) {
	return io(host);
}
