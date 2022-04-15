export function loginValidate(username, password) {
	if (username.trim() === '') {
		return { err: true, msg: 'Please fill data at username!' };
	}
	if (username[0] !== '@') {
		return { err: true, msg: 'Please add @ at username!' };
	}
	if (username.length <= 3) {
		return { err: true, msg: 'Please min add 3 characters at username!' };
	}
	if (password.trim() === '') {
		return { err: true, msg: 'Please fill data at password!' };
	}
	return { err: false };
}
export function registerValidate(username, password, firstname, lastname) {
	if (firstname.trim() === '') {
		return { err: true, msg: 'Please fill data at firstname!' };
	}
	if (lastname.trim() === '') {
		return { err: true, msg: 'Please fill data at lastname!' };
	}
	if (username.trim() === '') {
		return { err: true, msg: 'Please fill data at username!' };
	}
	if (username[0] !== '@') {
		return { err: true, msg: 'Please add @ at username!' };
	}
	if (username.length <= 3) {
		return { err: true, msg: 'Please min add 3 characters at username!' };
	}
	if (password.trim() === '') {
		return { err: true, msg: 'Please fill data at password!' };
	}
	if (password.length < 3) {
		return { err: true, msg: 'Please min 3 characters at password!' };
	}

	return { err: false };
}
