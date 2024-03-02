import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Event } from './schemas/event.schema';
import { CreateEventDto } from './dtos/create-event.dto';
import { ObjectId, Model } from 'mongoose';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  async create(createEventDto: CreateEventDto) {
    try {
      const newEvent = await this.eventModel.create(createEventDto);

      return newEvent;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getAll() {
    try {
      const allEvents = await this.eventModel.find();

      return allEvents;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getEventById(id: ObjectId) {
    try {
      const event = await this.eventModel.findOne({ _id: id });

      return event;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
