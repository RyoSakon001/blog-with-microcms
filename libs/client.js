import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'skn-blog',
  apiKey: process.env.API_KEY,
});