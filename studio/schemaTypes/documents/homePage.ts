export default {
  name: 'homePage',
  title: 'Home',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'mission', title: 'Mission'},
    {name: 'team', title: 'Team'},
    {name: 'getInvolved', title: 'Get Involved'},
  ],
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'hero',
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
          type: 'text',
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'btnText',
          title: 'Button Text',
          type: 'string',
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'img',
          title: 'Image',
          type: 'image',
          validation: (rule: any) => rule.required(),
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'mission',
      title: 'Mission',
      type: 'object',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'mission',
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
          type: 'text',
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'btnText',
          title: 'Button Text',
          type: 'string',
          validation: (rule: any) => rule.required(),
        },
      ],
    },
    {
      name: 'team',
      title: 'Team',
      type: 'object',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'team',
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
        {
          name: 'img',
          title: 'Image',
          type: 'image',
          validation: (rule: any) => rule.required(),
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'getInvolved',
      title: 'Get Involved',
      type: 'object',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'getInvolved',
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
          type: 'text',
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'joinBtnText',
          title: 'Join Button Text',
          type: 'string',
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'donateBtnText',
          title: 'Donate Button Text',
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
        title: 'Home',
      }
    },
  },
}
