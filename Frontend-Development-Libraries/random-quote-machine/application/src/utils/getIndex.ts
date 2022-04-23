export const getIndex = (arr: any, info: any) => {
  let index: number = arr.findIndex(
    (i: any) => i.author === info.author && i.text === info.text
  );
  if (index === -1) {
    () => getIndex(arr, info);
  }

  return index + 1;
};
