"use client"
import {motion,type Variants} from "framer-motion"

const headingVariants:Variants={
  hidden:{
    opacity:0,
    y:20,
  },
  visible:{
    opacity:1,
    y:0,
    transition:{duration:0.7}
  },
};


const ProductVideo = () => {
  return (
    <section
      id="product-video"
      className="bg-[#DDF0ED] px-6 py-20 md:py-24"
    >
      <div 
      className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div 
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold tracking-wider uppercase text-[#267C70]">
            Product Walkthrough
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#102B28] mt-3">
            See ADM One Finance in Action
          </h2>

          <p className="text-[#526964] mt-4 text-base md:text-lg">
            Explore how ADM One Finance helps you manage
            billing, expenses and everyday financial activities.
          </p>
        </motion.div>

        {/* Video Placeholder */}
        <div className="max-w-5xl mx-auto">
<div className="aspect-video bg-[#102F2A] rounded-2xl md:rounded-3xl shadow-xl border border-[#267C70]/20 overflow-hidden flex items-center justify-center">
            <div className="text-center text-white">
<div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-5">                <span className="text-4xl">▶</span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold">
                Product Demo Video
              </h3>

              <p className="text-white/65 mt-2 text-sm">
                Your video will be added here
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductVideo;
