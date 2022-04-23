import "./styles.scss";

function Button({ callFunction, title, borderColor }: string | any) {
  return (
    <button
      className="btn"
      style={{ background: borderColor}}
      onClick={callFunction}
    >
      {title}
    </button>
  );
}

export default Button;
