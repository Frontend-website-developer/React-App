import logo from './logo.svg';
import './App.css';
import Header from './header/header.js';
import Banner from './banner/banner.js';
import BrandDescription from './what-is-brand/brand-description.js';
import BrandFeatures from './brand-features/brand-features.js';
import CustomizeBrand from './components/customize-section.js'
import Testimonials from './components/testimonials.js';
import Footer from './components/footer.js';




export default function App(){
  return(
    <div className="App">
      <Banner />
      <BrandDescription />
      <BrandFeatures />
      <CustomizeBrand />
      <Testimonials />
      <Footer />
    </div>      
  )
}
