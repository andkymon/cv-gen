import Input from "./Input.jsx"
import { useState } from 'react'

function Work({ data, setData }) {
  const [showForm, setShowForm] = useState([true, 'Hide']);
  
  const toggleFormVisibility = () => {
    setShowForm(!showForm[0] ? [true, 'Hide'] : [false, 'Edit']);
  }

  return (
    <section>
      <div className='heading-wrapper'>
        <h2>Work Experience</h2>
        <button className='dropdown-button' onClick={toggleFormVisibility}>{showForm[1]}</button>
      </div>
      {showForm[0] && <WorkForm data={data} setData={setData}/>}
    </section>
  )
}

function WorkForm( { data, setData } ) {
  const [positionValue, setPositionValue] = useState(data.position);
  const [companyValue, setCompanyValue] = useState(data.company);
  const [startDateValue, setStartDateValue] = useState(data.start_date);
  const [endDateValue, setEndDateValue] = useState(data.end_date);
  const [descriptionValue, setDescriptionValue] = useState(data.description);

  const onSave = () => {
    setData(
      { 
        position: positionValue,
        company: companyValue,
        start_date: startDateValue,
        end_date: endDateValue,
        description: descriptionValue,
      }
    );
  }

  return(
    <>
      <Input label='Degree:' value={positionValue} setState={setPositionValue}/>
      <Input label='Company:' value={companyValue} setState={setCompanyValue}/>
      <div className='date-wrapper'>
        <Input label='Start Date:' type='date' value={startDateValue} setState={setStartDateValue}/>
        <Input label='End Date:' type='date' value={endDateValue} setState={setEndDateValue}/>
      </div>
      <Input label='Description:' isTextbox={true} value={descriptionValue} setState={setDescriptionValue}/>
      <div className='button-wrapper'>
        <button onClick={onSave}>Save</button>
      </div>
    </>
  )
}

export default Work