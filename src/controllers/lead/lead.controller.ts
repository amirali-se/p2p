import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { LeadService } from 'src/services/lead/lead.service';
import { Request, Response, NextFunction } from 'express';
import { LeadDto } from 'src/dtos/lead/lead.dto';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';

@ApiTags('lead')
@Controller('lead')
export class LeadController {

  constructor(
		private readonly leadService: LeadService
	) {}

	@Get('search')
	@ApiBearerAuth()
	getAllLeads() {
	  return this.leadService.getAllLeads();
	}

	@Get(':id')
	@ApiCreatedResponse({
		description: 'Search successful...',
		type: LeadDto,
	})
	@ApiBearerAuth()
	async getLeadById(@Param('id') id: String) {
	  return this.leadService.getLeadById(id);
	}

	@Post()
	@ApiCreatedResponse({
		description: 'The record has been successfully created...',
		type: LeadDto,
	})
	async createLead(@Body() LeadDto: LeadDto) {
		return this.leadService.create(LeadDto);
	}

	@Delete(':id')
	@ApiCreatedResponse({
		description: 'The record has been successfully deleted...',
		type: LeadDto,
	})
	@ApiBearerAuth()
	async deleteLead(@Param('id') id: string){
		return this.leadService.deleteLead(id);
	}
	@Patch(':id')
	@ApiCreatedResponse({
		description: 'The record has been updated successfully...',
		type: LeadDto,
	})
	@ApiBearerAuth()
	async updateLead(@Param('id') IdLead: string, @Body() paramsUpdate: any){
		return this.leadService.updateLeadById(IdLead, paramsUpdate);
	}

	@Get('search/:query')
	@ApiBearerAuth()
	async findLead(@Param('query') paramsFindLead: string){
		return this.leadService.findLead(paramsFindLead);
	}
}
