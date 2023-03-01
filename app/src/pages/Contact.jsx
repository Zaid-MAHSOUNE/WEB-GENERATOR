import Navbar from "../components/navbar/Navbar";
import '../assets/css/ContactPage.css';
import ContactForm from "../components/ContactPageComponent/ContactForm";
export default function Contact(){
    return (
        <div className="ctrn">
             <Navbar />
             <ContactForm/>
        </div>    
       
       
    )
}