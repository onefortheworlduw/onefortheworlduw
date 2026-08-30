'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';

import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemaTypes';
import { resolve } from './sanity/presentation/resolve';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'One for the World UW-Madison',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

