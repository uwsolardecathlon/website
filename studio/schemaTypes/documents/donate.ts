export default {
  name: 'donate',
  title: 'Donate',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'support', title: 'Support'},
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
      name: 'support',
      title: 'Support',
      type: 'imgBtnSection',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'support',
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
