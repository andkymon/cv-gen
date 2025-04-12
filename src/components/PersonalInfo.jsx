import Input from "./Input.jsx"
import { useState } from 'react'

function PersonalInfo({ data, setData }) {
  const [showForm, setShowForm] = useState([true, 'Hide']);

  const toggleFormVisibility = () => {
    setShowForm(!showForm[0] ? [true, 'Hide'] : [false, 'Edit']);
  }

  return (
    <section>
      <div className='heading-wrapper'>
        <h2>Personal Information</h2>
        <button className='dropdown-button' onClick={toggleFormVisibility}>{showForm[1]}</button>
      </div>
      {showForm[0] && <PersonalInfoForm data={data} setData={setData}/>}
    </section>
  )
}

function PersonalInfoForm( { data, setData } ) {
  const [nameValue, setNameValue] = useState(data.name);
  const [emailValue, setEmailValue] = useState(data.email);
  const [contactValue, setContactValue] = useState(data.contact);
  const [linkedinValue, setLinkedinValue] = useState(data.linkedin);
  const [websiteValue, setWebsiteValue] = useState(data.website);

  const onSave = () => {
    setData(
      { ...data, 
        name: nameValue,
        email: emailValue,
        contact: contactValue,
        linkedin: linkedinValue,
        website: websiteValue,
      }
    );
  }

  return (
    <>
      <Input label='Name:' value={nameValue} setState={setNameValue}/>
      <Input label='Email:' value={emailValue} setState={setEmailValue}/>
      <Input label='Contact Number:' value={contactValue} setState={setContactValue} type='tel'/>
      <Input label='LinkedIn:' value={linkedinValue} setState={setLinkedinValue}/>
      <Input label='Website:' value={websiteValue} setState={setWebsiteValue}/>
      <div className='button-wrapper'>
        <button onClick={onSave}>Save</button>
      </div>
    </>
  )
}

export default PersonalInfo