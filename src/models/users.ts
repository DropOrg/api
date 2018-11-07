import * as mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
	username: string,
	name: string,
	projects: Array<string>,
}

export const UserSchema = new mongoose.Schema({
	username: { type: String, required: true, isUnique: true},
	name: { type: String, required: false },
	projects: [{ type: String, required: true }],
});

export const User = mongoose.model('User', UserSchema);

export default User;