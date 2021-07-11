import passwordGenerator from 'password-generator';

export default {
	async store(request, response) {
		const { name, email } = request.body;

		const user = {
			name,
			email,
			password: passwordGenerator(15, false).toString(),
		};

		return response.json(user);
	},
};
