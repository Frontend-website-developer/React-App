import FooterImage from '../images/logo.png'

function Footer() {
  return (
    <div className="footer pt-5 pb-5 bg-[#007eff]">    
        <div className='container mx-auto'>
          <img className='white-logo' src={FooterImage} alt="" />
        </div>
    </div>
  );
}

export default Footer;
