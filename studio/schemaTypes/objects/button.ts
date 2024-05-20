export default {
  name: 'btn',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Text',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'href',
      title: 'Link',
      type: 'url',
      validation: (rule: any) => rule.required().uri({allowRelative: true}),
    },
  ],
}
