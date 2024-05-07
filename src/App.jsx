import React from 'react'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Header from './Header/Header'

import Home from './Pages/Home'
import About from './Pages/About'
const App = () => {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
        </Routes>

    </Router>
)
}

export default App