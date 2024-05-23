import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'kf5p004e',
  dataset: 'production',
  apiVersion: '2024-05-19',
  useCdn: true,
});

export default client;
