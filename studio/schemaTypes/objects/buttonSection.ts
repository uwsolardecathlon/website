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
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
  ],
}
