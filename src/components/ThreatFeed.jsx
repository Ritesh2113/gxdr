import { motion } from "framer-motion";

function ThreatFeed() {

  const threats = [

    {
      type: "Malware Blocked",
      ip: "192.168.1.45",
      country: "Russia",
      severity: "Critical"
    },

    {
      type: "Phishing Attempt",
      ip: "10.45.22.91",
      country: "China",
      severity: "High"
    },

    {
      type: "DDoS Traffic Detected",
      ip: "172.22.11.5",
      country: "North Korea",
      severity: "Critical"
    },

    {
      type: "Endpoint Isolated",
      ip: "192.168.5.12",
      country: "Germany",
      severity: "Medium"
    },

    {
      type: "Ransomware Prevented",
      ip: "10.88.22.77",
      country: "USA",
      severity: "Critical"
    }

  ];

  return (

    <section 
    id="live-attack-feed"
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
        right-0
        w-[400px]
        h-[400px]
        bg-red-500
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

          Live Attack Feed

        </h1>

        <p className="
          text-gray-400
          text-xl
          max-w-3xl
        ">

          Real-time AI monitored threat detections
          from across the globe.

        </p>

      </div>

      {/* Feed Container */}
      <div className="
        relative
        z-10
        mt-16
        space-y-6
      ">

        {threats.map((threat, index) => (

          <motion.div

            key={index}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}

            className="
              bg-[#0a0a0a]
              border
              border-gray-800
              rounded-2xl
              p-6
              hover:border-red-500
              hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]
              duration-300
            "
          >

            <div className="
              flex
              flex-col
              md:flex-row
              justify-between
              gap-6
            ">

              {/* LEFT */}
              <div className="flex items-center gap-4">

                {/* Pulse Dot */}
                <div className="
                  relative
                  flex
                  items-center
                  justify-center
                ">

                  <div className="
                    absolute
                    w-4
                    h-4
                    bg-red-500
                    rounded-full
                    animate-ping
                  "></div>

                  <div className="
                    w-4
                    h-4
                    bg-red-500
                    rounded-full
                  "></div>

                </div>

                {/* Threat Info */}
                <div>

                  <h2 className="
                    text-2xl
                    font-bold
                  ">

                    {threat.type}

                  </h2>

                  <p className="
                    text-gray-400
                    mt-2
                  ">

                    Source: {threat.country}

                  </p>

                </div>

              </div>

              {/* RIGHT */}
              <div className="
                flex
                flex-col
                md:items-end
                gap-2
              ">

                <span className="
                  text-cyan-400
                  font-mono
                ">

                  {threat.ip}

                </span>

                <span className="
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  bg-red-500/20
                  text-red-400
                  border
                  border-red-500/30
                ">

                  {threat.severity}

                </span>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default ThreatFeed;