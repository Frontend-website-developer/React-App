import CustomizeImage from '../images/customize.jpg';

function CustomizeLuca() {
  return (
      <div className="container mx-auto mt-10 mb-10">
        <div className="md:flex items-center text-left mt-10 mb-10 justify-between gap-x-4">            
              <div className="md:w-1/2 font-light text-[#414041]">
                  <h2 className="md:text-[50px] font-semibold mb-5">Customize<br /> your <span className='text-blue-700 font-bold'>Brand Name</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <a href="#"><img src="images/add-to-chrome-button.png" alt="" /></a>
              </div>                           
              <div className="w-1/2">
                <img src={CustomizeImage} alt="Customize-Luca" />
            </div> 
        </div>
      </div>  
  );
}

export default CustomizeLuca;
