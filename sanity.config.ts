import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { markdownSchema } from 'sanity-plugin-markdown/next'

export default defineConfig({
  basePath: '/_admin',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    visionTool({ defaultApiVersion: apiVersion }),
    markdownSchema(),
  ],
})
