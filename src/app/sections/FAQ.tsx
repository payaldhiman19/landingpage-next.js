
"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FAQS={
    question:string;
    answer:string;
}
const faqs :FAQS[]= [
  {
    question: "How can ADM One Finance help me manage my company's day-to-day financial activities?",
    answer:
      "ADM One Finance brings important financial activities together in one place. You can manage quotations, invoices, weekly billing and office expenses while using the finance dashboard to get a clearer view of your business's financial position. Instead of handling these activities separately, your team can keep them organized through one platform.",
  },
  {
    question: "How can I keep track of the money my business has billed, collected and still needs to receive?",
    answer:
      "The Finance Dashboard gives you an overview of billed, collected and outstanding amounts, along with open quotations. This makes it easier to understand how much business has been billed, how much has been collected and what payments are still pending.",
  },
  {
    question: "Can I manage office expenses without maintaining separate records or spreadsheets?",
    answer:
      "Yes. The Office Expenses module helps you record and organize your business expenses. It gives you a dedicated place to maintain expense information, making it easier to review spending and keep financial records organized.",
  },
  {
    question: "What if my business regularly prepares quotations and sends invoices to clients?",
    answer:
      "ADM One Finance includes Quotations and Billing features to help manage these activities. You can organize client quotations and invoices in one place, making your billing process easier to track and manage.",
  },
  {
    question: "How does ADM One Finance help businesses that follow a weekly billing process?",
    answer:
      "The Weekly Billing module helps organize billing records on a weekly basis. It is useful for businesses that need to keep track of recurring weekly billing activities and review their billing information more systematically.",
  },
  {
    question: "How can I get a better understanding of my business's financial position without checking multiple records?",
    answer:
      "The Finance Dashboard brings key financial figures into a single overview. By reviewing billed amounts, collected amounts, outstanding payments and open quotations, you can get a clearer picture of your business finances and identify what needs attention.",
  },
  {
    question: "Is ADM One Finance useful for a business that wants to organize its existing finance management process?",
    answer:
      "ADM One Finance is designed to bring everyday finance activities such as expense tracking, quotations, invoicing and weekly billing into a more organized workflow. It can help businesses reduce scattered records and manage these activities more systematically.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest text-[#267C70] uppercase mb-3">
            Got Questions?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#102B28] leading-tight">
            Everything You Need to Know About ADM One Finance
          </h2>

          <p className="text-[#526964] mt-5 leading-relaxed">
            From managing daily expenses to keeping track of invoices,
            billing and outstanding payments, discover how ADM One Finance
            helps bring your business financial activities together.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition ${
                activeIndex === index
                  ? "border-[#267C70] bg-[#F4FAF8]"
                  : "border-[#DCEAE6] bg-white"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-start gap-4 text-left p-5"
              >
                <span className="font-semibold text-[#102B28] leading-relaxed">
                  {faq.question}
                </span>

                <span className="text-2xl text-[#267C70] shrink-0">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-5 pb-5 text-[#526964] leading-7 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="text-center mt-10">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-[#102F2A] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#1B5147] hover:-translate-y-1 transition-all duration-300"
          >
            Have More Questions? Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}

export default FAQ;
