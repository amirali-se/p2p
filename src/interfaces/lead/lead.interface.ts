import { Date, Document } from 'mongoose';

export interface LeadInterface extends Document {
	_id: String,
	firstName: String,
	lastName: String,
	phoneNumber: String,
	email: String,
	notes: String,
	consent: Date,
	timestamp: String,
	agencyId: String,
	campaignId: String,
}