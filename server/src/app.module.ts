import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    EventsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/applicate'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
