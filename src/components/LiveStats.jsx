import { motion } from "framer-motion";

function LiveStats() {

  const stats = [

    {
      number: "12,492",
      label: "Threats Blocked"
    },

    {
      number: "842",
      label: "Devices Protected"
    },

    {
      number: "99.97%",
      label: "Detection Rate"
    },

    {
      number: "24/7",
      label: "AI Monitoring"
    }

  ];

  return (

    <section className="
      relative
      py-16
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
        w-[500px]
        h-[300px]
        bg-cyan-500
        opacity-10
        blur-[150px]
        rounded-full
      "></div>

      {/* Stats Container */}
      <div className="
        relative
        z-10
        grid
        grid-cols-1
        md:grid-cols-4
        gap-6
      ">

        {stats.map((stat, index) => (

          <motion.div

            key={index}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}

            className="
              relative
              overflow-hidden
              bg-white/5
              backdrop-blur-md
              border
              border-gray-800
              rounded-3xl
              p-8
              text-center
              hover:border-cyan-500
              hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
              duration-300
            "
          >

            {/* Pulse Glow */}
            <div className="
              absolute
              top-0
              left-0
              w-full
              h-full
              bg-cyan-500/5
              animate-pulse
            "></div>

            {/* Number */}
            <h1 className="
              relative
              z-10
              text-4xl
              md:text-5xl
              font-bold
              text-cyan-400
              tracking-wider
            ">

              {stat.number}

            </h1>

            {/* Label */}
            <p className="
              relative
              z-10
              mt-4
              text-gray-400
              text-lg
            ">

              {stat.label}

            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default LiveStats;