import { GetStaticPaths, GetStaticProps } from 'next';
import data from '@public/data.json';

export { default } from '@views/Example';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = data
    .find((d) => d.title === 'examples')
    .examples.map((ex) => ({ params: { name: ex.name } }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const name = ctx?.params?.['name'];
  const example = data
    .find((d) => d.title === 'examples')
    .examples.find((d) => d.name === name);

  return {
    props: example,
    revalidate: 60,
  };
};