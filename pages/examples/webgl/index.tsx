import { GetStaticProps } from 'next';
import data from '@public/data.json';

export { default } from '@views/Example';

export const getStaticProps: GetStaticProps = async () => {
  const example = data
    .find((d) => d.title === 'examples')
    .examples.find((d) => d.name === 'webgl');

  return {
    props: example,
    revalidate: 60,
  };
};
