import { useState, useEffect } from "react";
import { getData } from "./../../services/api";
import { colors, random } from "../../utils/index";
import { Quote, PhraseAuthor } from "../../components/index";
import "./styles.scss";

function Home({ select }: string | any) {
  const [data, setData] = useState<Quote[] | any>([]);

  useEffect(() => {
    getData(setData);
  }, []);

  return (
    <div className="container" style={{ background: random(colors) }}>
      <div className="container__content">
        <Quote phrase={data?.text} />
        <PhraseAuthor color={random(colors)} byAuthor={data?.author} />
        <button onClick={() => getData(setData)}>change</button>
      </div>
    </div>
  );
}

export default Home;
