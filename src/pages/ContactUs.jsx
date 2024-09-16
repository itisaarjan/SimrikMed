import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_567gxwk', 'template_zkoe9pt', form.current, {
        publicKey: 'r_PVlFmC8nfnA09Zm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
          window.location.reload(); // This will refresh the page
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
        <div className="p-6 bg-red-500 text-white">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We'd love to hear from you! Please reach out using the form below or contact us directly.</p>
        </div>

        <div className="p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
              <input
                id="name"
                type="text"
                name='from_name'
                className="border border-gray-300 bg-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                name='email'
                className="border border-gray-300 bg-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name='number'
                className="border border-gray-300 bg-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your number"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700 font-medium">Your Message</label>
              <textarea
                id="message"
                rows="5"
                name='message'
                className="border border-gray-300 bg-white rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="p-6 bg-gray-50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-700 text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Our Contact Information</h3>
            <p>Email: simrikmed@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
