import { motion } from "framer-motion";

import {

  ArrowRight,
  ShieldCheck

} from "lucide-react";

function CTABanner() {

  return (

    <section className="
      relative
      py-32
      px-6
      md:px-20
      bg-[#020617]
      overflow-hidden
    ">

      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[700px]
        h-[700px]
        bg-cyan-500/10
        blur-[180px]
        rounded-full
      "></div>

      {/* CTA BOX */}
      <motion.div

        initial={{
          opacity: 0,
          scale: 0.9
        }}

        whileInView={{
          opacity: 1,
          scale: 1
        }}

        transition={{
          duration: 0.8
        }}

        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          bg-white/5
          border
          border-cyan-500/20
          backdrop-blur-xl
          rounded-[40px]
          p-12
          md:p-20
          overflow-hidden
          text-center
        "
      >

        {/* INNER GLOW */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-500/10
          to-transparent
        "></div>

        {/* ICON */}
        <div className="
          relative
          z-10
          w-28
          h-28
          rounded-[32px]
          bg-cyan-500/10
          flex
          items-center
          justify-center
          mx-auto
          mb-10
        ">

          <ShieldCheck className="
            w-14
            h-14
            text-cyan-400
          " />

        </div>

        {/* TITLE */}
        <h1 className="
          relative
          z-10
          text-5xl
          md:text-7xl
          font-bold
          leading-tight
        ">

          Ready to Modernize

          <span className="text-cyan-400">
            {" "}Your SOC?
          </span>

        </h1>

        {/* DESCRIPTION */}
        <p className="
          relative
          z-10
          text-gray-400
          text-xl
          max-w-3xl
          mx-auto
          mt-8
          leading-relaxed
        ">

          Experience AI-powered threat detection,
          automated response and enterprise-grade
          XDR protection with GhostXDR.

        </p>

        {/* BUTTONS */}
        <div className="
          relative
          z-10
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-6
          mt-14
        ">

          {/* START BUTTON */}
          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.95
            }}

            className="
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              px-10
              py-5
              rounded-2xl
              font-bold
              text-lg
              flex
              items-center
              justify-center
              gap-3
              duration-300
              shadow-[0_0_30px_rgba(0,255,255,0.4)]
            "
          >

            Start Free Trial

            <ArrowRight />

          </motion.button>

          {/* DEMO BUTTON */}
          <motion.button

            whileHover={{
              scale: 1.05
            }}

            whileTap={{
              scale: 0.95
            }}

            className="
              border
              border-cyan-500/30
              bg-white/5
              hover:bg-white/10
              text-white
              px-10
              py-5
              rounded-2xl
              font-bold
              text-lg
              duration-300
            "
          >

            Book Live Demo

          </motion.button>

        </div>

      </motion.div>

    </section>

  );
}

export default CTABanner;