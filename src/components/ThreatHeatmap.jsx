import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps";

import { motion } from "framer-motion";

import {
  Shield,
  Brain,
  Zap,
  Globe
} from "lucide-react";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

function ThreatHeatmap() {

  const attacks = [

    {
      from: [-100, 40],
      to: [10, 51],
      color: "#ff0066"
    },

    {
      from: [10, 51],
      to: [78, 22],
      color: "#00ffff"
    },

    {
      from: [78, 22],
      to: [139, 35],
      color: "#ff6600"
    }

  ];

  const markers = [

    {
      name: "USA",
      coordinates: [-100, 40],
      attacks: "8,563"
    },

    {
      name: "Germany",
      coordinates: [10, 51],
      attacks: "4,327"
    },

    {
      name: "India",
      coordinates: [78, 22],
      attacks: "12,842"
    },

    {
      name: "Japan",
      coordinates: [139, 35],
      attacks: "3,271"
    }

  ];

  return (

    <section 
    id="threat-heatmap"
    className="
      relative
      bg-[#020617]
      py-32
      px-4
      md:px-12
      overflow-hidden
    ">

      {/* BACKGROUND GRID */}
      <div className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:40px_40px]
      "></div>

      {/* GLOW */}
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

      {/* HEADER */}
      <div className="
        relative
        z-10
        mb-12
      ">

        <p className="
          text-cyan-400
          uppercase
          tracking-[4px]
          text-sm
        ">

          Threat Heatmap

        </p>

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          leading-tight
          mt-4
        ">

          Real-Time Global

          <span className="text-cyan-400">
            {" "}Threat Visualization
          </span>

        </h1>

      </div>

      {/* MAIN DASHBOARD */}
      <motion.div

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 1 }}

        className="
          relative
          z-10
          bg-[#06111f]/80
          border
          border-cyan-500/10
          rounded-[40px]
          p-6
          backdrop-blur-xl
          overflow-hidden
        "
      >

        <div className="
          grid
          grid-cols-1
          lg:grid-cols-4
          gap-6
        ">

          {/* LEFT PANEL */}
          <div className="
            space-y-6
          ">

            {/* INFO CARD */}
            <div className="
              bg-black/40
              border
              border-cyan-500/10
              rounded-3xl
              p-6
            ">

              <h3 className="
                text-cyan-400
                text-xl
                font-bold
              ">

                AI Threat Monitor

              </h3>

              <p className="
                text-gray-400
                mt-4
                leading-relaxed
              ">

                AI-powered live map showing
                cyber attacks and affected
                regions globally.

              </p>

            </div>

            {/* TOP SOURCES */}
            <div className="
              bg-black/40
              border
              border-cyan-500/10
              rounded-3xl
              p-6
            ">

              <h3 className="
                text-cyan-400
                font-bold
                mb-6
              ">

                Top Threat Sources

              </h3>

              <div className="space-y-5">

                {[
                  "Russia",
                  "China",
                  "USA",
                  "North Korea",
                  "Brazil"
                ].map((country, index) => (

                  <div key={index}>

                    <div className="
                      flex
                      justify-between
                      text-sm
                      mb-2
                    ">

                      <span>{country}</span>

                      <span className="text-gray-400">
                        {Math.floor(Math.random() * 40)}%
                      </span>

                    </div>

                    <div className="
                      h-2
                      bg-gray-800
                      rounded-full
                      overflow-hidden
                    ">

                      <div
                        className="
                          h-full
                          bg-cyan-400
                          rounded-full
                        "
                        style={{
                          width: `${Math.floor(Math.random() * 90)}%`
                        }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* MAP AREA */}
          <div className="
            lg:col-span-2
            relative
          ">

            <ComposableMap
              projectionConfig={{
                scale: 155
              }}
              style={{
                width: "100%",
                height: "650px"
              }}
            >

              <Geographies geography={geoUrl}>

                {({ geographies }) =>

                  geographies.map((geo) => (

                    <Geography

                      key={geo.rsmKey}

                      geography={geo}

                      style={{

                        default: {
                          fill: "#08101d",
                          stroke: "#122033",
                          outline: "none"
                        },

                        hover: {
                          fill: "#00ffff",
                          outline: "none"
                        },

                        pressed: {
                          fill: "#00ffff",
                          outline: "none"
                        }

                      }}

                    />

                  ))
                }

              </Geographies>

              {/* ATTACK LINES */}
              {attacks.map((attack, index) => (

                <Line

                  key={index}

                  from={attack.from}

                  to={attack.to}

                  stroke={attack.color}

                  strokeWidth={3}

                  strokeLinecap="round"

                />

              ))}

              {/* MARKERS */}
              {markers.map((marker, index) => (

                <Marker
                  key={index}
                  coordinates={marker.coordinates}
                >

                  {/* PULSE */}
                  <circle
                    r={18}
                    fill="rgba(0,255,255,0.1)"
                  />

                  {/* MAIN */}
                  <circle
                    r={6}
                    fill="#00ffff"
                  />

                  {/* LABEL */}
                  <text

                    textAnchor="middle"

                    y={-25}

                    style={{
                      fill: "#ffffff",
                      fontSize: "12px",
                      fontWeight: "bold"
                    }}
                  >

                    {marker.name}

                  </text>

                </Marker>

              ))}

            </ComposableMap>

            {/* USA BOX */}
            <div className="
              absolute
              top-[230px]
              left-[30px]
              bg-black/70
              border
              border-red-500/30
              rounded-2xl
              p-4
              backdrop-blur-md
            ">

              <h3 className="font-bold">
                USA
              </h3>

              <p className="
                text-gray-400
                text-sm
                mt-1
              ">
                8,563 Attacks
              </p>

            </div>

            {/* GERMANY */}
            <div className="
              absolute
              top-[180px]
              left-[330px]
              bg-black/70
              border
              border-orange-500/30
              rounded-2xl
              p-4
              backdrop-blur-md
            ">

              <h3 className="font-bold">
                Germany
              </h3>

              <p className="
                text-gray-400
                text-sm
                mt-1
              ">
                4,327 Attacks
              </p>

            </div>

            {/* INDIA */}
            <div className="
              absolute
              top-[330px]
              left-[480px]
              bg-black/70
              border
              border-pink-500/30
              rounded-2xl
              p-4
              backdrop-blur-md
            ">

              <h3 className="font-bold">
                India
              </h3>

              <p className="
                text-gray-400
                text-sm
                mt-1
              ">
                12,842 Attacks
              </p>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div>

            <div className="
              bg-black/40
              border
              border-cyan-500/10
              rounded-3xl
              p-6
              h-full
            ">

              <h3 className="
                text-cyan-400
                font-bold
                mb-6
              ">

                LIVE ATTACK FEED

              </h3>

              <div className="
                space-y-5
              ">

                {[
                  {
                    name: "Ransomware",
                    level: "CRITICAL",
                    color: "red"
                  },

                  {
                    name: "PowerShell Exploit",
                    level: "HIGH",
                    color: "orange"
                  },

                  {
                    name: "Brute Force",
                    level: "MEDIUM",
                    color: "yellow"
                  },

                  {
                    name: "Recon Scan",
                    level: "LOW",
                    color: "cyan"
                  }

                ].map((item, index) => (

                  <div
                    key={index}
                    className="
                      border-b
                      border-gray-800
                      pb-4
                    "
                  >

                    <div className="
                      flex
                      justify-between
                      items-center
                    ">

                      <div>

                        <h4 className="
                          font-semibold
                        ">

                          {item.name}

                        </h4>

                        <p className="
                          text-gray-500
                          text-sm
                          mt-1
                        ">
                          2 sec ago
                        </p>

                      </div>

                      <span className={`
                        text-xs
                        font-bold

                        ${
                          item.color === "red"
                            ? "text-red-400"

                            : item.color === "orange"
                            ? "text-orange-400"

                            : item.color === "yellow"
                            ? "text-yellow-400"

                            : "text-cyan-400"
                        }
                      `}>

                        {item.level}

                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM CARDS */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-6
          mt-8
        ">

          {/* CARD */}
          <div className="
            bg-black/40
            border
            border-cyan-500/10
            rounded-3xl
            p-6
            flex
            items-center
            gap-4
          ">

            <Globe className="
              text-cyan-400
              w-12
              h-12
            " />

            <div>

              <p className="
                text-gray-400
                text-sm
              ">
                GLOBAL COVERAGE
              </p>

              <h2 className="
                text-4xl
                font-bold
                mt-2
              ">
                152+
              </h2>

            </div>

          </div>

          {/* CARD */}
          <div className="
            bg-black/40
            border
            border-cyan-500/10
            rounded-3xl
            p-6
            flex
            items-center
            gap-4
          ">

            <Brain className="
              text-cyan-400
              w-12
              h-12
            " />

            <div>

              <p className="
                text-gray-400
                text-sm
              ">
                AI DETECTION
              </p>

              <h2 className="
                text-4xl
                font-bold
                mt-2
              ">
                99.97%
              </h2>

            </div>

          </div>

          {/* CARD */}
          <div className="
            bg-black/40
            border
            border-cyan-500/10
            rounded-3xl
            p-6
            flex
            items-center
            gap-4
          ">

            <Zap className="
              text-cyan-400
              w-12
              h-12
            " />

            <div>

              <p className="
                text-gray-400
                text-sm
              ">
                RESPONSE TIME
              </p>

              <h2 className="
                text-4xl
                font-bold
                mt-2
              ">
                0.3s
              </h2>

            </div>

          </div>

          {/* CARD */}
          <div className="
            bg-black/40
            border
            border-cyan-500/10
            rounded-3xl
            p-6
            flex
            items-center
            gap-4
          ">

            <Shield className="
              text-cyan-400
              w-12
              h-12
            " />

            <div>

              <p className="
                text-gray-400
                text-sm
              ">
                THREATS STOPPED
              </p>

              <h2 className="
                text-4xl
                font-bold
                mt-2
              ">
                98,742
              </h2>

            </div>

          </div>

        </div>

      </motion.div>

    </section>

  );
}

export default ThreatHeatmap;