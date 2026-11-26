"use client"
import { ArrowUpRight, Globe } from "lucide-react";
import Image from "next/image";


type QuickLink = {
  label: string;
  id: string;
};

function Footer() {
  const scrollToSection = (section:string):void => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const quickLinks: QuickLink[] = [
    {label: "Home", id:"home"},
    {label:"Features", id:"features"},
    {label:"How It Works", id:"how-it-works"},
    {label:"Why Choose Us", id:"why-choose-us"},
  ];

  const companyLinks:QuickLink[] = [
    {label:"Testimonials", id:"testimonials"},
    {label:"FAQs", id:"faq"},
  ];

  return (
    <footer className="bg-[#102B24] text-white px-6 pt-16 pb-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          {/* Brand Section */}
          <div>
           <div className="mb-6">
           <Image
         src="/adm-logo-dark.avif"
         alt="ADM Technology"
         width={240}
         height={80}
         className="w-60 h-auto object-contain object-left"
          />
           </div>

            <h3 className="text-xl font-semibold mb-3">
              ADM One Finance
            </h3>

            <p className="text-sm text-gray-300 leading-7 max-w-xs">
              A smarter way to manage business finances, quotations,
              invoices and office expenses in one place.
            </p>

            <p className="text-sm text-[#A8D9CB] mt-5 font-medium">
              Build smarter. Automate faster. Scale better.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-base font-semibold mb-6">
              Explore
            </h4>

            <ul className="space-y-4">
              {quickLinks.map(({label, id}) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base font-semibold mb-6">
              Company
            </h4>

            <ul className="space-y-4">
              {companyLinks.map(({label, id}) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact and Social Links */}
          <div>
            <h4 className="text-base font-semibold mb-6">
              Let's Connect
            </h4>

            <p className="text-sm text-gray-300 leading-7 mb-6">
              Interested in seeing how ADM One Finance can simplify
              your financial workflows?
            </p>

            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 bg-white text-[#102B24] px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[#DDF0ED] transition-colors"
            >
              Book a Demo
              <ArrowUpRight size={16} />
            </button>

            <div className="flex items-center gap-4 mt-8">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/adm-technology-ai/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#102B24] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.19 0 22.21 0Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/admtechnology/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#102B24] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.5"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Website */}
              <a
                href="https://admtechnology.in"
                target="_blank"
                rel="noreferrer"
                aria-label="Website"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#102B24] transition-colors"
              >
                <Globe size={19} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} ADM Technology. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Powered by ADM Technology
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
