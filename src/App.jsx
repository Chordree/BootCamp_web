import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MoreContents from './components/MoreContents'
import NavBar from './components/NavBar'
function App() {

  return (
 <>
 <Router>
  <NavBar/>
  <Routes>
    <Route path='/' element={ <HomePage/>}/>
    <Route path='/more/:id' element={ <MoreContents/>}/>
  </Routes>
 </Router>
 

 </>
  )
}

export default App
