export default {
  name: 'team',
  title: 'Team',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'commitment',
      title: 'Time Commitment',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'additionalInfo',
      title: 'Additional Info',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
