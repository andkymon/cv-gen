import './Input.css'

function Input({ id, label, type='text', isTextbox=false}) {
  return (
    <div className="input">
      <label for={id}>{label}</label>
      {isTextbox ? <textarea></textarea> : <input id={id} type={type}></input>}
    </div>
  );
}

export default Input;