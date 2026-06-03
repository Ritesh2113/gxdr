import { motion } from "framer-motion";

import {

  ShieldCheck,
  Globe,
  BadgeCheck,
  Lock

} from "lucide-react";

function Partners() {

  const logos = [

    "Microsoft",
    "Google",
    "AWS",
    "Cloudflare",
    "Cisco",
    "IBM",
    "CrowdStrike",
    "Splunk"

  ];

  const testimonials = [

    {
      name: "Rahul Mehta",
      role: "SOC Director",

      company: "FinSecure",

      review:
        "GhostXDR transformed our incident response workflow completely."
    },

    {
      name: "Sarah Johnson",
      role: "Security Engineer",

      company: "CloudNova",

      review:
        "Real-time detection and automated response are incredibly accurate."
    },

    {
      name: "David Lee",
      role: "CISO",

      company: "SecureGrid",

      review:
        "The best AI-powered XDR platform we have deployed so far."
    }

  ];

  return (

    <section className="
      relative
      py-32
      px-6
      md:px-20
      bg-black
      overflow-hidden
    ">

      {/* GLOW */}
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
        mb-20
      ">

        <p className="
          text-cyan-400
          uppercase
          tracking-[4px]
          text-sm
        ">

          Trusted Worldwide

        </p>

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          mt-6
        ">

          Trusted by

          <span className="text-cyan-400">
            {" "}Global Enterprises
          </span>

        </h1>

        <p className="
          text-gray-400
          text-xl
          max-w-3xl
          mx-auto
          mt-8
        ">

          Industry-leading organizations
          trust GhostXDR to defend critical
          infrastructure worldwide.

        </p>

      </div>

      {/* LOGO MARQUEE */}
      <div className="
        relative
        z-10
        overflow-hidden
        mb-20
      ">

        <motion.div

          animate={{
            x: ["0%", "-50%"]
          }}

          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}

          className="
            flex
            gap-8
            w-max
          "
        >

          {[...logos, ...logos].map((logo, index) => (

            <div

              key={index}

              className="
                min-w-[220px]
                bg-white/5
                border
                border-gray-800
                rounded-3xl
                px-10
                py-8
                text-center
                text-2xl
                font-bold
                text-gray-300
                backdrop-blur-xl
              "
            >

              {logo}

            </div>

          ))}

        </motion.div>

      </div>

      {/* CERTIFICATIONS */}
      <div className="
        relative
        z-10
        grid
        grid-cols-1
        md:grid-cols-4
        gap-6
        mb-20
      ">

        {[
          {
            title: "ISO 27001",
            icon: ShieldCheck
          },

          {
            title: "SOC 2",
            icon: BadgeCheck
          },

          {
            title: "GDPR",
            icon: Globe
          },

          {
            title: "MITRE ATT&CK",
            icon: Lock
          }

        ].map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}

              className="
                bg-white/5
                border
                border-gray-800
                rounded-[32px]
                p-8
                backdrop-blur-xl
                text-center
              "
            >

              <div className="
                w-20
                h-20
                rounded-3xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
                mx-auto
                mb-6
              ">

                <Icon className="
                  w-10
                  h-10
                  text-cyan-400
                " />

              </div>

              <h2 className="
                text-3xl
                font-bold
              ">

                {item.title}

              </h2>

            </motion.div>

          );

        })}

      </div>

      {/* STATS */}
      <div className="
        relative
        z-10
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        mb-20
      ">

        {[
          {
            number: "152+",
            label: "Countries Protected"
          },

          {
            number: "98%",
            label: "Customer Satisfaction"
          },

          {
            number: "24/7",
            label: "Security Monitoring"
          }

        ].map((item, index) => (

          <div

            key={index}

            className="
              bg-white/5
              border
              border-gray-800
              rounded-[32px]
              p-10
              text-center
              backdrop-blur-xl
            "
          >

            <h1 className="
              text-6xl
              font-bold
              text-cyan-400
            ">

              {item.number}

            </h1>

            <p className="
              text-gray-400
              text-xl
              mt-4
            ">

              {item.label}

            </p>

          </div>

        ))}

      </div>

      {/* TESTIMONIALS */}
      <div className="
        relative
        z-10
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
      ">

        {testimonials.map((item, index) => (

          <motion.div

            key={index}

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}

            className="
              bg-white/5
              border
              border-gray-800
              rounded-[32px]
              p-8
              backdrop-blur-xl
            "
          >

            <p className="
              text-gray-300
              text-lg
              leading-relaxed
            ">

              "{item.review}"

            </p>

            <div className="
              mt-8
            ">

              <h3 className="
                text-2xl
                font-bold
              ">

                {item.name}

              </h3>

              <p className="
                text-cyan-400
                mt-2
              ">

                {item.role}

              </p>

              <p className="
                text-gray-500
                mt-1
              ">

                {item.company}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default Partners;