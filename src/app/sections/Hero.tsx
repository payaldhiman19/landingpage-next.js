"use client";

import { motion, Variants } from "framer-motion";

const heroFadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: delay,
      ease: "easeOut",
    },
  }),
};

function Hero() {
  const scrollToSection = (section: string): void => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#DDF0ED] px-5 pt-20 pb-20"
    >
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#00BFFF]/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#267C70]/20 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">

        <div className="max-w-4xl mx-auto text-center">

          <motion.h1
            custom={0}
            variants={heroFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#102B28] leading-[1.12] tracking-tight"
          >
            Manage Your Business Finances with{" "}
            <span className="hero-shine">
              Greater Clarity and Control.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            custom={0.25}
            variants={heroFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-7 text-base sm:text-lg text-[#526964] leading-8 max-w-3xl mx-auto"
          >
            ADM One Finance brings your essential financial operations
            together in one organized platform. From creating quotations
            and managing client invoices to tracking office expenses and
            handling weekly billing, simplify everyday finance activities
            with a centralized view of your business.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={0.45}
            variants={heroFadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-9"
          >
            <motion.button
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => scrollToSection("contact")}
              className="group bg-[#102F2A] text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-[#102F2A]/15 hover:bg-[#1B5147] transition-colors duration-300"
            >
              Book a Demo
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </motion.button>

            <motion.button
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => scrollToSection("features")}
              className="bg-white/50 border border-[#315A50] text-[#102B28] px-7 py-3.5 rounded-full font-semibold hover:bg-white transition-colors duration-300"
            >
              Explore Features
            </motion.button>
          </motion.div>

        </div>

        <div className="relative max-w-6xl mx-auto mt-16 sm:mt-20">

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-2xl shadow-[#315A50]/15 border border-white transition-transform duration-500 hover:-translate-y-3">

              <div className="flex items-center justify-between px-3 sm:px-5 py-3 border-b border-[#EDF2F0]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E9A49B]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8C77E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9BCBB5]" />
                </div>

                <span className="text-xs sm:text-sm font-medium text-[#526964]">
                  ADM One Finance Dashboard
                </span>

                <span className="text-xs text-[#78918A]">
                  Product Preview
                </span>
              </div>

              <motion.div
                custom={0.65}
                variants={heroFadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src="/dashboard.png"
                  alt="ADM One Finance dashboard displaying business financial information"
                  className="block w-full h-auto object-contain"
                />
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Hero;