import { Router, Request, Response } from 'express';

import { User } from '../models';

// Single User operations
const user = Router();

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
})

export const UserRouter: Router = user;

// batch Users endpoints 
const users = Router();

users.get('/', (req: Request, res: Response) => {

});

export const UsersRouter: Router = users;