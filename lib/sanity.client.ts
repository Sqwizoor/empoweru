import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'v8cu8o3d',
  dataset: 'production',
  apiVersion: '2023-12-25', // Use the latest API version
  useCdn: false,
})

