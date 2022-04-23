import { useState, useEffect } from "react";
import { getData, getPhrase } from "./../../services/api";
import { colors, random, getIndex } from "../../utils/index";
import { Quote, Author, Button } from "../../components/index";
import "./styles.scss";

function Home() {
  const [quoteData, setQuoteData] = useState<Quote[] | any>([]);
  const [data, setData] = useState<Quote[] | any>([]);

  useEffect(() => {
    getPhrase(setQuoteData);
    getData(setData);
  }, []);

  return (
    <div className="container" style={{ background: random(colors) }}>
      <div className="container__content">
        <Quote phrase={quoteData?.text} page={getIndex(data,quoteData)}/>
        <div className="container__footer">
          <Author color={random(colors)} byAuthor={quoteData?.author} />
          <Button
            callFunction={() => getPhrase(setQuoteData)}
            borderColor={random(colors)}
            title={"NEW"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
