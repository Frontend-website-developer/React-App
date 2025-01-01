
import '../App.css';
import AboutImage from '../images/about-us-image.png'





export default function About(){
  return(    
      <div className="container">
        <div className="flex py-11 items-center">
            <div className="w-1/2"> 
                <img className="" src={AboutImage} />
            </div>  
            <div className="w-1/2">
                <h2 className='font-semibold'>About <span className="text-blue-700">Us</span></h2>
                  
                <p>Vivamus ac tincidunt mi. Nullam sagittis mi ligula, vitae tincidunt augue rutrum a. Etiam imperdiet quis odio a varius. Donec a dolor orci. Nam non efficitur enim. Ut auctor mi id lacus vehicula feugiat. In convallis vulputate mauris, vitae tempus lacus eleifend in. Sed ultrices quam efficitur imperdiet condimentum. Nunc sit amet ultrices lacus.</p>

                <p>Cras condimentum nunc eget magna venenatis ultricies. Proin varius turpis libero, a gravida felis rhoncus id. Proin hendrerit accumsan mi non aliquam. Quisque eu lorem libero. Phasellus a nibh luctus, malesuada justo in, blandit nisl. Quisque commodo sit amet nunc id scelerisque. Proin ut tincidunt dolor, in dictum leo. Fusce facilisis lacus et tellus tristique, a ultricies lectus condimentum. Nam rhoncus, libero vitae commodo feugiat, sapien tellus malesuada diam, nec varius orci metus eu nisl. Quisque in lorem libero.</p>
            </div>                                                                
        </div>            
      </div>            
  )
}
