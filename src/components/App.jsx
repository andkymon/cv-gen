import '../styles/App.css'
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'
import Work from './Work.jsx'
import Preview from './Preview.jsx'
import { defaultPersonalInfo, defaultEducation, defaultWork } from '../data.js'
import { useState } from 'react'

function App() {
  const [personalInfo, setPersonalInfo] = useState(defaultPersonalInfo);
  const [education, setEducation] = useState(defaultEducation);
  const [work, setWork] = useState(defaultWork);

  return (
    <>
      <div className='left'>
        <h1>CVGen</h1>
        <PersonalInfo data={personalInfo} setData={setPersonalInfo}/>
        <Education data={education} setData={setEducation}/>
        <Work data={work} setData={setWork}/>
      </div>
      <div className='right'>
        <Preview personalInfo={personalInfo} education={education} work={work}/>
      </div>
    </>
  )
}

export default App
