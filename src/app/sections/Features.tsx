"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useEffect } from "react"; // NEW: useEffect added (used in NEW 1)
import Image from "next/image";

type Feature = {
  id: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
};

const features: Feature[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    title: "Can't see where your business money stands?",
    description:
      "One dashboard shows what you've billed, collected and still need to receive.",
    points: [
      "View billed and collected amounts",
      "Keep track of outstanding balances",
      "Monitor open quotations",
      "Get a consolidated view of your finances",
    ],
    image: "/dashboard.png",
    imageAlt: "ADM One Finance dashboard",
  },
  {
    id: "expenses",
    label: "Expenses",
    title: "Office expenses scattered across notes and receipts?",
    description:
      "Record and review every office expense in one dedicated place.",
    points: [
      "Maintain office expense records",
      "Review recorded expenses",
      "Keep financial information organized",
      "Access expense information in one place",
    ],
    image: "/office-expenses.jpeg",
    imageAlt: "ADM One Finance office expenses",
  },
  {
    id: "weekly",
    label: "Weekly Billing",
    title: "Weekly billing turning into a last-minute scramble?",
    description:
      "Keep weekly billing records organized and easy to review from one section.",
    points: [
      "Access weekly billing records",
      "Review billing information",
      "Keep weekly billing activities organized",
      "Manage billing information from one place",
    ],
    image: "/weekly-billing.jpeg",
    imageAlt: "ADM One Finance weekly billing",
  },
  {
    id: "invoices",
    label: "Quotations & Invoices",
    title: "Quotations and invoices living in separate places?",
    description:
      "Create quotations and manage invoices together, with records always at hand.",
    points: [
      "Create and manage quotations",
      "Organize customer invoices",
      "Keep billing records accessible",
      "Review quotation and invoice information",
    ],
    image: "/invoices-billing.jpeg",
    imageAlt: "ADM One Finance quotations and invoices",
  },
];

const AUTO_SWITCH_MS = 5000;

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

function Features() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const selectedFeature =
    features.find((feature) => feature.id === activeTab) ?? features[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentIndex = features.findIndex((f) => f.id === activeTab);
      const nextIndex = (currentIndex + 1) % features.length; // after the last tab, go back to the first
      setActiveTab(features[nextIndex].id);
    }, AUTO_SWITCH_MS);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const scrollToContact = (): void => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="features"
      className="bg-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.span
            variants={textVariants}
            className="text-sm font-semibold tracking-wider uppercase text-[#267C70]"
          >
            A Smarter Way To Manage Finances
          </motion.span>

          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#102B28] mt-4 leading-tight"
          >
            Spending more time tracking money than growing your business?
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-[#526964] mt-5 text-base md:text-lg leading-7"
          >
            Manage billing, expenses and invoices in one place. No more switching between files and notebooks.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-start md:justify-center overflow-x-auto border-b border-[#DCEAE6] mb-16 scrollbar-hide"
        >
          <div className="flex min-w-max gap-3 md:gap-10">
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-5 py-4 text-sm md:text-base font-medium
                  whitespace-nowrap transition-colors duration-300 ${
                    activeTab === feature.id
                      ? "text-[#267C70]"
                      : "text-[#526964] hover:text-[#102B28]"
                  }`}
              >
                {activeTab === feature.id && (
                  <motion.span
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-[#EAF5F1] rounded-xl"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {feature.label}
                </span>

                {activeTab === feature.id && (
                  <motion.span
                    layoutId="activeFeatureTab"
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-[#267C70] rounded-full"
                  />
                )}

                {activeTab === feature.id && (
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTO_SWITCH_MS / 1000, ease: "linear" }}
                    style={{ transformOrigin: "left" }}
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-[#00BFFF] rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="bg-[#F5FAF8] border border-[#DCEAE6] rounded-2xl p-3 md:p-5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#102B28]/10 hover:-translate-y-1">

              <div className="flex items-center gap-2 px-2 pb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5A5A5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E9CF86]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#8FC9A5]" />

                <span className="text-xs text-[#82938D] ml-3">
                  ADM One Finance
                </span>
              </div>

              <div className="bg-white rounded-xl overflow-hidden">

              
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedFeature.id}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={selectedFeature.image}
                      alt={selectedFeature.imageAlt}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

            <p className="text-xs text-[#82938D] mt-4 text-center">
              ADM One Finance – Product Interface
            </p>
          </motion.div>

          <motion.div
            key={selectedFeature.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold text-[#102B28] mt-6 leading-tight">
              {selectedFeature.title}
            </h3>

            <p className="text-[#526964] text-base md:text-lg leading-8 mt-5">
              {selectedFeature.description}
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-8 space-y-5"
            >
              {selectedFeature.points.map((point) => (
                <motion.div
                  key={point}
                  className="flex items-start gap-3 rounded-xl p-2 -m-2"
                >
                  <span
                    className="w-6 h-6 rounded-full bg-[#DDF0ED] text-[#267C70] flex items-center justify-center flex-shrink-0 mt-0.5"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>

                  <p className="text-[#344C46] text-base leading-7">
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={scrollToContact}
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{ duration: 0.2 }}
              className="group hidden lg:inline-block bg-[#102F2A] text-white mt-8 px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-[#102F2A]/15 hover:bg-[#1B5147] transition-colors duration-300"
            >
              Book a Demo
              <span
                aria-hidden="true"
                className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Features;