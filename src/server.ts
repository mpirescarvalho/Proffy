import express, { response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => response.json({ message: 'Hello World' }));

app.listen(3333);
