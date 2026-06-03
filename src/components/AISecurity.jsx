import { motion } from "framer-motion";

function AISecurity() {

  return (

    <section className="
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
        right-0
        w-[500px]
        h-[500px]
        bg-cyan-500
        opacity-10
        blur-[150px]
        rounded-full
      "></div>

      {/* Heading */}
      <div className="relative z-10">

        <h1 className="
          text-5xl
          md:text-6xl
          font-bold
          mb-6
        ">

          AI Security Analyst

        </h1>

        <p className="
          text-gray-400
          text-xl
          max-w-3xl
        ">

          AI-driven threat investigation and
          automated response recommendations.

        </p>

      </div>

      {/* Chat UI */}
      <motion.div

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        className="
          relative
          z-10
          mt-20
          bg-white/5
          backdrop-blur-md
          border
          border-gray-800
          rounded-3xl
          p-8
          md:p-12
          hover:border-cyan-500
          hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]
          duration-300
        "
      >

        {/* USER MESSAGE */}
        <div className="mb-10">

          <div className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-cyan-500/20
            text-cyan-400
            text-sm
            border
            border-cyan-500/30
            mb-4
          ">

            USER

          </div>

          <div className="
            bg-black/40
            border
            border-gray-800
            rounded-2xl
            p-6
            text-lg
            text-gray-300
          ">

            Analyze recent malware activity
            affecting corporate endpoints.

          </div>

        </div>

        {/* AI MESSAGE */}
        <div>

          <div className="
            inline-flex
            items-center
            gap-3
            px-4
            py-2
            rounded-full
            bg-purple-500/20
            text-purple-400
            text-sm
            border
            border-purple-500/30
            mb-4
          ">

            {/* Pulse Dot */}
            <div className="
              relative
              flex
              items-center
              justify-center
            ">

              <div className="
                absolute
                w-3
                h-3
                bg-purple-500
                rounded-full
                animate-ping
              "></div>

              <div className="
                w-3
                h-3
                bg-purple-500
                rounded-full
              "></div>

            </div>

            AI ANALYST

          </div>

          {/* AI Response */}
          <div className="
            bg-black/40
            border
            border-gray-800
            rounded-2xl
            p-6
            text-lg
            leading-relaxed
            text-gray-300
          ">

            Detected ransomware behavior originating
            from PowerShell payload execution.

            <br />
            <br />

            Indicators show suspicious lateral movement,
            encrypted file creation and persistence attempts
            targeting Windows endpoints.

          </div>

        </div>

        {/* Suggested Actions */}
        <div className="mt-12">

          <h3 className="
            text-2xl
            font-bold
            mb-6
          ">

            Suggested Actions

          </h3>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-6
          ">

            {/* Action Card */}
            <div className="
              bg-black/40
              border
              border-gray-800
              rounded-2xl
              p-6
              hover:border-cyan-500
              duration-300
            ">

              <h4 className="
                text-cyan-400
                font-bold
                text-lg
              ">

                Isolate Endpoint

              </h4>

              <p className="
                text-gray-400
                mt-3
              ">

                Prevent lateral movement
                across network devices.

              </p>

            </div>

            {/* Action Card */}
            <div className="
              bg-black/40
              border
              border-gray-800
              rounded-2xl
              p-6
              hover:border-purple-500
              duration-300
            ">

              <h4 className="
                text-purple-400
                font-bold
                text-lg
              ">

                Block Payload

              </h4>

              <p className="
                text-gray-400
                mt-3
              ">

                Stop malicious PowerShell
                execution immediately.

              </p>

            </div>

            {/* Action Card */}
            <div className="
              bg-black/40
              border
              border-gray-800
              rounded-2xl
              p-6
              hover:border-red-500
              duration-300
            ">

              <h4 className="
                text-red-400
                font-bold
                text-lg
              ">

                Investigate IOC

              </h4>

              <p className="
                text-gray-400
                mt-3
              ">

                Analyze indicators of compromise
                across affected systems.

              </p>

            </div>

          </div>

        </div>

      </motion.div>

    </section>

  );
}

export default AISecurity;