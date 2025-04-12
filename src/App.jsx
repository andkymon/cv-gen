import './App.css'
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'
import Work from './Work.jsx'
import Preview from './Preview.jsx'
import { useState } from 'react'

const defaultPersonalInfo = {
  name: 'John Doe',
  email: 'johndoe@email.com',
  contact: '0987654321',
  linkedin: 'linkedin.com/john-doe-12345',
  website: 'johndoe.com',
}

const defaultEducation = {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Mapúa University',
    start_date: '2019-08-01',
    end_date: '2023-06-15',
    description: 'Focused on software development, data structures, and cybersecurity. Led several capstone projects involving machine learning and web development.',
}

function App() {
  const [personalInfo, setPersonalInfo] = useState({ ...defaultPersonalInfo });
  const [education, setEducation] = useState({ ...defaultEducation });

  return (
    <>
      <div className='left'>
        <h1>CVGen</h1>
        <PersonalInfo data={personalInfo} setData={setPersonalInfo}/>
        <Education data={education} setData={setEducation}/>
        <Work />
      </div>
      <div className='right'>
        <Preview personalInfo={personalInfo}/>
      </div>
    </>
  )
}

export default App
