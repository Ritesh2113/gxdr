import { motion } from "framer-motion";

import {

  BrainCircuit,
  Radar,
  Cloud,
  Monitor,
  ShieldCheck,
  SearchCheck

} from "lucide-react";

function Features() {

  const features = [

    {
      title: "AI Detection",
      description:
        "AI-powered malware and anomaly detection engine.",

      icon: BrainCircuit,

      color: "cyan"
    },

    {
      title: "Threat Intel",
      description:
        "Global real-time threat intelligence correlation.",

      icon: Radar,

      color: "pink"
    },

    {
      title: "Cloud Security",
      description:
        "Secure multi-cloud infrastructure monitoring.",

      icon: Cloud,

      color: "blue"
    },

    {
      title: "EDR Monitoring",
      description:
        "Advanced endpoint detection and response system.",

      icon: Monitor,

      color: "green"
    },

    {
      title: "Auto Response",
      description:
        "Instant automated containment and remediation.",

      icon: ShieldCheck,

      color: "purple"
    },

    {
      title: "Incident Forensics",
      description:
        "Deep attack investigation and forensic analysis.",

      icon: SearchCheck,

      color: "orange"
    }

  ];

  return (

    <section 
    id="core-features"
    className="
      relative
      py-32
      px-6
      md:px-20
      bg-black
      overflow-hidden
    ">

      {/* Background Glow */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        bg-cyan-500
        opacity-10
        blur-[180px]
        rounded-full
      "></div>

      {/* Heading */}
      <div className="
        relative
        z-10
        text-center
        mb-20
      ">

        <p className="
          text-cyan-400
          uppercase
          tracking-[4px]
          text-sm
        ">

          Core Features

        </p>

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          mt-6
        ">

          Enterprise AI

          <span className="text-cyan-400">
            {" "}Security Platform
          </span>

        </h1>

        <p className="
          text-gray-400
          text-xl
          max-w-3xl
          mx-auto
          mt-8
        ">

          Advanced XDR capabilities powered
          by artificial intelligence and
          real-time cyber threat analytics.

        </p>

      </div>

      {/* Grid */}
      <div className="
        relative
        z-10
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">

        {features.map((feature, index) => {

          const Icon = feature.icon;

          return (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}

              whileHover={{
                y: -10
              }}

              className="
                relative
                bg-white/5
                backdrop-blur-xl
                border
                border-gray-800
                rounded-[32px]
                p-8
                overflow-hidden
                hover:border-cyan-500
                duration-300
                group
              "
            >

              {/* Hover Glow */}
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

              {/* Icon */}
              <div className={`
                w-20
                h-20
                rounded-3xl
                flex
                items-center
                justify-center
                mb-8

                ${
                  feature.color === "cyan"
                    ? "bg-cyan-500/10"

                    : feature.color === "pink"
                    ? "bg-pink-500/10"

                    : feature.color === "blue"
                    ? "bg-blue-500/10"

                    : feature.color === "green"
                    ? "bg-green-500/10"

                    : feature.color === "purple"
                    ? "bg-purple-500/10"

                    : "bg-orange-500/10"
                }
              `}>

                <Icon className={`
                  w-10
                  h-10

                  ${
                    feature.color === "cyan"
                      ? "text-cyan-400"

                      : feature.color === "pink"
                      ? "text-pink-400"

                      : feature.color === "blue"
                      ? "text-blue-400"

                      : feature.color === "green"
                      ? "text-green-400"

                      : feature.color === "purple"
                      ? "text-purple-400"

                      : "text-orange-400"
                  }
                `} />

              </div>

              {/* Title */}
              <h2 className="
                text-3xl
                font-bold
                mb-5
              ">

                {feature.title}

              </h2>

              {/* Description */}
              <p className="
                text-gray-400
                leading-relaxed
                text-lg
              ">

                {feature.description}

              </p>

              {/* Bottom Line */}
              <div className="
                mt-8
                w-full
                h-[2px]
                bg-gradient-to-r
                from-cyan-500
                to-transparent
              "></div>

            </motion.div>

          );

        })}

      </div>

    </section>

  );
}

export default Features;