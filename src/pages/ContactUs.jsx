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
    <div className="flex flex-col items-center justify-center p-3 bg-gray-100 w-full">
      <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-auto max-w-md w-full">
        <div className="p-4 bg-red-500 text-white">
          <h1 className="text-xl font-bold">Contact Us</h1>
          <p className="text-sm">We'd love to hear from you! Please reach out using the form below or contact us directly at +1-(813)-499-9090.</p>
        </div>

        <div className="p-4 flex flex-col justify-center">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Send Us a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-3">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-700 font-medium">Full Name</label>
              <input
                id="name"
                type="text"
                name='from_name'
                className="border border-gray-300 bg-white rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-gray-700 font-medium">Email Address</label>
              <input
                id="email"
                type="email"
                name='email'
                className="border border-gray-300 bg-white rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm text-gray-700 font-medium">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name='number'
                className="border border-gray-300 bg-white rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Enter your number"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm text-gray-700 font-medium">Your Message</label>
              <textarea
                id="message"
                rows="3"
                name='message'
                className="border border-gray-300 bg-white rounded p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Write your message here"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-sm font-bold py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
