import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import { api } from './api/drop';


const dbaddr = process.env.DBADDR || "mongodb://localhost:27017/test";
mongoose.connect(dbaddr, { useNewUrlParser: true });

mongoose.set('useCreateIndex', true);

let db = mongoose.connection;
db.on('error', () => {
	console.error.bind(console, "Database connection error: ");
	process.exit(-1);
});
db.once("open", () => {
	console.log("Connection established to database!");
});

const app = express();
const port: number = parseInt(process.env.PORT) || 3000;

app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(bodyParser.json());

// Endpoint logging for sanity checks
app.use((req: express.Request, res: express.Response, next) => {
	console.log(req.method + " " + req.path + "; query: " + JSON.stringify(req.query) + "; body: " + JSON.stringify(req.body));
	next();
});

app.use("/", api);

console.log("Drop listening on port " + port)
app.listen(port);