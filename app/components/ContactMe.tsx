import React, { useRef, useState } from "react";
import { motion, Transition, Variants } from "framer-motion";
import emailjs from "@emailjs/browser";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const slideIn = (
    direction: "left" | "right" | "up" | "down",
    type: string,
    delay: number,
    duration: number
  ): Transition => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type as any,
          delay: delay,
          duration: duration,
          ease: "easeInOut",
        },
      },
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
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
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1) as Variants}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl glassmorphic"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Summon me anywhere
        </p>
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

          <button
            type="submit"
            className="primaryButton py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactMe;
