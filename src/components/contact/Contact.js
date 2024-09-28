import React from 'react'
import"./Contact.css"
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import ph_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'

const Contact = () => {

        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "d20dfbdd-8071-4138-a0f3-0080518ea0b0");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
      

    return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send a message <img src={msg_icon}/></h3>
            <p>
            Our cutting-edge curriculam skills , and experiences needed to excel in the dynamic fiels to educationOur cutting-edge curriculam is designed to empower students with the knowledge , skills
            </p>
            <ul>
                <li> <img src={mail_icon}/>contact@greet.com </li>
                <li> <img src={ph_icon}/>+91 9132658741 </li>
                <li><img src={location_icon}/>77 massachusetts ave , Cambrudge <br/> MA 02189, United states</li>
            </ul>
        
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type='text' name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type='number' name='phone' placeholder='Enter your mobile number' required/>
                    <label>Write Your Message Here</label>
                    <textarea name='message' rows="6"  placeholder='Enter your message' required ></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now<img src={whitearrow}/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact