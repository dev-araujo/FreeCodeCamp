import "./styles.scss";
function Author({color, byAuthor }: String | any) {
  return (
    <section className="card">
      <div className="card__letter" style={{ background: color }}>
        {byAuthor ? byAuthor[0] : "U"}
      </div>
      <div className="card__author">
        <p>{byAuthor ? byAuthor : "Unknown"}</p>
      </div>
    </section>
  );
}

export default Author;
