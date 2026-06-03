import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
const [showFeatures, setShowFeatures] = useState(false);

  return (

    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-md
      bg-black/30
      border-b
      border-gray-800
    ">

      <div className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-6
        md:px-10
        py-5
      ">

        {/* Logo */}
        <h1 className="
          text-2xl
          font-bold
          text-cyan-400
          tracking-wider
        ">
          GhostXDR
        </h1>

        {/* Menu */}
        <div className="
          hidden
          md:flex
          items-center
          gap-10
          text-gray-300
        ">

          <div
  className="relative"
  onMouseEnter={() => setShowFeatures(true)}
  onMouseLeave={() => setShowFeatures(false)}
>

  <button
    className="
      hover:text-cyan-400
      duration-300
    "
  >
    Features
  </button>

  {showFeatures && (

    <div
      className="
        absolute
        top-10
        left-0
        w-64
        bg-[#0D1323]
        border
        border-gray-700
        rounded-xl
        shadow-xl
        p-2
        z-50
      "
    >

      <Link
  to="/live-attack-feed"
  className="block p-3 hover:bg-cyan-500/10 rounded-lg"
>
  Live Attack Feed
</Link>
      <Link
  to="/ai-security"
  className="block p-3 hover:bg-cyan-500/10 rounded-lg"
>
  AI Security Analyst
</Link>

      <Link
  to="/threat-heatmap"
  className="block p-3 hover:bg-cyan-500/10 rounded-lg"
>
  Threat Heatmap
</Link>

      <Link
  to="/core-features"
  className="block p-3 hover:bg-cyan-500/10 rounded-lg"
>
  Core Features
</Link>
      <Link
  to="/dashboard-preview"
  className="block p-3 hover:bg-cyan-500/10 rounded-lg"
>
  Dashboard Preview
</Link>

      <Link
  to="/attack-replay"
  className="block p-3 hover:bg-cyan-500/10 rounded-lg"
>
  Attack Replay
</Link>

      <Link
  to="/how-it-works"
  className="block p-3 hover:bg-cyan-500/10 rounded-lg"
>
  How GhostXDR Works
</Link>

    </div>

  )}

</div>

          <Link
            to="/docs"
            className="
              hover:text-cyan-400
              hover:drop-shadow-[0_0_8px_cyan]
              duration-300
            "
          >
            Docs
          </Link>

          <Link
            to="/pricing"
            className="
              hover:text-cyan-400
              hover:drop-shadow-[0_0_8px_cyan]
              duration-300
            "
          >
            Pricing
          </Link>

          <Link
            to="/login"
            className="
              hover:text-cyan-400
              hover:drop-shadow-[0_0_8px_cyan]
              duration-300
            "
          >
            Login
          </Link>

          {/* Start Button */}
          <button className="
            bg-cyan-500
            text-black
            px-6
            py-3
            rounded-xl
            font-bold
            hover:scale-105
            hover:shadow-[0_0_20px_cyan]
            duration-300
          ">
            Start
          </button>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;