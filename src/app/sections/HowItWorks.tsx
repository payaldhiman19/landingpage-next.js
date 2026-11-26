"use client";
import { motion, type Variants } from "framer-motion";
import {
  FileText,
  CreditCard,
  Wallet,
  ChartNoAxesCombined,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    title: "Create Quotations & Invoices",
    description:
      "Organize your client quotations and invoices to keep your billing activities in one place.",
    icon: FileText,
  },
  {
    title: "Record Payments",
    description:
      "Keep track of collected payments and outstanding amounts to stay updated on your billing.",
    icon: CreditCard,
  },
  {
    title: "Manage Expenses & Billing",
    description:
      "Maintain office expense records and organize your weekly billing activities.",
    icon: Wallet,
  },
  {
    title: "Monitor Your Finances",
    description:
      "Use the finance dashboard to review billed amounts, collections, outstanding balances and open quotations.",
    icon: ChartNoAxesCombined,
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

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// NEW 1: the icon circle starts tiny and spins, then pops to full size with a bounce.
// parent step (hidden -> visible), because the names match.
const iconVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -90,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 14,
      delay: 0.25,
    },
  },
};


const lineHorizontalVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.6 },
  },
};

// Same idea for the vertical line on mobile: it grows from top to bottom (scaleY).
const lineVerticalVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
};

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#DDF0ED] px-6 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-[#267C70]">
            Simple Process
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102B28] leading-tight">
            How ADM One Finance
            <span className="text-[#267C70]"> Works</span>
          </h2>

          <p className="mt-5 text-[#526964] text-base sm:text-lg leading-8">
            Bring your everyday financial activities together
            through a simple and organized workflow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                variants={stepVariants}
                // NEW 3: the whole step floats up when you hover over it
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                key={step.title}
                className="group relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center"
              >
                {!isLast && (
                  <>
                    <motion.span
                      variants={lineVerticalVariants}
                      className="lg:hidden absolute left-7 top-16 -bottom-10 w-px bg-[#9BCBC0] origin-top"
                    />

                    <motion.span
                      variants={lineHorizontalVariants}
                      className="hidden lg:block absolute top-7 left-1/2 w-[calc(100%+2rem)] border-t-2 border-dashed border-[#9BCBC0] origin-left"
                    />
                  </>
                )}

                
                <motion.div
                  variants={iconVariants}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-white border-2 border-[#267C70] text-[#267C70] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#267C70] group-hover:text-white"
                >
                 
                  <span className="pointer-events-none absolute inset-0 rounded-full border-2 border-[#267C70] opacity-0 group-hover:animate-ping" />

                  <Icon size={24} strokeWidth={1.8} />
                </motion.div>

                {/* Content */}
                <div className="lg:mt-6">
                  <span className="text-xs font-semibold tracking-widest text-[#267C70]">
                    STEP 0{index + 1}
                  </span>

                  <h3 className="mt-1 text-lg font-bold text-[#102B28] leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#526964] leading-7 max-w-xs lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <p className="text-[#526964] mb-5">
            Want to explore the platform in more detail?
          </p>
          <motion.button
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="group bg-[#102F2A] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-[#102F2A]/15 hover:bg-[#1B5147] transition-colors duration-300"
          >
            Book a Demo
            <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export default HowItWorks;