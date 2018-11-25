import * as mongoose from 'mongoose';

import { Access, AuthStrategy } from './permissions';

interface IDockletInstance {
	name: string,
	project: mongoose.Types.ObjectIdConstructor,
	image: mongoose.Types.ObjectIdConstructor,
	input: string,
	output: string,
}

interface ITrigger {
	name: string,
	project: mongoose.Types.ObjectIdConstructor,
	endpoint: string,
	authentication: AuthStrategy,
	output: string,
}

export type IDocklet = IDockletInstance | ITrigger;

export interface IProject {
	name: string,
	owner: mongoose.Types.ObjectIdConstructor,
	public?: boolean,
	permissions: Map<mongoose.Types.ObjectIdConstructor, Access>,
	graph: Array<IDockletInstance>,
}