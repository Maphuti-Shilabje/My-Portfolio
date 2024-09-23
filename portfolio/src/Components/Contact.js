// a contact me page
// @author: Maphuti Shilabje
// email: fabridgeshilabje01@gmail.com

import React from 'react';



const Contact = () => (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl text-gray-300 mb-12">Get In Touch</h2>
        <p className="mb-8">
          I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, 
          feel free to reach out!
        </p>
        <a href="mailto:fabridgeshilabje01@gmail.com" className="inline-block bg-transparent text-teal-400 border border-teal-400 px-8 py-4 text-base no-underline transition-all duration-300 hover:bg-teal-400 hover:bg-opacity-10">Say Hello</a>
      </div>
    </section>
  );
  export default Contact;