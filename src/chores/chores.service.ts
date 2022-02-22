import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chore } from './entities/chore.entity';

@Injectable()
export class ChoresService {
  constructor(
    @InjectModel('Chore') private readonly choreModel: Model<Chore>,
  ) {}

  async create(chore: Chore) {
    const newChore = new this.choreModel({
      title: chore.title,
      description: chore.description,
      dueDate: chore.dueDate,
    });

    const result = await newChore.save();
    return result.id as string;
  }

  async findAll() {
    const chores = await this.choreModel.find().exec();
    return chores.map((chore) => ({
      id: chore.id,
      name: chore.title,
      description: chore.description,
      dueDate: chore.dueDate,
    }));
  }

  async findOne(id: string) {
    const chore = await this.findProduct(id);
    return {
      id: chore.id,
      name: chore.title,
      description: chore.description,
      dueDate: chore.dueDate,
    };
  }

  async update(id: string, updateChore: Chore) {
    try {
      const chore = await this.findProduct(id);

      chore.title = updateChore.title == null ? chore.title : updateChore.title;
      chore.description =
        updateChore.description == null
          ? chore.description
          : updateChore.description;
      chore.dueDate =
        updateChore.dueDate == null ? chore.dueDate : updateChore.dueDate;

      chore.save();
      return 'Chore updated successfully.';
    } catch (error) {
      throw new BadRequestException('Incorrect request parameters');
    }
  }

  async remove(id: string) {
    const result = await this.choreModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Chore not found. No chores deleted.');
    }
  }

  private async findProduct(id: string): Promise<Chore> {
    try {
      return await this.choreModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('No chore found with this id.');
    }
  }
}
