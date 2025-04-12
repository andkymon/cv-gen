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

  const nameOnChange = (e) => {
    setNameValue(e.target.value);
  }
  const emailOnChange = (e) => {
    setEmailValue(e.target.value);
  }
  const contactOnChange = (e) => {
    setContactValue(e.target.value);
  }
  const linkedinOnChange = (e) => {
    setLinkedinValue(e.target.value);
  }
  const websiteOnChange = (e) => {
    setWebsiteValue(e.target.value);
  }

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
      <Input label='Name:' value={nameValue} onChange={nameOnChange}/>
      <Input label='Email:' value={emailValue} onChange={emailOnChange}/>
      <Input label='Contact Number:' value={contactValue} onChange={contactOnChange} type='tel'/>
      <Input label='LinkedIn:' value={linkedinValue} onChange={linkedinOnChange}/>
      <Input label='Website:' value={websiteValue} onChange={websiteOnChange}/>
      <div className='button-wrapper'>
        <button onClick={onSave}>Save</button>
      </div>
    </>
  )
}


export default PersonalInfo