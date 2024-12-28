import FooterImage from '../images/luca-logo.png'

function Footer() {
  return (
    <div className="footer pt-5 pb-5 bg-[#007eff]">    
        <div className='container mx-auto'>
          <img src={FooterImage} alt="" />
        </div>
    </div>
  );
}

export default Footer;
