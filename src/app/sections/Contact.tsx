
"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Check } from "lucide-react";

// Types
type FormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type Highlight = string;

// Highlights
const highlights: Highlight[] = [
  "Manage invoices and quotations",
  "Track office expenses",
  "Organize weekly billing",
  "Monitor business finances",
];

// Empty form
const emptyForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

// Left content animation
const leftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Individual highlight animation
const highlightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Form card animation
const formVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const fieldContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fieldVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const successVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log("Enquiry Details:", formData);

    setSubmitted(true);
    setFormData({ ...emptyForm });
  };

  const inputClass =
    "w-full border border-[#DCEAE6] rounded-lg px-4 py-3 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#267C70] focus:border-transparent focus:shadow-md focus:shadow-[#267C70]/10";

  return (
    <section
      id="contact"
      className="bg-[#DDF0ED] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#267C70] mb-4">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-[#102B28] leading-tight mb-6">
            Ready to Simplify
            <br />
            Your Finance Management?
          </h2>

          <p className="text-lg text-[#526964] leading-relaxed mb-8">
            Interested in ADM One Finance? Share your details
            and our team can help you explore the platform
            and its features.
          </p>

          {/* Highlights */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 text-[#334D47]"
          >
            {highlights.map((text) => (
              <motion.div
                key={text}
                variants={highlightVariants}
                className="flex items-center gap-3"
              >
                <motion.span
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="w-6 h-6 shrink-0 rounded-full bg-[#267C70] text-white flex items-center justify-center"
                >
                  <Check size={14} strokeWidth={3} />
                </motion.span>

                <p>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enquiry Form */}
        <motion.div
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="bg-white rounded-2xl shadow-lg p-7 md:p-10"
        >
          {submitted ? (
            <motion.div
              variants={successVariants}
              initial="hidden"
              animate="visible"
              className="text-center py-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                }}
                className="w-16 h-16 mx-auto rounded-full bg-[#DDF0ED] text-[#267C70] flex items-center justify-center"
              >
                <Check size={30} strokeWidth={2.5} />
              </motion.div>

              <h3 className="mt-6 text-2xl font-semibold text-[#102B28]">
                Thank you!
              </h3>

              <p className="mt-3 text-[#526964] leading-7">
                Your enquiry has been submitted. Our team will get
                back to you soon.
              </p>

              <motion.button
                type="button"
                onClick={() => setSubmitted(false)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 text-sm font-semibold text-[#267C70] hover:text-[#102F2A] transition-colors"
              >
                Send another enquiry
              </motion.button>
            </motion.div>
          ) : (
            <>
              <h3 className="text-2xl font-semibold text-[#102B28] mb-2">
                Request a Demo
              </h3>

              <p className="text-sm text-[#71847E] mb-7">
                Fill in your details and tell us how we can help.
              </p>

              <motion.form
                onSubmit={handleSubmit}
                variants={fieldContainerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-5"
              >
                {/* Full Name */}
                <motion.div variants={fieldVariants}>
                  <label className="block text-sm font-medium text-[#334D47] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className={inputClass}
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={fieldVariants}>
                  <label className="block text-sm font-medium text-[#334D47] mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your work email"
                    required
                    className={inputClass}
                  />
                </motion.div>

                {/* Phone and Company */}
                <motion.div
                  variants={fieldVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-[#334D47] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#334D47] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div variants={fieldVariants}>
                  <label className="block text-sm font-medium text-[#334D47] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>

                {/* Submit */}
                <motion.button
                  variants={fieldVariants}
                  type="submit"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.97 }}
                  className="group w-full bg-[#102F2A] text-white py-4 rounded-lg font-semibold shadow-lg shadow-[#102F2A]/15 hover:bg-[#1B5147] transition-colors duration-300"
                >
                  Request a Demo
                  <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </motion.button>
              </motion.form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
