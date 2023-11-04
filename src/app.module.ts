import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { LeadController } from './controllers/lead/lead.controller';
import { LeadService } from './services/lead/lead.service';
import { DatabaseModule } from './data/database.module';
import { userProvider } from './providers/user/user.provider';
import { leadProvider } from './providers/lead/lead.provider';
import { UserRepositoy } from './repositories/user/user.repository';
import { LeadRepositoy } from './repositories/lead/lead.repository';
import { VerifyTokenMiddleware } from './middleware/verifyToken.middleware';
import { DashboardController } from './controllers/dashboard/dashboard.controller';
import { DashboardRepositoy } from './repositories/dashboard/dashboard.repository';
import { DashboardService } from './services/dashboard/dashboard.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController, LeadController, DashboardController],
  providers: [UserService, LeadService, UserRepositoy, LeadRepositoy, DashboardRepositoy, DashboardService, ...userProvider, ...leadProvider],
})
export class AppModule implements NestModule {

	configure(consumer: MiddlewareConsumer) {
	  consumer
		.apply(VerifyTokenMiddleware)
		.forRoutes(
		{ path: 'user', method: RequestMethod.GET },
		{ path: 'user', method: RequestMethod.PUT },
		{ path: 'user', method: RequestMethod.DELETE },
		{ path: 'lead', method: RequestMethod.GET },
		{ path: 'user/:id', method: RequestMethod.ALL },
		{ path: 'lead/:id', method: RequestMethod.ALL },
		{ path: 'dashboard', method: RequestMethod.ALL},
		{ path: 'lead/search/:query', method: RequestMethod.ALL },
		{ path: 'lead/search', method: RequestMethod.ALL });
	}
  }