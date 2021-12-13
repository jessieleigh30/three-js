export interface LinkProps {
  title: string;
  url: string;
}

export interface CaseStudyProps {
  title: string;
  description: string;
  technologies: Array<string>;
  hosted: Array<string>;
  cms: Array<string>;
  otherLinks?: Array<LinkProps>;
}

export interface CaseStudyPageProps {
  title?: string;
  caseStudies: Array<CaseStudyProps>;
}

export interface SandboxProps {
  title: string;
  description: string;
  slug: string;
  user?: string;
  repo?: string;
  type: string;
  placeholder?: string;
}

export interface ExampleProps {
  name: string;
  description: string;
  sandboxes: Array<SandboxProps>;
}
