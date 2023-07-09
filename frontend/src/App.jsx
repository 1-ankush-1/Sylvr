import { useState } from 'react';
import './App.css'
import Main from './Components/Main'
import Navbar from './Components/Navbar'

function App() {
  const [flag,setFlag] = useState(false);

  return (
    <>
       <Navbar flag={flag} setFlag={setFlag}/>
       <Main setFlag={setFlag}/>
       <footer></footer>
    </>
  )
}

export default App
