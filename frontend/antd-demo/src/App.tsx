import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container'
import Footer from './components/Footer/Footer'
import Herosection from './components/Herosection/Herosection'
import Features from './components/Features/Features'
import CompanySide from './components/CompanySide/CompanySide'
import Homepage from './components/Homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginComponent from './components/Auth/LoginComponent'
import RegisterComponent from './components/Auth/RegisterComponent'
const App = () => {
  return (
  <>
   
    <BrowserRouter>
            
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
               <Route path="/login" element={<LoginComponent />} />
                 <Route path="/register" element={<RegisterComponent />} />
                <Route path="/explore" element={<CompanySide />} />

            </Routes>
            <Footer />
    </BrowserRouter>
  </>
  )
}


// import CompanySide from "./components/CompanySide/CompanySide"
// import Navbar from "./components/Navbar/Navbar"Z

export default App
