import './Input.css'

function Input({ label, value, onChange, type='text', isTextbox=false}) {
  return (
    <div className="input">
      <label>
        {label}
        {isTextbox ? <textarea></textarea> : <input value={value} onChange={onChange} type={type}></input>}
      </label>
    </div>
  );
}

export default Input;