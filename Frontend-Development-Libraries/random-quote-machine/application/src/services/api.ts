import axios from "axios";

const BASE_URL: string = "https://type.fit/api/quotes";

const randomQuote = (arr: []) => {
  let randomNumber = Math.floor(Math.random() * arr.length);

  return arr[randomNumber];
};

export const getData = (set: any) => {
  axios
    .get(BASE_URL, {
      headers: {
        "X-API-KEY": "__KEY__",
        "Access-Control-Allow-Origin": "true",
      },
    })
    .then((resp: any) => {
      set(randomQuote(resp.data));
    });
};
