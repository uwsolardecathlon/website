export default {
  name: 'about',
  title: 'About',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'section1', title: 'Section 1'},
    {name: 'section2', title: 'Section 2'},
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
      name: 'section1',
      title: 'Section 1',
      type: 'imgSection',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'section1',
    },
    {
      name: 'section2',
      title: 'Section 2',
      type: 'imgSection',
      validation: (rule: any) => rule.required(),
      options: {collapsible: true},
      group: 'section2',
    },
  ],
  preview: {
    // Hardcode document name
    prepare() {
      return {
        title: 'About',
      }
    },
  },
}
