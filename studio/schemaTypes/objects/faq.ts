export default {
  name: 'faq',
  title: 'FAQ',
  type: 'object',
  fields: [
    {
      name: 'id',
      title: 'ID',
      description: 'Questions will be ordered by ID in ascending order.',
      type: 'number',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (rule: any) => rule.required(),
    },
  ],
}
