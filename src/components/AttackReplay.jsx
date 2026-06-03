import { motion } from "framer-motion";

import {

  ShieldAlert,
  Globe,
  ServerCrash,
  Bug,
  LockKeyhole

} from "lucide-react";

function AttackReplay() {

  const stages = [

    {
      title: "Initial Access",
      description:
        "Phishing email exploited employee credentials.",

      icon: ShieldAlert,

      color: "red"
    },

    {
      title: "Lateral Movement",
      description:
        "Threat actor moved across internal systems.",

      icon: Globe,

      color: "pink"
    },

    {
      title: "Privilege Escalation",
      description:
        "Administrator privileges obtained silently.",

      icon: LockKeyhole,

      color: "orange"
    },

    {
      title: "Payload Execution",
      description:
        "Ransomware payload deployed to endpoints.",

      icon: Bug,

      color: "cyan"
    },

    {
      title: "System Compromise",
      description:
        "Critical infrastructure encrypted and impacted.",

      icon: ServerCrash,

      color: "purple"
    }

  ];

  return (

    <section 
     id="attack-replay"
    className="
      relative
      py-32
      px-6
      md:px-20
      bg-black
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
        bg-pink-500/10
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
          text-pink-400
          uppercase
          tracking-[4px]
          text-sm
        ">

          Attack Replay

        </p>

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          mt-6
        ">

          AI-Powered

          <span className="text-pink-400">
            {" "}Threat Reconstruction
          </span>

        </h1>

        <p className="
          text-gray-400
          text-xl
          max-w-3xl
          mx-auto
          mt-8
        ">

          Replay every attack stage from
          initial compromise to payload execution
          with real-time forensic intelligence.

        </p>

      </div>

      {/* TIMELINE */}
      <div className="
        relative
        z-10
      ">

        {/* CENTER LINE */}
        <div className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[4px]
          h-full
          bg-gradient-to-b
          from-pink-500
          to-cyan-500
          rounded-full
        "></div>

        {/* ANIMATED PULSE */}
        <motion.div

          animate={{
            y: ["0%", "100%"]
          }}

          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}

          className="
            absolute
            left-1/2
            -translate-x-1/2
            w-6
            h-6
            rounded-full
            bg-pink-400
            shadow-[0_0_30px_#ff00ff]
            z-20
          "
        ></motion.div>

        {/* STAGES */}
        <div className="
          space-y-20
        ">

          {stages.map((stage, index) => {

            const Icon = stage.icon;

            return (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                transition={{
                  duration: 0.8
                }}

                className={`
                  flex
                  items-center

                  ${
                    index % 2 === 0
                      ? "justify-start"
                      : "justify-end"
                  }
                `}
              >

                {/* CARD */}
                <div className="
                  relative
                  w-full
                  md:w-[45%]
                  bg-white/5
                  border
                  border-gray-800
                  backdrop-blur-xl
                  rounded-[32px]
                  p-8
                  overflow-hidden
                ">

                  {/* HOVER GLOW */}
                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-pink-500/10
                    to-transparent
                  "></div>

                  {/* ICON */}
                  <div className="
                    relative
                    z-10
                    w-20
                    h-20
                    rounded-3xl
                    bg-pink-500/10
                    flex
                    items-center
                    justify-center
                    mb-8
                  ">

                    <Icon className="
                      w-10
                      h-10
                      text-pink-400
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

                    {stage.title}

                  </h2>

                  {/* DESCRIPTION */}
                  <p className="
                    relative
                    z-10
                    text-gray-400
                    text-lg
                    leading-relaxed
                  ">

                    {stage.description}

                  </p>

                  {/* STEP NUMBER */}
                  <div className="
                    absolute
                    top-6
                    right-6
                    text-6xl
                    font-black
                    text-white/5
                  ">

                    0{index + 1}

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );
}

export default AttackReplay;