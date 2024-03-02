import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop({ required: [true, 'El nombre del evento es requerido.'] })
  title: string;

  @Prop({ required: [true, 'La descripción del evento es requerida.'] })
  description: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
