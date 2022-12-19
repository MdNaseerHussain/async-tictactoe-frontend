function Input({ name, placeholder, type, value, onChange}) {
  return (
    <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
  )
}

export default Input