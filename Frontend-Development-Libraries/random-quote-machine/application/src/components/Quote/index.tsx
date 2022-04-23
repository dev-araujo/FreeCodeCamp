import "./styles.scss";

function Quote({ phrase, page }: string | number | any) {
  return (
    <section className="quote">
      <div className="quote__page">
        <p className="quote__page__title">Quotes project</p>
        <p className="quote__page__paragraph">{page}</p>
        <p className="quote__page__profile">Araujo</p>
      </div>
      {phrase}
    </section>
  );
}

export default Quote;
