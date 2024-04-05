import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Resend } from "resend";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const resend = new Resend("re_123456789");
  const resend = new Resend("re_NShF58qy_3MoaPjctwS7pL82mTZ8n8vwv");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    try {
      const response = await resend.emails.send({
        from: formData.email,
        to: ["abreham.tilahun2027@gmail.com"],
        subject: "New Contact Form Submission",
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      });
      console.log(response);
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };
  // const form = useRef();

  // const [done, setDone] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_6fnounw",
  //       "template_yar2a2g",
  //       form.current,
  //       "qLKi0ceZMRCKzvGlo"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //         form.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <div className=" h-screen w-full bg-[#272727] text-[#FFFFFF]">
      <div className="container mx-auto p-4 mt-12">
        <h1 className="text-3xl font-bold mb-8 text-[#3cefab]">Contact Me</h1>
        <motion.div
          className="bg-[#222222] p-8 rounded-lg"
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-[#3cefab] text-sm font-bold mb-2"
              >
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="bg-[#333333] border border-[#3cefab] rounded-md px-4 py-2 text-white w-full"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[#3cefab] text-sm font-bold mb-2"
              >
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="bg-[#333333] border border-[#3cefab] rounded-md px-4 py-2 text-white w-full"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-[#3cefab] text-sm font-bold mb-2"
              >
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                className="bg-[#333333] border border-[#3cefab] rounded-md px-4 py-2 text-white w-full h-32 resize-none"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className=" text-right">
              <button
                type="submit"
                className="bg-[#3cefab] text-black px-4 py-2 rounded-md hover:bg-[#4fd1c5] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
