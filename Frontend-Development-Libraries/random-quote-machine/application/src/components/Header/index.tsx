import "./styles.scss"

function Header({ page }: number | any) {
  return (
    <div className="header__page">
      <a href="" target="_blank" className="header__page__title">
        Quotes Project
      </a>
      <p className="header__page__paragraph">{page}</p>
      <a
        href="https://www.linkedin.com/in/araujocode/"
        target="_blank"
        className="header__page__profile"
      >
        Araujo
      </a>
    </div>
  );
}

export default Header;
