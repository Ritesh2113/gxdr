import { motion } from "framer-motion";

import {

  Database,
  BrainCircuit,
  Radar,
  ShieldCheck,
  RefreshCcw

} from "lucide-react";

function HowItWorks() {

  const steps = [

    {
      title: "Collect",
      description:
        "Gather logs, endpoint telemetry and cloud activity.",

      icon: Database,

      color: "cyan"
    },

    {
      title: "Analyze",
      description:
        "AI engine analyzes patterns and anomalies instantly.",

      icon: BrainCircuit,

      color: "purple"
    },

    {
      title: "Detect",
      description:
        "Threat correlation detects malicious behavior.",

      icon: Radar,

      color: "pink"
    },

    {
      title: "Respond",
      description:
        "Automated containment blocks active attacks.",

      icon: ShieldCheck,

      color: "green"
    },

    {
      title: "Recover",
      description:
        "Rapid remediation restores systems securely.",

      icon: RefreshCcw,

      color: "orange"
    }

  ];

  return (

    <section 
      id="how-it-works"
    className="
      relative
      py-32
      px-6
      md:px-20
      bg-[#030712]
      overflow-hidden
    ">

      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-cyan-500/10
        blur-[180px]
        rounded-full
      "></div>

      {/* HEADER */}
      <div className="
        relative
        z-10
        text-center
        mb-24
      ">

        <p className="
          text-cyan-400
          uppercase
          tracking-[4px]
          text-sm
        ">

          How GhostXDR Works

        </p>

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          mt-6
        ">

          AI Security

          <span className="text-cyan-400">
            {" "}Automation Pipeline
          </span>

        </h1>

        <p className="
          text-gray-400
          text-xl
          max-w-3xl
          mx-auto
          mt-8
        ">

          GhostXDR continuously collects,
          analyzes and responds to threats
          using intelligent automated defense.

        </p>

      </div>

      {/* WORKFLOW */}
      <div className="
        relative
        z-10
      ">

        {/* CONNECTING LINE */}
        <div className="
          hidden
          lg:block
          absolute
          top-1/2
          left-0
          w-full
          h-[4px]
          bg-gradient-to-r
          from-cyan-500
          via-pink-500
          to-green-500
          rounded-full
        "></div>

        {/* STEPS */}
        <div className="
          relative
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-5
          gap-8
        ">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 60
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.15
                }}

                whileHover={{
                  y: -10
                }}

                className="
                  relative
                  bg-white/5
                  border
                  border-gray-800
                  backdrop-blur-xl
                  rounded-[32px]
                  p-8
                  overflow-hidden
                  text-center
                  group
                "
              >

                {/* HOVER GLOW */}
                <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  duration-500
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-transparent
                "></div>

                {/* STEP NUMBER */}
                <div className="
                  absolute
                  top-4
                  right-5
                  text-5xl
                  font-black
                  text-white/5
                ">

                  0{index + 1}

                </div>

                {/* ICON */}
                <div className="
                  relative
                  z-10
                  w-24
                  h-24
                  mx-auto
                  rounded-3xl
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  mb-8
                ">

                  <Icon className="
                    w-12
                    h-12
                    text-cyan-400
                  " />

                </div>

                {/* TITLE */}
                <h2 className="
                  relative
                  z-10
                  text-3xl
                  font-bold
                  mb-4
                ">

                  {step.title}

                </h2>

                {/* DESCRIPTION */}
                <p className="
                  relative
                  z-10
                  text-gray-400
                  leading-relaxed
                ">

                  {step.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );
}

export default HowItWorks;