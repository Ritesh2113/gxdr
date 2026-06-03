import { motion } from "framer-motion";
import Globe from "react-globe.gl";

function Hero() {

  return (

    <section className="
      relative
      min-h-screen
      overflow-hidden
      bg-black
      text-white
      px-6
      md:px-20
      pt-40
      pb-20
    ">

      {/* Background Grid */}
      <div className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:40px_40px]
      "></div>

      {/* Purple Glow */}
      <div className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-purple-500
        opacity-20
        blur-[150px]
        rounded-full
      "></div>

      {/* Cyan Glow */}
      <div className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-cyan-500
        opacity-20
        blur-[150px]
        rounded-full
      "></div>

      {/* Main Container */}
      <div className="
        relative
        z-10
        grid
        grid-cols-1
        md:grid-cols-2
        gap-20
        items-center
      ">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Badge */}
          <div className="
            inline-block
            px-4
            py-2
            rounded-full
            border
            border-cyan-500
            text-cyan-400
            text-sm
            mb-8
          ">
            Trusted by Global SOC Teams
          </div>

          {/* Heading */}
          <h1 className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
          ">

            Autonomous AI Defense

            <span className="text-cyan-400">
              {" "}for Modern Threats
            </span>

          </h1>

          {/* Description */}
          <p className="
            mt-8
            text-gray-400
            text-lg
            md:text-2xl
            max-w-2xl
          ">

            Detect, analyze and respond to
            advanced cyber attacks in real-time
            using AI-powered threat intelligence.

          </p>

          {/* Small Points */}
          <div className="
            flex
            gap-4
            mt-8
            text-cyan-400
            text-sm
          ">

            <span>Detect</span>

            <span>•</span>

            <span>Analyze</span>

            <span>•</span>

            <span>Respond</span>

          </div>

          {/* Buttons */}
          <div className="
            flex
            flex-col
            md:flex-row
            gap-6
            mt-10
          ">

            <button className="
              bg-cyan-500
              text-black
              px-8
              py-4
              rounded-2xl
              font-bold
              hover:scale-105
              hover:shadow-[0_0_30px_cyan]
              duration-300
            ">
              Start Monitoring
            </button>

            <button className="
              border
              border-cyan-500
              px-8
              py-4
              rounded-2xl
              hover:bg-cyan-500
              hover:text-black
              duration-300
            ">
              Live Demo
            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            relative
            flex
            justify-center
            items-center
          "
        >

          {/* Outer Ring */}
          <div className="
            absolute
            w-[500px]
            h-[500px]
            border
            border-cyan-500/30
            rounded-full
            animate-spin
          "
          style={{ animationDuration: '20s' }}
          ></div>

          {/* Inner Ring */}
          <div className="
            absolute
            w-[400px]
            h-[400px]
            border
            border-purple-500/30
            rounded-full
            animate-spin
          "
          style={{
            animationDirection: 'reverse',
            animationDuration: '15s'
          }}
          ></div>

          {/* Globe */}
          <div className="
            w-full
            h-[500px]
          ">

            <Globe
              height={500}
              width={500}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
              showAtmosphere={true}
              atmosphereColor="cyan"
              atmosphereAltitude={0.15}
            />

          </div>

        </motion.div>

      </div>

    </section>

  )
}

export default Hero