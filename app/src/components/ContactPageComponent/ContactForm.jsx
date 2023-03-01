import '../../assets/css/ContactPage.css';
import gmail from '../../assets/img/Gmail.png';
import {useForm } from "react-hook-form";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function ContactForm(){
    const [Result,ShowResult] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_rk81lmr', e.target, 'yRcyAqqha8F7eSnZg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        ShowResult(true);
        setTimeout(()=>{
            ShowResult(false);
        },5000)
    };
 
    return(
        <div className="CTN">
                <div className="prt1">
                    <img src={gmail} ></img>
                    {Result ? <p>Your message has been send</p> : null}
                </div>
                <div className="prt2">
                    <form autoComplete='off' action=''  onSubmit={sendEmail} >
                        <input placeholder='Full name' type='text' name='from_name' required  ></input><br></br>
                        <input placeholder='Gmail' type='gmail' name='gmail' required ></input><br></br>
                        <input placeholder='Subject' type='text' name='subject' required ></input><br></br>
                        <textarea placeholder='Message' name='message' required ></textarea><br></br>
                        <button type='submit'>Send</button>
                      
                     </form>
                </div>
                  
        </div>
          
    )
}