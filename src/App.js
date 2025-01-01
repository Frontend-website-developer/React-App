
import './App.css';
import Home from './pages/home.js';
import Header from './header/header.js';
import Footer from './components/footer.js';
import {Routes, Route } from 'react-router-dom'
import About from './pages/about.js'
import Services from './pages/services.js'
import Contact from './pages/contact.js'




export default function App(){
  return(    
      <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} /> 
              <Route path="/contact" element={<Contact />} />                                                                   
          </Routes>
          <Footer />   
      </div>            
                
  )
}
