import "./Button.css";

function Button({ onClick, text, styling }) {
  return (
    <button className={styling} onClick={onClick}>{text}</button>
  )
}

export default Button