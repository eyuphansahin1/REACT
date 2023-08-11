import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/Home'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PageContainer from './containers/PageContainer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from './pages/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PageContainer>
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
        </Routes>
      </Router>
      </PageContainer>
    </div>
  )
}

export default App
