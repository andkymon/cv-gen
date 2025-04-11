import Input from "./Input.jsx"

function PersonalInfo() {
  return (
    <section>
      <h2>Personal Information</h2>
      <Input id='name' label='Name:'/>
      <Input id='email' label='Email:' type='email'/>
      <Input id='contact' label='Contact Number:' type='tel'/>
      <Input id='linkedin' label='LinkedIn:'/>
      <Input id='website' label='Website:'/>
      <div className='button-wrapper'>
        <button>Save</button>
      </div>
    </section>
  )
}

export default PersonalInfo