export type Template = {
  name: string;
  description: JSX.Element;
  icon: string;
  stars: number;
  website: string;
};

// Load the templates from the index.json file
const json =  require('./index.json');

export const TemplatesList: Template[] = json.services;
