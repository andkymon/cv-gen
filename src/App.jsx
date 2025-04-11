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

function App() {
  const [personalInfo, setPersonalInfo] = useState({ ...defaultPersonalInfo });

  return (
    <>
      <div className='left'>
        <h1>CVGen</h1>
        <PersonalInfo onSave={setPersonalInfo}/>
        <Education />
        <Work />
      </div>
      <div className='right'>
        <Preview personalInfo={personalInfo}/>
      </div>
    </>
  )
}

export default App
