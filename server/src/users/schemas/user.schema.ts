import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Event>;

@Schema()
export class User {
  @Prop({ required: [true, 'El email del usuario es requerido.'] })
  email: string;

  @Prop({ required: [true, 'La contraseña del usuario es requerida.'] })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
