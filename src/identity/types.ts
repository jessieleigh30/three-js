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
