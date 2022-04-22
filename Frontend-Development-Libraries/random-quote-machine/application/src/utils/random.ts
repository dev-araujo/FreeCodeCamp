export const random = (arr: any) => {
  let randomNumber = Math.floor(Math.random() * arr.length);

  return arr[randomNumber];
};
