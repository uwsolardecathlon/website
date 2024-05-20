export default {
  name: 'btnSection',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'btn',
      title: 'Button',
      type: 'btn',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
    },
  ],
}
