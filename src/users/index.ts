import { Router, Request, Response } from 'express';

import { User, IUser } from '../models';

// Single User operations
const user = Router();

user.put('/:user', (req: Request, res: Response) => {
	let newuser: IUser = req.body as IUser;
	if (!newuser.username) {
		newuser.username = req.params.user as string;
	}
	User.create(newuser).then((value) => {
		value['password'] = undefined;
		res.status(200).send(value);
	}, (reason) => {
		res.status(500).send(reason);
	});
});

user.get('/:user', (req: Request, res: Response) => {
	User.findOne({ username: req.params.user }, (err, response: Document) => {
		if(err)
			res	.status(400)
				.send(err);
		else if (!response)
			res.sendStatus(404);
		else
			res.send("Result for user " + req.params.user + ": " + response);
	});
});

user.post('/:user', (req: Request, res: Response) => {
	let newuser: IUser = req.body as IUser;

	User.updateOne({ username: user }, newuser, (err, raw) => {
		if(err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(raw);
		}
	})
});

user.delete('/:user', (req: Request, res: Response) => {
	User.deleteOne({ username: req.params.user }, (err: any) => {
		if(err) {
			res.status(500).send(err);
		} else {
			res.sendStatus(200);
		}
	});
});

export const UserRouter: Router = user;

// batch Users endpoints 
const users = Router();

users.get('/', (req: Request, res: Response) => {
	res.send(req.query);
});

export const UsersRouter: Router = users;