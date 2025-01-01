
import '../App.css';
import ServiceImage from '../images/service-image.jpg'





export default function Services(){
  return(    
      <div className="container mx-auto">
        <h1 className="font-semibold text-blue-700 text-center py-10">Services</h1>
        <div className="md:flex gap-10 items-center py-10">
            <div className="md:w-4/12 mb-10 md:mb-0"> 
                <img className="w-full" src={ServiceImage} />
            </div>  
            <div className="md:w-8/12">
                <h2 className='font-semibold'>First <span className="text-blue-700">Service</span></h2>
                  
                <p>Vivamus ac tincidunt mi. Nullam sagittis mi ligula, vitae tincidunt augue rutrum a. Etiam imperdiet quis odio a varius. Donec a dolor orci. Nam non efficitur enim. Ut auctor mi id lacus vehicula feugiat. In convallis vulputate mauris, vitae tempus lacus eleifend in. Sed ultrices quam efficitur imperdiet condimentum. Nunc sit amet ultrices lacus.</p>

                <p>Cras condimentum nunc eget magna venenatis ultricies. Proin varius turpis libero, a gravida felis rhoncus id. Proin hendrerit accumsan mi non aliquam. Quisque eu lorem libero. Phasellus a nibh luctus, malesuada justo in, blandit nisl. Quisque commodo sit amet nunc id scelerisque. Proin ut tincidunt dolor, in dictum leo. Fusce facilisis lacus et tellus tristique, a ultricies lectus condimentum. Nam rhoncus, libero vitae commodo feugiat, sapien tellus malesuada diam, nec varius orci metus eu nisl. Quisque in lorem libero.</p>
            </div>                                                                
        </div> 
        <hr />
        <div className="md:flex gap-10 items-center py-10">
        <div className="md:w-8/12 mb-10 md:mb-0">
                <h2 className='font-semibold'>Second <span className="text-blue-700">Service</span></h2>
                  
                <p>Vivamus ac tincidunt mi. Nullam sagittis mi ligula, vitae tincidunt augue rutrum a. Etiam imperdiet quis odio a varius. Donec a dolor orci. Nam non efficitur enim. Ut auctor mi id lacus vehicula feugiat. In convallis vulputate mauris, vitae tempus lacus eleifend in. Sed ultrices quam efficitur imperdiet condimentum. Nunc sit amet ultrices lacus.</p>

                <p>Cras condimentum nunc eget magna venenatis ultricies. Proin varius turpis libero, a gravida felis rhoncus id. Proin hendrerit accumsan mi non aliquam. Quisque eu lorem libero. Phasellus a nibh luctus, malesuada justo in, blandit nisl. Quisque commodo sit amet nunc id scelerisque. Proin ut tincidunt dolor, in dictum leo. Fusce facilisis lacus et tellus tristique, a ultricies lectus condimentum. Nam rhoncus, libero vitae commodo feugiat, sapien tellus malesuada diam, nec varius orci metus eu nisl. Quisque in lorem libero.</p>
            </div>      
            <div className="md:w-4/12"> 
                <img className="w-full" src={ServiceImage} />
            </div>  
                                                                      
        </div>   
        <hr />
        <div className="md:flex gap-10 items-center py-10">
            <div className="md:w-4/12 mb-10 md:mb-0"> 
                <img className="w-full" src={ServiceImage} />
            </div>  
            <div className="md:w-8/12">
                <h2 className='font-semibold'>Third <span className="text-blue-700">Service</span></h2>
                  
                <p>Vivamus ac tincidunt mi. Nullam sagittis mi ligula, vitae tincidunt augue rutrum a. Etiam imperdiet quis odio a varius. Donec a dolor orci. Nam non efficitur enim. Ut auctor mi id lacus vehicula feugiat. In convallis vulputate mauris, vitae tempus lacus eleifend in. Sed ultrices quam efficitur imperdiet condimentum. Nunc sit amet ultrices lacus.</p>

                <p>Cras condimentum nunc eget magna venenatis ultricies. Proin varius turpis libero, a gravida felis rhoncus id. Proin hendrerit accumsan mi non aliquam. Quisque eu lorem libero. Phasellus a nibh luctus, malesuada justo in, blandit nisl. Quisque commodo sit amet nunc id scelerisque. Proin ut tincidunt dolor, in dictum leo. Fusce facilisis lacus et tellus tristique, a ultricies lectus condimentum. Nam rhoncus, libero vitae commodo feugiat, sapien tellus malesuada diam, nec varius orci metus eu nisl. Quisque in lorem libero.</p>
            </div>                                                                
        </div>
        <hr /> 
        <div className="md:flex gap-10 items-center py-10">
        <div className="md:w-8/12 mb-10 md:mb-0">
                <h2 className='font-semibold'>Fourth <span className="text-blue-700">Service</span></h2>
                  
                <p>Vivamus ac tincidunt mi. Nullam sagittis mi ligula, vitae tincidunt augue rutrum a. Etiam imperdiet quis odio a varius. Donec a dolor orci. Nam non efficitur enim. Ut auctor mi id lacus vehicula feugiat. In convallis vulputate mauris, vitae tempus lacus eleifend in. Sed ultrices quam efficitur imperdiet condimentum. Nunc sit amet ultrices lacus.</p>

                <p>Cras condimentum nunc eget magna venenatis ultricies. Proin varius turpis libero, a gravida felis rhoncus id. Proin hendrerit accumsan mi non aliquam. Quisque eu lorem libero. Phasellus a nibh luctus, malesuada justo in, blandit nisl. Quisque commodo sit amet nunc id scelerisque. Proin ut tincidunt dolor, in dictum leo. Fusce facilisis lacus et tellus tristique, a ultricies lectus condimentum. Nam rhoncus, libero vitae commodo feugiat, sapien tellus malesuada diam, nec varius orci metus eu nisl. Quisque in lorem libero.</p>
            </div>      
            <div className="md:w-4/12"> 
                <img className="w-full" src={ServiceImage} />
            </div>  
                                                                      
        </div>    
               
      </div>            
  )
}
