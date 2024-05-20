export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      validation: (rule: any) => rule.required(),
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'Footer',
      }
    },
  },
}
