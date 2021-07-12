import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail';

export default {
	async store(request, response) {
		const { name, email } = request.body;

		const user = {
			name,
			email,
			password: passwordGenerator(15, false).toString(),
		};

		await Mail.sendMail({
			from: 'Contact <contact@test.com>',
			to: `${name} <${email}>`,
			subject: 'User registration',
			html: `Hello, ${name}, welcome!`,
		});

		return response.json(user);
	},
};
