import './App.css'
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'
import Work from './Work.jsx'

function App() {
  return (
    <>
      <div className='left'>
        <h1>CVGen</h1>
        <PersonalInfo />
        <Education />
        <Work />
      </div>
      <div className='right'>HI</div>
    </>
  )
}

export default App
