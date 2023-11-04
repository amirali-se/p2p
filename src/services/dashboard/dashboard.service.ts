import { Injectable } from '@nestjs/common';
import { LeadRepositoy } from 'src/repositories/lead/lead.repository';
import { LeadDto } from 'src/dtos/lead/lead.dto';
import { LeadInterface } from 'src/interfaces/lead/lead.interface';
import { DashboardRepositoy } from 'src/repositories/dashboard/dashboard.repository';
@Injectable()
export class DashboardService {

	constructor(
		private readonly dashBoardRepository: DashboardRepositoy
	) {}

	async getData() {
		return await this.dashBoardRepository.getData();
	}
}
