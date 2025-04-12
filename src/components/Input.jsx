import '../styles/Input.css'

function Input({ label, value, setState, type='text', isTextbox=false}) {
  const onChange = (e) => {
    setState(e.target.value);
  }

  return (
    <div className="input">
      <label>
        {label}
        {isTextbox ? <textarea value={value} onChange={onChange}></textarea> : <input value={value} onChange={onChange} type={type}></input>}
      </label>
    </div>
  );
}

export default Input;