import "./styles.scss";

function Quote({ phrase}: string | any) {
  return <section className="quote">{phrase}</section>;
}

export default Quote;
