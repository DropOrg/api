import { Router, Request, Response} from 'express'

import { UserRouter } from './users'

const router = Router();

router.get('/', (req: Request, res: Response) => {
	res.send("request path: " + req.path);
})

router.use('/user', UserRouter);

export const api: Router = router;