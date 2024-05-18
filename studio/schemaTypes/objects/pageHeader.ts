export default {
  name: 'pageHeader',
  title: 'Page Header',
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
      title: 'Subheading',
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
