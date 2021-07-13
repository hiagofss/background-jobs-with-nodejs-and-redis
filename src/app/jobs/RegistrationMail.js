import Mail from '../lib/Mail';

export default {
	key: 'RegistrationMail',
	options: {
		//
	},
	async handle({ data }) {
		const { user } = data;

		await Mail.sendMail({
			from: 'Contact <contact@test.com>',
			to: `${user.name} <${user.email}>`,
			subject: 'User registration',
			html: `Hello, ${user.name}, welcome!`,
		});
	},
};
