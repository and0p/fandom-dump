import mongoose, { Schema } from 'mongoose';

import { Wiki } from '../api/wikis';

const wikiSchema = new Schema<Wiki>({
    wiki_id: Number
  }, { strict: false });

export const WikiModel = mongoose.model('Wiki', wikiSchema);