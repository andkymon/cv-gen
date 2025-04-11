import './App.css'
import PersonalInfo from './PersonalInfo.jsx'
import Education from './Education.jsx'

function App() {
  return (
    <>
      <div className='left'>
        <h1>CVGen</h1>
        <PersonalInfo />
        <Education />
      </div>
      <div className='right'>HI</div>
    </>
  )
}

export default App
