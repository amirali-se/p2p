import { Document } from 'mongoose';

export interface UserInterface extends Document {
	_id: String,
	firstName: String,
	lastName: String,
	email: String,
	uidFirebase: String
}