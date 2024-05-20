export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'overview', title: 'Overview'},
    {name: 'subteams', title: 'Subteams'},
    {name: 'relatedGroups', title: 'Related Groups'},
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
      name: 'overview',
      title: 'Overview',
      type: 'section',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'overview',
    },
    {
      name: 'subteams',
      title: 'Subteams',
      type: 'array',
      of: [{type: 'team'}],
      validation: (rule: any) => rule.required(),
      group: 'subteams',
    },
    {
      name: 'relatedGroups',
      title: 'Related Groups',
      type: 'array',
      of: [{type: 'team'}],
      group: 'relatedGroups',
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'Team',
      }
    },
  },
}
