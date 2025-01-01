
import '../App.css';
import Banner from '../banner/banner.js';
import BrandDescription from '../what-is-brand/brand-description.js';
import BrandFeatures from '../brand-features/brand-features.js';
import CustomizeBrand from '../components/customize-section.js'
import Testimonials from '../components/testimonials.js';





export default function Home(){
  return(    
      <div className="App">
              <Banner />
              <BrandDescription />
              <BrandFeatures />
              <CustomizeBrand />
              <Testimonials />                                                                 
      </div>            
                
  )
}
