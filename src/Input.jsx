import './Input.css'

function Input({ label, value, setState, type='text', isTextbox=false}) {
  const onChange = (e) => {
    setState(e.target.value);
  }

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