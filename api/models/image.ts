import * as mongoose from 'mongoose';

import { Access } from './permissions';

export interface IImage {
	name: string,
	description: string,
	public?: boolean,
	permissions: Map<mongoose.Types.ObjectIdConstructor, Access>,	// Map User -> Access
	// input: string,	// I'm thinking that the I/O spec could be scrapped to start with, just let whatever through and
	// output: string,	// assume that the docklet will error when it receives badly formatted input.
	persistent: boolean,
}