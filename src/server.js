import 'dotenv/config';
import express from 'express';

import UserController from './app/controller/UserController';

const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());

app.post('/users', UserController.store);

app.listen(port, () => {
	console.log(`Server running ${port}`);
});
