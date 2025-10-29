import {Routes, Route} from 'react-router'
import {useState} from "react";
import HomePage from './pages/home/HomePage.jsx'
import SnowboardPage from './pages/snowboard/SnowboardPage.jsx'

import './App.css'

function App() {

  const [language, setLanguage] = useState('en');
  return (
    <Routes>
      <Route path="/" element={<HomePage language={language} setLanguage={setLanguage}/>}></Route>
      <Route path="/SnowboardInstructor" element={<SnowboardPage language={language} setLanguage={setLanguage}/>}></Route>
    </Routes>
  )
}

export default App
