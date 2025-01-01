
import '../App.css';






export default function Contact(){
  return(    
      <div className="container mx-auto">
        <h1 className="font-semibold text-blue-700 text-center py-10">Get In Touch</h1>
        <p className="text-center mb-3">Phone: 000-000-000</p>
        <p className="text-center mb-3">Email Address: dummy@email.com</p>
        <p className="text-center">Address: Vivamus ac tincidunt mi. Nullam sagittis mi ligula, vitae tincidunt augue rutrum a</p>
        <div className="md:flex gap-10 items-center py-10">
            <div className="md:w-1/2">
                <input type="text" className="border-2 px-5 py-2 rounded w-full mb-5 bg-slate-100" placeholder='Your Name' />
                <input type="email" className="border-2 px-5 py-2 rounded w-full mb-5 bg-slate-100" placeholder='Your Email' />      
                <input type="tel" className="border-2 px-5 py-2 rounded w-full bg-slate-100" placeholder='Contact Number' />      
            </div>
            <div className="md:w-1/2">
                <form className="">
                    <div className="flex gap-10">
                                          
                    </div>
                    <textarea className="border-2 px-5 py-2 rounded w-full my-5 h-[180px] bg-slate-100" placeholder="Your Message"></textarea>
                </form>
            </div>                                                           
        </div>         
               
      </div>            
  )
}
