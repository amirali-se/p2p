import { Controller, Get} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DashboardService } from 'src/services/dashboard/dashboard.service';

@ApiTags('dashboard')
@Controller('dashboard')
export class DashboardController {

  constructor(
		private readonly dashboardService: DashboardService
	) {}

	@Get()
	@ApiBearerAuth()
	getAllLeads() {
	  return this.dashboardService.getData();
	}

}
