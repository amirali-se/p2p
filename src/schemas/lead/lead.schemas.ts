import * as mongoose from 'mongoose';

export const LeadSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	phoneNumber: String,
	email: String,
	notes: String,
	consent: Date,
	timestamp: String,
	agencyId: String,
	campaignId: String,
}, { timestamps: true });
