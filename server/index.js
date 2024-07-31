import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import DefaultData from './default.js';
import Router from './routes/route.js';
const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({extended: true }))

app.use('/', Router);

const PORT = 8000;
Connection();
app.listen(PORT, () => console.log(` i am priya your server is running  sucess full on PORT ${PORT} `));

DefaultData();