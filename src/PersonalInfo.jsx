import Input from "./Input.jsx"

function PersonalInfo() {
  return (
    <section className='personal-info'>
      <h2>Personal Information</h2>
      <Input id='name' label='Name:' type='text' />
      <Input id='email' label='Email:' type='email' />
      <Input id='contact' label='Contact Number:' type='tel' />
      <Input id='linkedin' label='LinkedIn:' type='text' />
      <Input id='website' label='Website:' type='text' />
      <button className='save'>Save</button>
    </section>
  )
}

export default PersonalInfo