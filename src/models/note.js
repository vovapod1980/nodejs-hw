import { model } from 'mongoose';
import { Schema } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: false,
      trim: true,
      default: '',
    },
  },
  {
    timestamps: true,
  },
);

noteSchema.index({ tag: 1 });
export const Note = model('Note', noteSchema);
