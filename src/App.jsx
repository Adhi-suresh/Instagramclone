import React from 'react'
import Sidebar from './sidebar'
import Feed from './feed'
import Suggestions from './suggestions'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='d-flex vh-100 vw-100'>
        <div className=''><Sidebar/></div>
        <div className=" "><Feed/></div>
        <div className=" "><Suggestions/></div>
        
        
    </div>
  )
}

export default App