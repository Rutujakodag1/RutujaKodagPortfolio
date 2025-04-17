import React, { useState } from "react";
import emailjs from 'emailjs-com';
const ContactMe = () => {
  const [statusMessage, setStatusMessage] = useState('');

  // Function to send email using emailjs
  function sendEmail(e) {
    e.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_uvz0vvk', 'template_tdpfhc9', e.target, '6grf2-XKC5Z5HunXZ')
      .then((result) => {
          // Display success message and reset the form
          setStatusMessage('Your message has been sent successfully!');
          e.target.reset();  // Reset the form fields after successful submission
      }, (error) => {
          // Display error message
          setStatusMessage('There was an error sending your message. Please try again later.');
          console.log(error.text); // Logs any errors to the console
      });
  }

  return (
    <section id="contact" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Get in Touch</h3>
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="html_message"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
              >
                Send Message
              </button>
            </form>

            {/* Display success or error message */}
            {statusMessage && (
              <div
                className={`mt-4 p-4 text-center rounded-md ${
                  statusMessage.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {statusMessage}
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Connect with Me</h3>
            <p className="text-gray-600 mb-4 text-center">
              Feel free to reach out to me on any of these platforms.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Rutujakodag1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 text-3xl"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rutuja-kodag-878251285/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-3xl"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:rutujakodag0@gmail.com"
                className="text-red-500 hover:text-red-700 text-3xl"
                title="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default ContactMe;
