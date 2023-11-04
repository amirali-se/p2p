import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { LeadInterface } from 'src/interfaces/lead/lead.interface';
import { LeadDto } from 'src/dtos/lead/lead.dto';

@Injectable()
export class LeadRepositoy {
	constructor(
		@Inject('LEAD_MODEL') private readonly leadModel: Model<LeadInterface>
	) {}

	async create(createLeadDto: LeadDto) {
		const createLead = this.leadModel.create(createLeadDto);
		return await this.leadModel.create(createLeadDto);
	}

	async getAllLeads() {
		return await this.leadModel.find().then((result) => {
			return result;
		}).catch((err) => {
			return err;
		})
	}

	async getLeadById(IdLead: String) {
		return await this.leadModel.findById(IdLead).then((result) => {
			return result;
		}).catch((err) => {
			return err
		});
	}
	async deleteLead(IdLead: String) {
		return await this.leadModel.findByIdAndRemove(IdLead).then((result) => {
			return true;
		}).catch((err) => {
			return false;
		})
	}
	async updateLeadById(IdLead: String, paramsUpdate: any): Promise<LeadInterface> {
		return this.leadModel.findByIdAndUpdate(IdLead, paramsUpdate).then((result) => {
			return this.leadModel.findById(result._id).then((result) => {
				return result;
			}).catch((err) => {
				return err
			});
		}).catch((err) => {
			return err
		});
	}

	async findLead(paramsFindLead: any) {
		return await this.leadModel.find(paramsFindLead).then((result) => {
			return result;
		}).catch((err) => {
			return err
		});
	}
}