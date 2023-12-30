import React from 'react'
import HomePage from './components/HomePage'
import Items from './components/Items'
import { Search } from './components/Search'
import { HashRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/item' element={<Items />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </HashRouter>

    </div>
  )
}

export default App