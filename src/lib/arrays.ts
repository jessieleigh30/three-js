import merge from 'lodash/merge';

export const objectify = (arr: any, mutator: any) => {
  return arr.reduce(
    (acc: any, value: number, index: number) => ({
      ...acc,
      ...mutator(value, index),
    }),
    {}
  );
};

export const mergeObjectify = (arr: any, mutator: any) => {
  return arr.reduce((acc: any, value: number, index: number) => {
    const result = mutator(value, index);
    return merge(acc, result);
  }, {});
};

export const buildRows = (arr: any, length: number) =>
  arr.reduce(
    (rows: any, val: number, i: any) =>
      (i % length === 0 ? rows.push([val]) : rows[rows.length - 1].push(val)) &&
      rows,
    []
  );

export const humanizeArray = (arr: any, joinWord = 'and') => {
  if (arr.length === 1) {
    return arr[0];
  }

  const newArr = [...arr];
  const last = newArr.pop();
  return `${newArr.join(', ')} ${joinWord} ${last}`;
};
