class BaseError extends Error {
	constructor(message, reason) {
		super(message);
		this.reason = reason;
		this.name = 'BaseError';
	}
};

class BadInputError extends BaseError {
	constructor(message, reason) {
		super(message);
		this.reason = reason;
		this.name = 'BadInputError';
	}
};

class WrongCredentials extends BaseError {
	constructor(message, reason) {
		super(message);
		this.reason = reason;
		this.name = 'WrongCredentials';
	}
};

function customError() {
	try {
		someinputtext
	} catch (e) {
		throw new BadInputError('You have entered incorrect input data', "BadInputError");
	}
}

customError();