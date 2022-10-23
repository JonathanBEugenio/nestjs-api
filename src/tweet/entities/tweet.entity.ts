import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TweetProps = {
  content: string;
  displayName: string;
}

@Schema()
export class Tweet {
  constructor(props: TweetProps) {
    Object.assign(this, props);
  }

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  displayName: string;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);