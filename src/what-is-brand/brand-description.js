import './brand-description.css';
import lucaImage from '../images/luca-tablet-image.png';

function BrandDescription() {
  return (
      <div className="container mx-auto sm:px-5">
        <div className="banner-content md:flex items-center text-left mt-10 mb-10 gap-10">
            <div className="md:w-1/2">
                <img src={lucaImage} alt="banner" />
            </div> 
              <div className="md:w-1/2">
                  <h2 className="md:text-[50px] text-[#414041] font-light mb-5">What is <span className='text-blue-700 font-bold uppercase '>Brand Name</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <a href="#"><img className="mw-[100%]" src="images/add-to-chrome-button.png" alt="" /></a>
              </div>                           
        </div>
      </div>  
  );
}

export default BrandDescription;
