import * as React from 'react';
import { get } from 'lodash';

/**
 * Creates a component that renders one of several components depending
 * on the props passed in
 * @param components {object} - An object mapping the Contentful contentTypeId to
 * components. (e.g. {
 *    businessGrid: HomeBusinessGrid,
 *    carousel: Carousel,
 * })
 * @returns {Component} - Must include sys.contentTypeId from contentful
 */
export default function createDynamicComponent(
  components: Record<string, React.ComponentType<any>>
) {
  return (props: { typename: string; [key: string]: any }) => {
    const Component = components[get(props, 'typename')] || null;
    if (Component) {
      return <Component {...props} />;
    }

    return null;
  };
}

export const createDynamicRows =
  (components: Record<string, React.ComponentType<any>>) =>
  ({ row, ...rest }: { [key: string]: any }) => {
    const Component = components[`${row.length}`] || null;

    if (Component) {
      return <Component row={row} {...rest} />;
    }

    return null;
  };

export const createDynamicInput =
  (components: Record<string, React.ComponentType<any>>) =>
  ({ type, ...rest }: { type: string; [key: string]: any }) => {
    const Component = components[type] || null;

    if (Component) {
      return <Component {...rest} />;
    }

    return null;
  };
