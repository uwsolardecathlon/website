export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'id',
      title: 'ID',
      description: 'Teams will be ordered by ID in ascending order.',
      type: 'number',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Subteam', value: 'subteam'},
          {title: 'Related Group', value: 'relatedGroup'},
        ],
        layout: 'radio',
      },
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
