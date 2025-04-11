import Input from "./Input.jsx"

function Work() {
  return (
    <section>
      <h2>Work Experience</h2>
      <Input id='position' label='Position:' />
      <Input id='company' label='Company:' />
      <Input id='work-start' label='Start Date:' type='date' />
      <Input id='work-end' label='End Date:' type='date' />
      <Input id='work-description' label='Description:' isTextbox={true} />
      <div className='button-wrapper'>
        <button>Add</button>
        <button>Save</button>
      </div>
    </section>
  )
}

export default Work