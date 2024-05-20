export default {
  name: 'join',
  title: 'Join',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'apply', title: 'Apply'},
    {name: 'faq', title: 'FAQ'},
  ],
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'pageHeader',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'header',
    },
    {
      name: 'apply',
      title: 'Apply',
      type: 'btnSection',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'apply',
    },
    {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [{type: 'faq'}],
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'faq',
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'Join',
      }
    },
  },
}
