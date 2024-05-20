export default {
  name: 'home',
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
          type: 'string',
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'btn',
          title: 'Button',
          type: 'btn',
          validation: (rule: any) => rule.required(),
          options: {collapsible: true},
        },
        {
          name: 'img',
          title: 'Image',
          type: 'image',
          validation: (rule: any) => rule.required(),
          options: {hotspot: true},
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
          type: 'string',
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
    },
    {
      name: 'team',
      title: 'Team',
      type: 'imgBtnSection',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'team',
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
          type: 'string',
          validation: (rule: any) => rule.required(),
        },
        {
          name: 'joinBtn',
          title: 'Join Button',
          type: 'btn',
          validation: (rule: any) => rule.required(),
          options: {collapsible: true},
        },
        {
          name: 'donateBtn',
          title: 'Donate Button',
          type: 'btn',
          validation: (rule: any) => rule.required(),
          options: {collapsible: true},
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
