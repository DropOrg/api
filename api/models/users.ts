import * as mongoose from 'mongoose';
import { ObjectID } from 'bson';

export interface IUser extends mongoose.Document {
	username: string,
	name: string,
	projects: Array<mongoose.Types.ObjectId>,
}

export const UserSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	name: { type: String, required: false },
	projects: [{ type: mongoose.Schema.Types.ObjectId, required: true }],
	password: {type: String, required: true, select: false},
});

export const User = mongoose.model('User', UserSchema);

export default User;