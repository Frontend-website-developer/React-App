import {Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import testimonialImage from '../images/testimonial-image.png'

function Testimonials() {
  return (
    <div className="container mx-auto mt-14 mb-14">
       <h2 className='text-center uppercase font-semibold text-blue-700'>Testimonials</h2>
      <Swiper
        modules = {[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        loop
        pagination = {{clickable: true}}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        Autoplay
      >
        <SwiperSlide>
            <div className='testimonial-item bg-[#f9fcff] p-10'>
                <img className="mb-5" src={testimonialImage} alt="" />
                <h4 className='text-[22px] font-[500] mb-5'>Abraham <br /> Smith</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonial-item bg-[#f9fcff] p-10'>
                <img className="mb-5" src={testimonialImage} alt="" />
                <h4 className='text-[22px] font-[500] mb-5'>Abraham <br /> Smith</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonial-item bg-[#f9fcff] p-10'>
                <img className="mb-5" src={testimonialImage} alt="" />
                <h4 className='text-[22px] font-[500] mb-5'>Abraham <br /> Smith</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonial-item bg-[#f9fcff] p-10'>
                <img className="mb-5" src={testimonialImage} alt="" />
                <h4 className='text-[22px] font-[500] mb-5'>Abraham <br /> Smith</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            </div>
        </SwiperSlide>
      </Swiper>

    </div>
  );
}

export default Testimonials;
