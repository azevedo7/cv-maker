import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Data from './Data.jsx'
import Cv from './Cv.jsx'

function App() {
  const [data, setData] = useState({
    name: "Joao Azevedo",
    email: "jazevedo0406@gmail.com",
    phone: "913132432",
    education: [
      {
        id:"test",
        institution: 'Utad',
        title: 'Computer Science',
        graduation: '02, 2025',
        details: 'Grade 15'
      }
    ],
    experience: [
      {
        id:"test",
        company: "UniCompany",
        job: "CEO",
        duration: "July 2023 - now",
        details: "Very nice.",
      }
    ],
    skills: "Hello",
  })

  return (
    <div className='main'>
      <Data data={data} setData={setData}/>
      <Cv data={data}/>
    </div>
  )
}

export default App
