import { useState, useEffect } from "react";
import { getData } from "./../../services/api";

function Home() {
  const [data, setData] = useState<Quote[] | any>([]);

  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <div>
      <p>{data.text}</p>
      <p>{data.author}</p>
      <button onClick={() => getData(setData)}>change</button>
    </div>
  );
}

export default Home;
