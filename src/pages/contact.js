
import '../App.css';






export default function Contact(){
  return(    
      <div className="container mx-auto">
        <h1 className="font-semibold text-blue-700 text-center py-10">Get In Touch</h1>
        <p className="text-center mb-3">Phone: 000-000-000</p>
        <p className="text-center mb-3">Email Address: dummy@email.com</p>
        <p className="text-center">Address: Vivamus ac tincidunt mi. Nullam sagittis mi ligula, vitae tincidunt augue rutrum a</p>
        <form className="">
            <div className="md:flex gap-10 items-center pt-10 pb-5">
                <div className="md:w-1/2">
                    <input type="text" className="border-2 px-5 py-2 rounded w-full mb-5 bg-slate-100" placeholder='Your Name' />
                    <input type="email" className="border-2 px-5 py-2 rounded w-full mb-5 bg-slate-100" placeholder='Your Email' />      
                    <input type="tel" className="border-2 px-5 py-2 rounded w-full bg-slate-100" placeholder='Contact Number' />      
                </div>
                <div className="md:w-1/2">
                        <textarea className="border-2 px-5 py-2 rounded w-full m-5 h-[180px] bg-slate-100" placeholder="Your Message"></textarea>
                </div>                                                           
            </div>
            <div className="text-center">
                <input type="submit" value="Submit" className="bg-[#1d4ed8] text-white py-3 px-7 rounded mb-5 font-semibold" />        
            </div>    
        </form>       
      </div>            
  )
}
