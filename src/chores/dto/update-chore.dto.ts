import { PartialType } from '@nestjs/mapped-types';
import { ChoreDto } from './create-chore.dto';

export interface UpdateChoreDto extends ChoreDto {}
