export default {
  name: 'imgBtnSection',
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
}
