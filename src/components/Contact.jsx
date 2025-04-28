/**
    * @description      : 
    * @author           : Schadrack
    * @group            : 
    * @created          : 28/04/2025 - 17:01:57
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2025
    * - Author          : Schadrack
    * - Modification    : 
**/
// components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Mura Infinity Tech</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-lg">Address</h3>
              <p className="text-gray-700">
                Rwamagana District<br />
                Eastern Province<br />
                Rwanda
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Email</h3>
              <p className="text-gray-700">info@murainfinitytech.rw</p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Phone</h3>
              <p className="text-gray-700">+250 788 123 456</p>
            </div>
            
            <div>
              <h3 className="font-medium text-lg">Business Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;