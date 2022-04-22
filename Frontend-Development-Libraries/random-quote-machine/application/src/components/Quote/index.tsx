import "./styles.scss";

function Quote({ phrase }: String | any) {
  return <p className="quote">{phrase}</p>;
}

export default Quote;
