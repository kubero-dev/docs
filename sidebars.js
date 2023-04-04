/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Installation',
      items: ['Installation/2base'],
    },
    {type: 'autogenerated', dirName: 'Installation'}
  ]
  */

  tutorialSidebar: [
    'goals-and-concepts',
    'quickstart',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'Installation/prerequisites',
        'Installation/installation',
        'Installation/configuration',
        'Installation/authentication',
        'Installation/upgrade',
      ],
    },
    {
      type: 'category',
      label: 'User Manual',
      items: [
        'Usermanual/buildpacks',
        'Usermanual/deployment',
        'Usermanual/templates',
      ],
    },
    //'comparison',
    'screenshots',
    {
      type: 'category',
      label: 'Development',
      items: [
        'Development/setup',
      ],
    },
  ],
};

module.exports = sidebars;
