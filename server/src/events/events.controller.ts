import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dtos/create-event.dto';
import { ObjectId } from 'mongoose';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  getAll() {
    return this.eventsService.getAll();
  }

  @Get(':id')
  getEvent(@Param('id') id: ObjectId) {
    return this.eventsService.getEventById(id);
  }
}
