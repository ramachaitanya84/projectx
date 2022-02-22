import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChoresService } from './chores.service';
import { Chore } from './entities/chore.entity';

@Controller('chores')
export class ChoresController {
  constructor(private readonly choresService: ChoresService) {}

  @Post()
  async create(@Body() chore: Chore) {
    return await this.choresService.create(chore);
  }

  @Get()
  async findAll() {
    return await this.choresService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.choresService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateChore: Chore) {
    return await this.choresService.update(id, updateChore);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.choresService.remove(id);
  }
}
