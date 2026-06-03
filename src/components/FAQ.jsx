import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {

  Plus,
  Minus

} from "lucide-react";

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [

    {
      question: "How does AI detection work?",

      answer:
        "GhostXDR uses advanced machine learning models and behavioral analytics to identify anomalies, malware patterns and suspicious activities in real-time."
    },

    {
      question: "Does GhostXDR support cloud?",

      answer:
        "Yes. GhostXDR supports AWS, Azure, Google Cloud and hybrid cloud infrastructures with unified monitoring and protection."
    },

    {
      question: "Can I integrate SIEM tools?",

      answer:
        "Absolutely. GhostXDR integrates with popular SIEM platforms including Splunk, QRadar, Elastic and Microsoft Sentinel."
    },

    {
      question: "Is automated response supported?",

      answer:
        "Yes. GhostXDR provides automated threat containment, endpoint isolation, remediation workflows and intelligent response actions."
    }

  ];

  const toggleFAQ = (index) => {

    if (openIndex === index) {

      setOpenIndex(null);

    } else {

      setOpenIndex(index);

    }

  };

  return (

    <section className="
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

          Frequently Asked Questions

        </p>

        <h1 className="
          text-5xl
          md:text-7xl
          font-bold
          mt-6
        ">

          Everything About

          <span className="text-cyan-400">
            {" "}GhostXDR
          </span>

        </h1>

        <p className="
          text-gray-400
          text-xl
          max-w-3xl
          mx-auto
          mt-8
        ">

          Learn more about GhostXDR,
          integrations, AI security detection
          and automated cyber defense.

        </p>

      </div>

      {/* FAQ LIST */}
      <div className="
        relative
        z-10
        max-w-5xl
        mx-auto
        space-y-6
      ">

        {faqs.map((faq, index) => (

          <motion.div

            key={index}

            initial={{
              opacity: 0,
              y: 40
            }}

            whileInView={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}

            className="
              bg-white/5
              border
              border-gray-800
              rounded-[28px]
              backdrop-blur-xl
              overflow-hidden
            "
          >

            {/* QUESTION */}
            <button

              onClick={() => toggleFAQ(index)}

              className="
                w-full
                flex
                items-center
                justify-between
                p-8
                text-left
              "
            >

              <h2 className="
                text-2xl
                font-bold
              ">

                {faq.question}

              </h2>

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
                flex-shrink-0
              ">

                {

                  openIndex === index

                    ? <Minus className="
                        text-cyan-400
                        w-6
                        h-6
                      " />

                    : <Plus className="
                        text-cyan-400
                        w-6
                        h-6
                      " />
                }

              </div>

            </button>

            {/* ANSWER */}
            <AnimatePresence>

              {

                openIndex === index && (

                  <motion.div

                    initial={{
                      height: 0,
                      opacity: 0
                    }}

                    animate={{
                      height: "auto",
                      opacity: 1
                    }}

                    exit={{
                      height: 0,
                      opacity: 0
                    }}

                    transition={{
                      duration: 0.4
                    }}

                    className="
                      overflow-hidden
                    "
                  >

                    <div className="
                      px-8
                      pb-8
                    ">

                      <p className="
                        text-gray-400
                        text-lg
                        leading-relaxed
                      ">

                        {faq.answer}

                      </p>

                    </div>

                  </motion.div>

                )

              }

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default FAQ;