import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

import { slideIn } from "../utils/motion";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = DOMPurify.sanitize(value);

    setForm({ ...form, [name]: sanitizedValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: DOMPurify.sanitize(form.name),
          to_name: "Priyanshi Jain",
          from_email: DOMPurify.sanitize(form.email),
          to_email: "jainpriyanshi1206@gmail.com",
          message: DOMPurify.sanitize(form.message),
        },
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message. I will get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="xl:my-36 md:w-2/5 w-full bg-white xl:ml-36 lg:ml-16 md:ml-10 p-8 rounded-2xl shadow-lg"
      id="contact"
    >
      <p className={"sectionSubText"} style={{ color: "#FFD700" }}>Get in touch</p>
      <h3 className={"sectionHeadText"} style={{ color: "#1a1a1a" }}>Contact.</h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium mb-4">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="What is your good name?"
            className="bg-gray-50 py-4 px-6 placeholder:text-gray-400 rounded-lg outline-none border border-gray-100 font-medium text-gray-700 focus:border-yellow-400 transition-colors"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium mb-4">
            Your email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="What is your email address?"
            className="bg-gray-50 py-4 px-6 placeholder:text-gray-400 rounded-lg outline-none border border-gray-100 font-medium text-gray-700 focus:border-yellow-400 transition-colors"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium mb-4">
            Your Message
          </span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What do you want to say?"
            className="bg-gray-50 py-4 px-6 placeholder:text-gray-400 rounded-lg outline-none border border-gray-100 font-medium text-gray-700 focus:border-yellow-400 transition-colors"
          />
        </label>

        <button
          type="submit"
          style={{ background: "linear-gradient(135deg, #FFD700, #FFB300)" }}
          className="py-3 px-8 rounded-full outline-none w-fit text-white font-bold shadow-lg hover:shadow-yellow-200 hover:-translate-y-1 transition-all duration-300"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
