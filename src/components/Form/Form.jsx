import React from 'react'
import "./Form.css"

const Form = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "622db7e1-4759-4c5a-a3ed-cdc8e87b941f");

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
  return (<>
       <div className="description">
            <div className="des1" fontColor="orange">
                <h1><center>Get in Touch</center></h1>
            </div>
        <div className="des2">
            <h2><center>Your Journey to growth starts here</center></h2>
        </div>
       </div>
    <div className="contact">
        <div className="contact-col">
            <h3>Send Us a Message! <img src="./msg.png"/></h3>
            <p>
                Feel free to reach out through contact form or find our contact information below. Your, feedback, questions, suggestions are important to usa as we strive to provide exceptional service to all the students.
            </p>
            <ul>
                <li><img src="./email.png" alt="" /> support@launched.org.in</li>
                <li><img src="./wp.png" alt="" /> Whatsapp: +917899084055</li>
                <li><img src="./contact.png" alt="" />Call: 08062177301</li>
            </ul>
        </div>
        <div className="contact-col">
            <form  onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Phone Number' required />
                <label>Write your Message Here</label>
                <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
                    <button type='Submit' className="button">Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    </div></>
  )
}
export default Form;