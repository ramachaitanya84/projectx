import * as mongoose from 'mongoose';

export const ChoreSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
});

export class Chore extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
}
