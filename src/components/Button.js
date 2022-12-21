import "./Button.css";

function Button({ onClick, text, styling, image }) {
  return image ? (
    <button className={styling} onClick={onClick}>
      <img src={image} alt="button" />
      {text}
    </button>
  ) : (
    <button className={styling} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
