export default {
  name: 'donatePage',
  title: 'Donate',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'section', title: 'Section'},
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
      name: 'section',
      title: 'Section',
      type: 'imgBtnSection',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'section',
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'Donate',
      }
    },
  },
}
