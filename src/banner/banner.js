import './banner.css';
import lucaImage from '../images/banner-image.png';

function Banner() {
  return (

      <div className="banner relative pt-10 md:pt-[100px] pb-10 md:pb-[100px]">
          <div className='container mx-auto'>

          </div>     
              <div className='lg:flex md:items-center justify-between gap-10 px-5 md:px-0'>
                  <div className='lg:w-1/2 text-white md:ml-11 mb-10'>
                     <div className='flex justify-end'>
                        <div>
                            <h2 className='text-white font-semibold text-3xl md:text-6xl mb-5'>What is Brand Name</h2>
                            <p>Donec lacus lorem, gravida id sem et, sodales dictum eros. Nullam vulputate magna vitae orci facilisis, quis bibendum enim tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sed iaculis purus. Sed pulvinar fermentum est at ultricies. Etiam volutpat dolor ut odio commodo, in consequat orci interdum. Duis nec lacinia justo. Curabitur id arcu lectus. Aenean tincidunt dapibus mattis. In hac habitasse platea dictumst. Donec varius nisi id rutrum euismod. Vivamus dolor lacus, cursus ac lorem sed, molestie iaculis velit. Duis pellentesque nec enim a porttitor.</p>
                            <a href="#" className='button inline-block rounded-3xl px-11 py-3 bg-white font-bold mt-5 text-blue-700 uppercase hover:bg-gray-300'>Download</a>
                        </div>  
                     </div>                      
                  </div>
                  <div className='md:text-center'>
                      <lucaImage />
                      <img className='max-w-[100%] md:inline' src={lucaImage} alt="" />
                  </div>
              </div>
             
      </div>
  );
}

export default Banner;
