export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  groups: [{name: 'header', title: 'Header'}],
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'object',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'header',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'body',
          title: 'Subheading',
          type: 'string',
          validation: (rule: any) => rule.required(),
        },
      ],
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'Contact',
      }
    },
  },
}
