import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { api } from './src/drop';


const dbaddr = process.env.DBADDR || "mongodb://localhost:27017/test";
mongoose.connect(dbaddr, { useNewUrlParser: true });
let db = mongoose.connection;
db.on('error', () => {
	console.log("FATAL: Connection to " + dbaddr + " failed!");
	process.exit(-1);
});

const app = express();
const port: number = parseInt(process.env.PORT) || 3000;

app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(bodyParser.json());

app.use("/", api);

app.listen(port);