import logo from './logo.svg';
import './App.css';
import Header from './header/header.js';
import Banner from './banner/banner.js';
import LucaDescription from './what-is-brand/brand-description.js';
import LucaFeatures from './brand-features/brand-features.js';
import CustomizeLuca from './components/customize-section.js'
import Testimonials from './components/testimonials.js';
import Footer from './components/footer.js';




export default function App(){
  return(
    <div className="App">
      <Banner />
      <LucaDescription />
      <LucaFeatures />
      <CustomizeLuca />
      <Testimonials />
      <Footer />
    </div>      
  )
}
