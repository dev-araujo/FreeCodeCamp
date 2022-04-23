import { useState, useEffect } from "react";
import { getData } from "./../../services/api";
import { colors, random } from "../../utils/index";
import { Quote, Author, Button } from "../../components/index";
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
        <div className="container__footer">
          <Author color={random(colors)} byAuthor={data?.author} />
          <Button
            callFunction={() => getData(setData)}
            borderColor={random(colors)}
            title={"NEW"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
