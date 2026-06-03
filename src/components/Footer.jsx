import {
  Mail,
  ShieldCheck
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

function Footer() {

  return (

    <footer className="
      relative
      bg-black
      border-t
      border-gray-800
      overflow-hidden
    ">

      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-[600px]
        h-[600px]
        bg-cyan-500/10
        blur-[180px]
        rounded-full
      "></div>

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        md:px-20
        py-20
      ">

        {/* TOP AREA */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-14
          mb-16
        ">

          {/* BRAND */}
          <div>

            <div className="
              flex
              items-center
              gap-4
              mb-6
            ">

              <div className="
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/10
                flex
                items-center
                justify-center
              ">

                <ShieldCheck className="
                  text-cyan-400
                  w-7
                  h-7
                " />

              </div>

              <h1 className="
                text-3xl
                font-bold
              ">

                GhostXDR

              </h1>

            </div>

            <p className="
              text-gray-400
              leading-relaxed
              text-lg
            ">

              AI-powered XDR platform for
              real-time threat detection,
              automated response and
              enterprise cyber defense.

            </p>

          </div>

          {/* DOCS */}
          <div>

            <h2 className="
              text-2xl
              font-bold
              mb-6
            ">

              Resources

            </h2>

            <div className="
              flex
              flex-col
              gap-4
            ">

              <a
                href="#"
                className="
                  text-gray-400
                  hover:text-cyan-400
                  duration-300
                "
              >
                Docs
              </a>

              <a
                href="#"
                className="
                  text-gray-400
                  hover:text-cyan-400
                  duration-300
                "
              >
                API
              </a>

              <a
                href="#"
                className="
                  text-gray-400
                  hover:text-cyan-400
                  duration-300
                "
              >
                GitHub
              </a>

              <a
                href="#"
                className="
                  text-gray-400
                  hover:text-cyan-400
                  duration-300
                "
              >
                Privacy
              </a>

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <h2 className="
              text-2xl
              font-bold
              mb-6
            ">

              Company

            </h2>

            <div className="
              flex
              flex-col
              gap-4
            ">

              <a
                href="#"
                className="
                  text-gray-400
                  hover:text-cyan-400
                  duration-300
                "
              >
                About
              </a>

              <a
                href="#"
                className="
                  text-gray-400
                  hover:text-cyan-400
                  duration-300
                "
              >
                Careers
              </a>

              <a
                href="#"
                className="
                  text-gray-400
                  hover:text-cyan-400
                  duration-300
                "
              >
                Contact
              </a>

              <a
                href="#"
                className="
                  text-gray-400
                  hover:text-cyan-400
                  duration-300
                "
              >
                Partners
              </a>

            </div>

          </div>

          {/* SOCIAL */}
          <div>

            <h2 className="
              text-2xl
              font-bold
              mb-6
            ">

              Connect

            </h2>

            <div className="
              flex
              gap-5
              mb-8
            ">

              {/* GITHUB */}
              <a

                href="#"

                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/5
                  border
                  border-gray-800
                  flex
                  items-center
                  justify-center
                  hover:border-cyan-500
                  hover:text-cyan-400
                  duration-300
                "
              >

                <FaGithub />

              </a>

              {/* LINKEDIN */}
              <a

                href="#"

                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/5
                  border
                  border-gray-800
                  flex
                  items-center
                  justify-center
                  hover:border-cyan-500
                  hover:text-cyan-400
                  duration-300
                "
              >

                <div className="text-cyan-400 font-bold">
  in
</div>
              </a>

              {/* MAIL */}
              <a

                href="#"

                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/5
                  border
                  border-gray-800
                  flex
                  items-center
                  justify-center
                  hover:border-cyan-500
                  hover:text-cyan-400
                  duration-300
                "
              >

                <Mail />

              </a>

            </div>

            <p className="
              text-gray-400
            ">

              support@ghostxdr.ai

            </p>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="
          border-t
          border-gray-800
          pt-8
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        ">

          <p className="
            text-gray-500
          ">

            © 2026 GhostXDR. All rights reserved.

          </p>

          <div className="
            flex
            gap-8
            text-gray-500
          ">

            <a
              href="#"
              className="
                hover:text-cyan-400
                duration-300
              "
            >
              Terms
            </a>

            <a
              href="#"
              className="
                hover:text-cyan-400
                duration-300
              "
            >
              Privacy
            </a>

            <a
              href="#"
              className="
                hover:text-cyan-400
                duration-300
              "
            >
              Security
            </a>

          </div>

        </div>

      </div>

    </footer>

  );
}

export default Footer;