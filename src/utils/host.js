export default function hostServer(command, path) {
	if (command.toLowerCase() === 'public') {
		if (!path) return 'https://rchrd-whatsapp-clone-v1.herokuapp.com';
		if (path) return 'https://rchrd-whatsapp-clone-v1.herokuapp.com' + path;
	}
	if (!path) return 'http://localhost:8000';
	if (path) return 'http://localhost:8000' + path;
}
