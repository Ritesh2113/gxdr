import { motion } from "framer-motion";

import {
  Activity,
  Cpu,
  Server,
  AlertTriangle
} from "lucide-react";

function DashboardPreview() {

  const bars = [40, 65, 90, 45, 80, 55, 95, 70];

  return (

    <section 
    id="dashboard-preview"
    className="
      py-32
      px-6
      md:px-20
      bg-[#030712]
    ">

      {/* HEADER */}
      <div className="text-center mb-20">

        <p className="
          text-cyan-400
          uppercase
          tracking-[4px]
          text-sm
        ">

          Dashboard Preview

        </p>

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          mt-6
        ">

          AI Security

          <span className="text-cyan-400">
            {" "}Dashboard
          </span>

        </h1>

      </div>

      {/* DASHBOARD */}
      <motion.div

        initial={{ opacity: 0, y: 50 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        className="
          bg-white/5
          border
          border-cyan-500/20
          rounded-[40px]
          p-8
          backdrop-blur-xl
        "
      >

        {/* GRAPH */}
        <div className="
          bg-black/40
          rounded-3xl
          p-8
          mb-8
        ">

          <div className="
            flex
            justify-between
            items-center
            mb-8
          ">

            <h2 className="text-3xl font-bold">
              Threat Analytics
            </h2>

            <div className="
              flex
              items-center
              gap-2
              text-cyan-400
            ">

              <Activity />

              Live

            </div>

          </div>

          <div className="
            h-[250px]
            flex
            items-end
            gap-4
          ">

            {bars.map((height, index) => (

              <motion.div

                key={index}

                initial={{ height: 0 }}

                whileInView={{
                  height: `${height}%`
                }}

                transition={{
                  duration: 1,
                  delay: index * 0.1
                }}

                className="
                  flex-1
                  bg-cyan-400
                  rounded-t-xl
                "
              ></motion.div>

            ))}

          </div>

        </div>

        {/* GRID */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
        ">

          {/* RISK */}
          <div className="
            bg-black/40
            rounded-3xl
            p-8
          ">

            <div className="
              flex
              justify-between
              items-center
            ">

              <div>

                <p className="text-gray-400">
                  Risk Score
                </p>

                <h1 className="
                  text-6xl
                  font-bold
                  text-red-400
                  mt-4
                ">

                  87

                </h1>

              </div>

              <AlertTriangle className="
                text-red-400
                w-16
                h-16
              " />

            </div>

          </div>

          {/* DEVICES */}
          <div className="
            bg-black/40
            rounded-3xl
            p-8
          ">

            <div className="
              flex
              justify-between
              items-center
            ">

              <div>

                <p className="text-gray-400">
                  Devices Protected
                </p>

                <h1 className="
                  text-6xl
                  font-bold
                  text-green-400
                  mt-4
                ">

                  842

                </h1>

              </div>

              <Server className="
                text-green-400
                w-16
                h-16
              " />

            </div>

          </div>

        </div>

        {/* AI CONFIDENCE */}
        <div className="
          bg-black/40
          rounded-3xl
          p-8
          mt-8
        ">

          <div className="
            flex
            justify-between
            items-center
            mb-8
          ">

            <div>

              <h2 className="
                text-3xl
                font-bold
              ">

                AI Confidence

              </h2>

            </div>

            <Cpu className="
              text-cyan-400
              w-14
              h-14
            " />

          </div>

          <div className="space-y-6">

            {[
              "Malware Detection",
              "Threat Prediction",
              "Behavior Analysis",
              "Incident Correlation"

            ].map((item, index) => (

              <div key={index}>

                <div className="
                  flex
                  justify-between
                  mb-2
                ">

                  <span>{item}</span>

                  <span className="text-cyan-400">

                    98%

                  </span>

                </div>

                <div className="
                  h-3
                  bg-gray-800
                  rounded-full
                  overflow-hidden
                ">

                  <div className="
                    w-[98%]
                    h-full
                    bg-cyan-400
                  "></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </motion.div>

    </section>

  );
}

export default DashboardPreview;