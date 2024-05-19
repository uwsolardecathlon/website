export default {
  name: 'competitionPage',
  title: 'Competition',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'background', title: 'Background'},
    {name: 'project', title: 'Project'},
    {name: 'timeline', title: 'Project Timeline'},
  ],
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'pageHeader',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'header',
    },
    {
      name: 'background',
      title: 'Background',
      type: 'imgSection',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'background',
    },
    {
      name: 'project',
      title: 'Project',
      type: 'section',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'project',
    },
    {
      name: 'timeline',
      title: 'Project Timeline',
      type: 'object',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'timeline',
      fields: [
        {
          name: 'phase1',
          title: 'Phase 1',
          type: 'section',
          options: {collapsible: true},
        },
        {
          name: 'phase2',
          title: 'Phase 2',
          type: 'section',
          options: {collapsible: true},
        },
        {
          name: 'phase3',
          title: 'Phase 3',
          type: 'section',
          options: {collapsible: true},
        },
      ],
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'Competition',
      }
    },
  },
}
