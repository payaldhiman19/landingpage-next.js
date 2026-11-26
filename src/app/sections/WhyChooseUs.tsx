
"use client";
import { motion, type Variants } from "framer-motion";
import { Opacity } from "lucide-react";
type Reasons = {
  title: string;
  description: string;
};

type ReasonProps = {
  reason: Reasons;
  index: number;
};


const headingVariants: Variants = {
  hidden: {
    opacity:0,
    y:30,
  },
  visible: {
    opacity:1,
    y:0,
    transition: {
      duration: 0.7,
      ease:"easeOut",
    },
  },
};

const itemVariants:Variants={
hidden: {
    opacity: 0,
    x: -30,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};




const reasons: Reasons[] = [
  {
    title: "See the Bigger Financial Picture",
    description:
      "Your dashboard brings billed amounts, collections, outstanding invoices and open quotations into one overview, so you know where things stand.",
  },
  {
    title: "Weekly Billing Has Its Own Workflow",
    description:
      "Not every business follows the same billing cycle. ADM One Finance has a dedicated weekly billing area next to its quotation and invoice workflows.",
  },
  {
    title: "More Than Just an Invoicing Tool",
    description:
      "Quotations, invoices and office expenses each have their own area within the same platform, giving everyday finance work one shared workspace.",
  },
];

function Reason({ reason, index }: ReasonProps) {
  return (
    <motion.div 
    variants={itemVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}

    className="group relative py-9">
      {/* Divider */}
      <span className="absolute bottom-0 left-0 h-px w-full bg-[#DCEAE6]" />

      <div className="flex gap-6 md:gap-10">
        {/* Number */}
        <span className="text-4xl md:text-5xl font-semibold text-[#9BCBC0] leading-none transition-colors duration-300 group-hover:text-[#267C70]">
          0{index + 1}
        </span>

        {/* Content */}
        <div className="transition-transform duration-300 group-hover:translate-x-1.5">
          <h3 className="text-xl md:text-2xl font-semibold text-[#102B28]">
            {reason.title}
          </h3>

          <p className="mt-3 text-sm md:text-base leading-7 text-[#526964]">
            {reason.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyChoose() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#F5FAF8] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

        {/* Left heading */}
        <div className="lg:sticky lg:top-28 self-start">
          <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.3}}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#267C70]">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-[#102B28]">
              Finance Management That Goes Beyond Basic Billing.
            </h2>

            <p className="mt-5 text-base leading-8 text-[#526964]">
              From understanding your financial position to handling different
              billing cycles, ADM One Finance brings practical finance
              workflows together in one platform.
            </p>
          </motion.div>
        </div>

        {/* Right numbered list */}
        <div>
          <span className="block h-px w-full bg-[#DCEAE6]" />

          {reasons.map((reason, index) => (
            <Reason key={reason.title} reason={reason} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
