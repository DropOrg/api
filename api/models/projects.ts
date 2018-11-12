import * as mongoose from 'mongoose';

import { Access } from './permissions';

interface IDockletInstance {
	
}

export interface IProject {
	name: string,
	owner: mongoose.Types.ObjectIdConstructor,
	public?: boolean,
	permissions: Map<mongoose.Types.ObjectIdConstructor, Access>,
	graph: Array<IDockletInstance>,
}