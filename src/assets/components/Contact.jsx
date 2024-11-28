import './Contact.css'
import Footer from './Footer';
function Contact (){
return(
    <div>
    <form className="contact-form bg-orange-950 bg-cover bg-center  p-14 rounded-lg shadow-md border">
        
        <h2>Contact Us</h2>
        <div>
        <label>First Name</label>
        <br />
        <input 
        type="text"
        name="name"
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-blue-500" 
        placeholder="First Name"
        required
        />
    </div>
    <div>
        <label>Last Name</label>
        <br />
        <input 
        type="text"
        name="name"
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-blue-500" 
        placeholder="Last Name"
        required
        />
    </div>
    <div>
        <label>Email</label>
        <br />
        <input 
        type="email"
        name="email"
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:border-blue-500" 
        placeholder="Email"
        required
        />
    </div>
    <div>
        <textarea rows={4} placeholder="Your Message" 
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none text-center mt-4"/>
    </div>
    <button>Submit</button>
    <Footer />
    </form>
    </div>
    
    
)
}
export default Contact;