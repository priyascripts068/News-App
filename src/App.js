import './App.css';

import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App =()=> {
    return (
      <div>
        <Router>
        <Navbar/>
       <Routes>
        <Route  exact path="/" element={ <News country="us" pageSize={9} category="General"/>}/>
        <Route  exact path="/business" element={ <News country="us" pageSize={9} category="Business"/>}/>
        <Route  exact path="/entertainment" element={ <News country="us" pageSize={9} category="Entertainment"/>}/>
        <Route  exact path="/general" element={ <News country="us" pageSize={9} category="General"/>}/>
        <Route  exact path="/health" element={ <News country="us" pageSize={9} category="Health"/>}/>
        <Route  exact path="/science" element={ <News country="us" pageSize={9} category="Science"/>}/>
        <Route  exact path="/sports" element={ <News country="us" pageSize={9} category="Sports"/>}/>
        <Route  exact path="/technology" element={ <News country="us" pageSize={9} category="Technology"/>}/>
       </Routes>
        </Router>
      </div>
    )
}

export default App
