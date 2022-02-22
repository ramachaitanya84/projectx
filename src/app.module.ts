import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChoresModule } from './chores/chores.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const localConfig = require('./../config/config.local');

const connectionString =
  'mongodb+srv://' +
  localConfig.username +
  ':' +
  localConfig.password +
  '@testcluster.7n2oh.mongodb.net/' +
  localConfig.dbName +
  '?retryWrites=true&w=majority';

console.log(connectionString);

@Module({
  imports: [ChoresModule, MongooseModule.forRoot(connectionString)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
