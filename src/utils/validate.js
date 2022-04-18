export function loginValidate({ username, password }) {
	// IF USERNAME EMPTY
	if (username.trim() === '') {
		return { err: true, msg: 'Please fill data at username!' };
	}
	// IF USERNAME DIDN'T ADD @
	if (username[0] !== '@') {
		return { err: true, msg: 'Please add @ at username!' };
	}
	// IF USERNAME DIDN'T 3 CHARACTER
	if (username.length <= 3) {
		return { err: true, msg: 'Please min add 3 characters at username!' };
	}

	// IF PASSWORD EMPTY
	if (password.trim() === '') {
		return { err: true, msg: 'Please fill data at password!' };
	}

	// IF SUCCESS VALIDATION
	return { err: false };
}
export function registerValidate({ username, password, firstname, lastname }) {
	// IF FIRTSNAME EMPTY
	if (firstname.trim() === '') {
		return { err: true, msg: 'Please fill data at firstname!' };
	}
	// IF FIRSTNAME A NUMBER
	if (!isNaN(parseInt(firstname))) {
		return {
			err: true,
			msg: 'Please fill data only a String at firstname!',
		};
	}

	// IF LASTNAME EMPTY
	if (lastname.trim() === '') {
		return { err: true, msg: 'Please fill data at lastname!' };
	}
	// IF LASTNAME A NUMBER
	if (!isNaN(parseInt(lastname))) {
		return {
			err: true,
			msg: 'Please fill data only a String at lastname!',
		};
	}

	// IF USERNAME EMPTY
	if (username.trim() === '') {
		return { err: true, msg: 'Please fill data at username!' };
	}
	// IF USERNAME DIDNT ADD @
	if (username[0] !== '@') {
		return { err: true, msg: 'Please add @ at username!' };
	}
	// IF USERNAME DIDN'T 3 CHARACTER
	if (username.length <= 3) {
		return { err: true, msg: 'Please min add 3 characters at username!' };
	}

	// IF PASSWORD EMPTY
	if (password.trim() === '') {
		return { err: true, msg: 'Please fill data at password!' };
	}
	// IF PASSWORD DIDN'T 3 CHARACTER
	if (password.length < 3) {
		return { err: true, msg: 'Please min 3 characters at password!' };
	}

	// IF SUCCESS VALIDATION
	return { err: false };
}
