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
  degree: 'Master of Business Administration',
  school: 'Stanford Graduate School of Business',
  start_date: '2016-09-01',
  end_date: '2018-06-15',
  description: 'Specialized in strategic management and entrepreneurship. Completed a thesis on scaling sustainable startups in emerging markets.',
};

const defaultWork = {
  position: 'Product Manager',
  company: 'NovaTech Solutions',
  start_date: '2019-01-10',
  end_date: '2022-11-30',
  description: 'Led cross-functional teams to launch SaaS products. Oversaw feature development, customer feedback integration, and roadmap planning.',
};


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
