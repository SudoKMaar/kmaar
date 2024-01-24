"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { slideIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: any }) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        //@ts-ignore
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abhishek Kumar",
          from_email: form.email,
          to_email: "abhi2004shek.kumar@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Gratitude in Motion: I'll Connect With You Swiftly!!!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("OOPS, Glitch in the Code! Please Give it Another Shot");
        }
      );
  };

  return (
    <div className="w-screen h-full mx-auto z-10 contact-gradient">
      <div className="w-screen h-[50px]"></div>
      <div
        className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden mx-auto items-center justify-center w-full max-w-7xl`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black p-8 rounded-2xl glassmorphic"
        >
          <h4 className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
            Summon me anywhere
          </h4>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact Saga
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your Appellation"
                className="bg-[rgba(255,255,255,0.2)] py-4 px-6 placeholder:text-[#fff] text-white rounded-lg outline-none border-none font-medium gInput"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Digital Dispatch"
                className="bg-[rgba(255,255,255,0.2)] py-4 px-6 placeholder:text-[#fff] text-white rounded-lg outline-none border-none font-medium gInput"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Whisphere Me Words!!!"
                className="bg-[rgba(255,255,255,0.2)] py-4 px-6 placeholder:text-[#fff] text-white rounded-lg outline-none border-none font-medium gInput"
              />
            </label>
            <Button
              variant="primary"
              type="submit"
              className=" py-3 px-8 rounded-xl outline-none w-fit text-white font-bold link"
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </motion.div>
      </div>
      <div className="w-screen h-[50px]"></div>
    </div>
  );
};

export default ContactSection;
