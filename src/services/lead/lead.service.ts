import { Injectable } from '@nestjs/common';
import { LeadRepositoy } from 'src/repositories/lead/lead.repository';
import { LeadDto } from 'src/dtos/lead/lead.dto';
import { LeadInterface } from 'src/interfaces/lead/lead.interface';
@Injectable()
export class LeadService {

	constructor(
		private readonly leadRepository: LeadRepositoy
	) {}


	async create(LeadDto: LeadDto) {
		return await this.leadRepository.create(LeadDto);
	}
	async getAllLeads() {
		return await this.leadRepository.getAllLeads();
	}
	async getLeadById(IdLead: String) {
		return await this.leadRepository.getLeadById(IdLead);
	}

	async deleteLead(IdLead: String): Promise<Boolean> {
		return await this.leadRepository.deleteLead(IdLead);
	}
	async updateLeadById(IdLead: String, paramsUpdate: any) {
		return await this.leadRepository.updateLeadById(IdLead, paramsUpdate);
	}

	async findLead(paramsFindLead: String) {
		var obj = {$text: {$search: paramsFindLead, $caseSensitive: false }}
		return await this.leadRepository.findLead(obj);
	}
}
