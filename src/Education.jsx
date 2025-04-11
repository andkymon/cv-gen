import Input from "./Input.jsx"

function Education() {
  return (
    <section>
      <h2>Education</h2>
      <Input id='degree' label='Degree:' />
      <Input id='school' label='School:' />
      <div className='date-wrapper'>
        <Input id='school-start' label='Start Date:' type='date' />
        <Input id='school-end' label='End Date:' type='date' />
      </div>
      <Input id='school-description' label='Description:' isTextbox={true} />
      <div className='button-wrapper'>
        <button>Add</button>
        <button>Save</button>
      </div>
    </section>
  )
}

export default Education