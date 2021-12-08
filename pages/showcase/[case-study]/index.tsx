import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import CaseStudy from '@views/CaseStudy';
import { CaseStudyProps } from '@identity/types';
import data from '@public/data.json';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = [
    { params: { 'case-study': 'agency-metrics' } },
    { params: { 'case-study': 'gamerbot' } },
    { params: { 'case-study': 'wiki' } },
  ];

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const title = ctx?.params?.['case-study'];
  const pageData: any = data.find((d) => d.title === title);

  return {
    props: { ...pageData },
    revalidate: 60,
  };
};

const CaseStudyPage = (props: CaseStudyProps) => {
  return <CaseStudy {...props} />;
};

export default CaseStudyPage;
