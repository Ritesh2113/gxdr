import { motion } from "framer-motion";

import {

  Shield,
  Zap,
  Crown,
  Check

} from "lucide-react";

function Pricing() {

  const plans = [

    {
      title: "Starter",

      price: "₹999",

      description:
        "Perfect for small businesses and startups.",

      icon: Shield,

      color: "cyan",

      features: [

        "Basic Threat Detection",
        "24/7 Monitoring",
        "Cloud Dashboard",
        "Email Alerts",
        "5 Devices Protected"

      ]
    },

    {
      title: "Pro",

      price: "₹4999",

      description:
        "Advanced AI-powered protection for teams.",

      icon: Zap,

      color: "pink",

      popular: true,

      features: [

        "AI Threat Detection",
        "Automated Response",
        "Threat Intelligence",
        "Attack Replay",
        "50 Devices Protected"

      ]
    },

    {
      title: "Enterprise",

      price: "Custom",

      description:
        "Enterprise-grade security for large organizations.",

      icon: Crown,

      color: "purple",

      features: [

        "Unlimited Devices",
        "Dedicated SOC Team",
        "Custom Integrations",
        "Advanced Forensics",
        "Priority Support"

      ]
    }

  ];

  return (

    <section className="
      relative
      py-32
      px-6
      md:px-20
      bg-[#020617]
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

          Pricing Plans

        </p>

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          mt-6
        ">

          Flexible Security

          <span className="text-pink-400">
            {" "}Pricing
          </span>

        </h1>

        <p className="
          text-gray-400
          text-xl
          max-w-3xl
          mx-auto
          mt-8
        ">

          Choose the perfect GhostXDR
          protection plan for your
          infrastructure and business needs.

        </p>

      </div>

      {/* PRICING GRID */}
      <div className="
        relative
        z-10
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
      ">

        {plans.map((plan, index) => {

          const Icon = plan.icon;

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

              className={`
                relative
                bg-white/5
                border
                backdrop-blur-xl
                rounded-[40px]
                p-10
                overflow-hidden

                ${
                  plan.popular
                    ? "border-pink-500 shadow-[0_0_40px_rgba(255,0,128,0.2)]"

                    : "border-gray-800"
                }
              `}
            >

              {/* POPULAR BADGE */}
              {plan.popular && (

                <div className="
                  absolute
                  top-6
                  right-6
                  bg-pink-500
                  text-black
                  px-4
                  py-2
                  rounded-full
                  text-sm
                  font-bold
                ">

                  MOST POPULAR

                </div>

              )}

              {/* ICON */}
              <div className={`
                w-24
                h-24
                rounded-3xl
                flex
                items-center
                justify-center
                mb-10

                ${
                  plan.color === "cyan"
                    ? "bg-cyan-500/10"

                    : plan.color === "pink"
                    ? "bg-pink-500/10"

                    : "bg-purple-500/10"
                }
              `}>

                <Icon className={`
                  w-12
                  h-12

                  ${
                    plan.color === "cyan"
                      ? "text-cyan-400"

                      : plan.color === "pink"
                      ? "text-pink-400"

                      : "text-purple-400"
                  }
                `} />

              </div>

              {/* TITLE */}
              <h2 className="
                text-4xl
                font-bold
              ">

                {plan.title}

              </h2>

              {/* PRICE */}
              <h1 className={`
                text-6xl
                font-black
                mt-8

                ${
                  plan.color === "cyan"
                    ? "text-cyan-400"

                    : plan.color === "pink"
                    ? "text-pink-400"

                    : "text-purple-400"
                }
              `}>

                {plan.price}

              </h1>

              {/* DESCRIPTION */}
              <p className="
                text-gray-400
                mt-6
                text-lg
                leading-relaxed
              ">

                {plan.description}

              </p>

              {/* FEATURES */}
              <div className="
                mt-10
                space-y-5
              ">

                {plan.features.map((feature, idx) => (

                  <div
                    key={idx}
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <div className="
                      w-8
                      h-8
                      rounded-full
                      bg-green-500/10
                      flex
                      items-center
                      justify-center
                    ">

                      <Check className="
                        w-4
                        h-4
                        text-green-400
                      " />

                    </div>

                    <span className="
                      text-gray-300
                    ">

                      {feature}

                    </span>

                  </div>

                ))}

              </div>

              {/* BUTTON */}
              <button className={`
                mt-12
                w-full
                py-5
                rounded-2xl
                font-bold
                text-lg
                duration-300

                ${
                  plan.color === "cyan"

                    ? "bg-cyan-500 text-black hover:bg-cyan-400"

                    : plan.color === "pink"

                    ? "bg-pink-500 text-black hover:bg-pink-400"

                    : "bg-purple-500 text-white hover:bg-purple-400"
                }
              `}>

                Get Started

              </button>

            </motion.div>

          );

        })}

      </div>

    </section>

  );
}

export default Pricing;