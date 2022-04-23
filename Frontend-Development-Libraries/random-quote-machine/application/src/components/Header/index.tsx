import "./styles.scss"

function Header({ page }: number | any) {
  return (
    <div className="header__page">
      <a
        href="https://github.com/dev-araujo/FreeCodeCamp/tree/main/Frontend-Development-Libraries/random-quote-machine"
        target="_blank"
        className="header__page__title"
      >
        Quotes Project
      </a>
      <p className="header__page__position">{page}</p>
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
