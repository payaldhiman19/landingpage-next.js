"use client";

import { motion, type Variants } from "framer-motion";

type Item = {
  number: string;
  title: string;
  problem: string;
  solution: string;
  label: string;
};

const items: Item[] = [
  {
    number: "01",
    title: "Scattered financial records",
    problem:
      "Switching between Excel sheets, notebooks and conversations to find financial information.",
    solution:
      "Keep your business financial records organized in one centralized workspace.",
    label: "CENTRALIZED RECORDS",
  },
  {
    number: "02",
    title: "No clear financial picture",
    problem:
      "Uncertainty around how much has been billed, collected or is still outstanding.",
    solution:
      "See billed, collected and outstanding amounts through a consolidated dashboard.",
    label: "FINANCIAL OVERVIEW",
  },
  {
    number: "03",
    title: "Disconnected billing processes",
    problem:
      "Handling quotations and invoices separately makes everyday billing less organized.",
    solution:
      "Create and manage quotations and invoices from the same platform.",
    label: "BILLING MANAGEMENT",
  },
  {
    number: "04",
    title: "Expenses going unnoticed",
    problem:
      "Business expenses recorded inconsistently and difficult to review.",
    solution:
      "Record and review business expenses through a dedicated section.",
    label: "EXPENSE TRACKING",
  },
  {
    number: "05",
    title: "Repetitive weekly billing",
    problem:
      "Repeating the same weekly billing activities without a consistent workflow.",
    solution:
      "Manage weekly billing activities through a dedicated workflow.",
    label: "WEEKLY BILLING",
  },
];

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
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

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const problemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const solutionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const dividerVariants: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

type StoryRowProps = {
  item: Item;
};

function StoryRow({ item }: StoryRowProps) {
  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      // NEW 1: "group" lets the things INSIDE this row react when you hover the row
      className="relative group"
    >
      {/* NEW 1: when you hover a row, a white card with a soft shadow appears behind it.
          -mx and px cancel each other, so your text does not move. */}
      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.2fr] gap-6 md:gap-12 items-center py-12 md:py-16 -mx-4 px-4 md:-mx-6 md:px-6 rounded-2xl transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-[#102B28]/5">

        <motion.div variants={childVariants}>
          {/* NEW 2: the big number turns green and grows when you hover the row.
              inline-block is needed, otherwise scale does not work on a span. */}
          <span className="inline-block origin-left text-5xl md:text-6xl font-light tracking-tighter text-[#B9DCD2] transition-all duration-300 group-hover:text-[#267C70] group-hover:scale-110">
            {item.number}
          </span>

          <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-tight text-[#163B32] leading-snug max-w-xs">
            {item.title}
          </h3>
        </motion.div>

        <motion.div variants={problemVariants}>
          <div className="flex items-center gap-2 mb-3">
            {/* NEW 3: the red ✕ spins and pops in when the row scrolls into view.
                type "spring" gives it a little bounce. */}
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.5 }}
              className="inline-block text-[#C17A75] text-sm"
            >
              ✕
            </motion.span>

            <span className="text-[10px] font-bold tracking-[0.18em] text-[#6F5552]">
              THE CHALLENGE
            </span>
          </div>

          <p className="text-sm md:text-[15px] text-[#56665E] leading-7">
            {item.problem}
          </p>
        </motion.div>

        <motion.div variants={solutionVariants}>
          <div className="flex items-center gap-2 mb-3">
            {/* NEW 3: same pop-in for the green ✓, a little later than the ✕ */}
            <motion.span
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.8 }}
              className="inline-block text-[#267C70] text-base"
            >
              ✓
            </motion.span>

            <span className="text-[10px] font-bold tracking-[0.18em] text-[#267C70]">
              THE ADM APPROACH
            </span>
          </div>

          <p className="text-base md:text-lg font-medium text-[#163B32] leading-7">
            {item.solution}
          </p>

          <motion.div
            variants={childVariants}
            className="mt-4 flex items-center gap-2"
          >
            {/* NEW 4: the small line before the label grows longer when you hover the row */}
            <span className="h-px w-7 bg-[#75B6A4] transition-all duration-300 group-hover:w-14" />

            <span className="text-[10px] font-bold tracking-widest text-[#438B79]">
              {item.label}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={dividerVariants}
        className="h-px w-full bg-gradient-to-r from-[#DCE9E4] via-[#A8D7C9] to-[#DCE9E4] origin-left"
      />
    </motion.div>
  );
}

export default function ProblemSolution() {
  return (
    <section
      id="problem-solution"
      className="relative overflow-hidden bg-[#F7FAF9] text-[#102B28]"
    >
      {/* NEW 5: a soft blue circle that slowly drifts in the background.
          Same idea as in the Hero: go to 40, then back to 0, forever. */}
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-10 -right-20 w-80 h-80 rounded-full bg-[#00BFFF]/15 blur-3xl"
      />

      {/* I added "relative" here so the content stays on top of the circle */}
      <div className="relative px-6 py-24 md:py-28">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-2xl mb-14"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-[#267C70]">
              THE EVERYDAY DIFFERENCE
            </span>

            <h3 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              From everyday complications
              <span className="text-[#267C70]">
                {" "}to organized operations.
              </span>
            </h3>

            <p className="mt-5 text-[#75847E] leading-8 max-w-xl">
              See how ADM One Finance brings structure to the
              financial activities businesses handle every day.
            </p>
          </motion.div>

          {/* Column headings */}
          <div className="hidden md:grid grid-cols-[0.8fr_1fr_1.2fr] gap-12 border-b border-[#DCE8E3] pb-5">
            <span className="text-[10px] font-bold tracking-widest text-[#82938D]">
              BUSINESS AREA
            </span>

            <span className="text-[10px] font-bold tracking-widest text-[#A18C89]">
              WITHOUT A UNIFIED SYSTEM
            </span>

            <span className="text-[10px] font-bold tracking-widest text-[#267C70]">
              WITH ADM ONE FINANCE
            </span>
          </div>

          <div>
            {items.map((item) => (
              <StoryRow key={item.number} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}