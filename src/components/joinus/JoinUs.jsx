import React from 'react'
import { useRef } from 'react'
import './JoinUs.css'
import emailjs from '@emailjs/browser'
const JoinUs = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_bhv10p8', 'template_0lecj2z', form.current, 'HrPcIBigeVYD9u04l')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };



  return (
   <div className="join" id="join-us">
        <div className="left-j">
        <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" id="" placeholder='Enter your Email Address'/>
             <button className='btn btn-j'> Join Now</button>
            
            </form>
        </div>
   </div>
  )
}

export default JoinUs
