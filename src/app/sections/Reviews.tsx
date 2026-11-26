"use client";

import { Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Testi = {
  initials: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
};

const testimonials: Testi[] = [
  {
    initials: "RS",
    name: "Ritika Sharma",
    role: "Chief Operating Officer",
    company: "Wyndell Group",
    feedback:
      "ADM Technology helped transform business operations through AI automation and thoughtful product design. Their team brought the kind of expertise we needed.",
  },
  {
    initials: "DB",
    name: "Daniel Brooks",
    role: "VP of Technology",
    company: "Northstar Capital",
    feedback:
      "The team worked closely with us, delivering strong attention to security, speed and design quality while completing the project ahead of schedule.",
  },
  {
    initials: "AM",
    name: "Aarav Mehta",
    role: "Founder & CEO",
    company: "FlowDesk",
    feedback:
      "ADM Technology helped take our SaaS idea from concept to an enterprise-ready product, with a disciplined engineering and product approach.",
  },
];

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    y: 40,
    x: direction * 60,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const avatarVariants: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 12,
      delay: 0.4,
    },
  },
};

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Reviews() {
  return (
    <section
      id="testimonials"
  
      className="relative overflow-hidden bg-[#F5FAF8] px-6 py-24"
    >
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#267C70]/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-[0.18em] uppercase text-[#267C70]">
            Client Testimonials
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#102B28] leading-tight">
            Trusted Partnerships.
            <span className="text-[#267C70]"> Real Experiences.</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#526964] leading-8">
            Hear from business leaders who have partnered with
            ADM Technology to bring their digital products and
            business ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.initials}
              variants={cardVariants}
              custom={index - 1}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative overflow-hidden bg-white rounded-2xl border border-[#DCEAE6] p-8 flex flex-col hover:shadow-xl hover:shadow-[#315A50]/10 transition-shadow duration-300"
            >
              <span className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-[#267C70] to-[#00BFFF] transition-transform duration-500 group-hover:scale-x-100" />

              <div className="flex items-center justify-between">
                
                <div className="w-12 h-12 rounded-xl bg-[#DDF0ED] flex items-center justify-center text-[#267C70] transition-all duration-300 group-hover:bg-[#267C70] group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                  <Quote size={23} />
                </div>

                <span className="text-xs font-medium text-[#267C70] bg-[#EAF5F1] px-3 py-1.5 rounded-full">
                  ADM Technology
                </span>
              </div>

              <p className="mt-8 text-[#526964] leading-8 text-sm flex-1">
                {item.feedback}
              </p>

              <div className="mt-8 pt-6 border-t border-[#E4EEEA] flex items-center gap-4">
                <motion.div
                  variants={avatarVariants}
                  className="w-12 h-12 rounded-full bg-[#102F2A] text-white flex items-center justify-center font-semibold"
                >
                  {item.initials}
                </motion.div>

                <div>
                  <h3 className="font-semibold text-[#102B28]">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#526964] mt-1">
                    {item.role}
                  </p>

                  <p className="text-xs text-[#267C70] mt-1">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}