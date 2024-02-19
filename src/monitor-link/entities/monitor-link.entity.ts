import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { User } from '../../user/entities/user.entity';

export type MonitorLinkDocument = HydratedDocument<MonitorLink>;

@Schema({ timestamps: true })
export class MonitorLink extends Document {
  @Prop()
  url: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  frequency: number;

  @Prop()
  status: string;

  @Prop([String])
  notificationEmails: string[];
}

export const MonitorLinkSchema = SchemaFactory.createForClass(MonitorLink);
