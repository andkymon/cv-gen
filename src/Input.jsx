import './Input.css'

function Input({ id, label, type }) {
  return (
    <div className="input">
      <label for={id}>{label}</label>
      <input id={id} type={type}></input>
    </div>
  );
}

export default Input;