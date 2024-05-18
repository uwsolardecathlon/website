import {defineConfig} from 'sanity'
import {StructureBuilder, structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Create singleton document as we only want one document per website page
const singletonListItem = (S: StructureBuilder, typeName: string, title: string) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))

export default defineConfig({
  name: 'default',
  title: 'UW Solar Decathlon',

  projectId: 'kf5p004e',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            singletonListItem(S, 'homePage', 'Home'),
            singletonListItem(S, 'aboutPage', 'About'),
            singletonListItem(S, 'teamPage', 'Team'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
