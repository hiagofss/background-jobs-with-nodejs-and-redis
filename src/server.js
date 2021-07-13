import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';

import UserController from './app/controller/UserController';
import Queue from './app/lib/Queue';

const port = process.env.PORT || 3333;

const app = express();
BullBoard.setQueues(Queue.queues.map((queue) => queue.bull));

app.use(express.json());

app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(port, () => {
	console.log(`Server running ${port}`);
});
