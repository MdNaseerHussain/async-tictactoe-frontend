import "./Input.css";

function Input({ name, placeholder, type, value, onChange, label }) {
  return (
    <>
      <label htmlFor={name} className="label" >{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </>
  );
}

export default Input;
