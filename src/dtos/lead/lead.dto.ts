import { ApiProperty } from '@nestjs/swagger';
export class LeadDto {
	@ApiProperty()
	firstName: String;
	@ApiProperty()
	lastName: String;
	@ApiProperty()
	phoneNumber: String;
	@ApiProperty()
	email: String;
	@ApiProperty()
	notes: String;
	@ApiProperty()
	consent: Date;
	@ApiProperty()
	timestamp: String;
	@ApiProperty()
	agencyId: String;
	@ApiProperty()
	campaignId: String;
}