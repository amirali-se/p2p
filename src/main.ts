import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { initializeApp, deleteApp } from 'firebase-admin/app';
import { environment } from './environment';
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	initializeApp(environment.firebaseConfig);
	const config = new DocumentBuilder()
		.setTitle('API P2P')
		.setDescription('The API description')
		.setVersion('1.0')
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('swagger', app, document);
	await app.listen(3000);
}
bootstrap();
