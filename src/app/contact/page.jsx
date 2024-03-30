"use client"

import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const ContactPage = () => {
  const text = "Say Hello";

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false)
    setError(false)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset()
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px48'>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >
                {letter}
              </motion.span>
            ))}
            {" "}😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'
        >
          <span>Dear John,</span>
          <textarea
            rows={6}
            placeholder='Your Message'
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
            name='user_message'
            required
          />
          <span>My email address is:</span>
          <input
            type="text"
            placeholder='Your Email Address'
            className='bg-transparent border-b-2 border-b-black outline-none'
            name='user_email'
            required
          />
          <span>Regards</span>
          <input
            type="text"
            placeholder='Your Name'
            className='bg-transparent border-b-2 border-b-black outline-none w-48'
            name='user_name'
            required
          />
          <button type="submit" className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>Submit</button>
          {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
          {error && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage;