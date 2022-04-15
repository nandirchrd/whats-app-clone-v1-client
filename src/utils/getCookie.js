export const getCookie = () => {
	if (document.cookie) {
		let user = document.cookie
			.replace(';', '')
			.replace(' ', '=')
			.split('=');
		return { username: user[1], password: user[3] };
	}
};
