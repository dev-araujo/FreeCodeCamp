import axios from "axios";
import { random } from "../utils/random";

const BASE_URL: string = "https://type.fit/api/quotes";

export const getData = (set: any) => {
  axios
    .get(BASE_URL, {
      headers: {
        "X-API-KEY": "__KEY__",
        "Access-Control-Allow-Origin": "true",
      },
    })
    .then((resp: any) => {
      set(resp.data);
    });
};

export const getPhrase = (set: any) => {
  axios
    .get(BASE_URL, {
      headers: {
        "X-API-KEY": "__KEY__",
        "Access-Control-Allow-Origin": "true",
      },
    })
    .then((resp: any) => {
      set(random(resp.data));
    });
};
