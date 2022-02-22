import { Module } from '@nestjs/common';
import { ChoresService } from './chores.service';
import { ChoresController } from './chores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChoreSchema } from './entities/chore.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Chore', schema: ChoreSchema }]),
  ],
  controllers: [ChoresController],
  providers: [ChoresService],
})
export class ChoresModule {}
