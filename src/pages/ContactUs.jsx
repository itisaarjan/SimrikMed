import React from 'react';
import { useState } from 'react';



function ContactUs() {
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [number,setNumber]=useState(0);
    const [message,setMessage]=useState("");

    const sendEmail=()=>{
    Email.send({
    Host : "smtp.gmail.com",
    Username : "arjansubedi2021@gmail.com",
    Password : "password",
    To : 'simrikmed@gmail.com',
    From : {email},
    Subject : "Contact form submission",
    Body : json.parse({"Name":{name},
                        "Number":{number},
                        "message":{message},
    })
}).then(
  message => alert(message)
);

}


  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
        <div className="p-6 bg-red-500 text-white">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We'd love to hear from you! Please reach out using the form below or contact us directly.</p>
        </div>

        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
              <input
                id="name"
                type="text"
                onChange={(event)=>{
                    setName(event.target.value);
                }}
                className="border border-gray-300 bg-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                onChange={(event)=>{
                    setEmail(event.target.value);
                }}
                className="border border-gray-300 bg-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">Phone Number</label>
              <input
                id="email"
                type="tel"
                onChange={(event)=>{
                    setNumber(event.target.value);
                }}
                className="border border-gray-300 bg-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your number"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium">Your Message</label>
              <textarea
                id="message"
                rows="5"
                onChange={(event)=>{
                    setMessage(event.target.value);
                }}
                className="border border-gray-300 bg-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
              />
            </div>

            <button
              type="submit"
              onSubmit={()=>{
                sendEmail();
              }}
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="p-6 bg-gray-50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Our Contact Information</h3>
            {/* <p>Phone: (+1) 717-343-9078</p> */}
            <p>Email: simrikmed@gmail.com</p>
            {/* <p>Address: 123 Health St., Wellness City</p> */}
          </div>

          {/* <div className="w-full md:w-1/2">
            <iframe
              title="clinic-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509427!2d144.95373531550032!3d-37.817209742578516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f03b7e23%3A0xf0b10eb212d1f1!2s123%20Health%20St%2C%20Wellness%20City!5e0!3m2!1sen!2s!4v1634595234561!5m2!1sen!2s"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="border border-gray-300 rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
