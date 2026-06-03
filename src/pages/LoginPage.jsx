import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
  console.log("Button clicked");

  console.log("Email:", email);
  console.log("Password:", password);

const validEmail =
  localStorage.getItem("registeredEmail");

const validPassword =
  localStorage.getItem("registeredPassword");

  if (!validEmail) {
  setError("Account does not exist. Please sign up.");
  return;
}
  if (email !== validEmail) {
    setError("Email not found");
    return;
  }

  if (password !== validPassword) {
    setError("Incorrect password");
    return;
  }

  alert("Login Success");

  localStorage.setItem("isLoggedIn", "true");

  navigate("/dashboard");
};
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-[#0D1323] p-10 rounded-3xl w-[400px] border border-gray-700">

        <h1 className="text-4xl font-bold mb-8 text-cyan-400">
          Login
        </h1>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 mb-5"
        />

        {/* Password Input */}
        <div className="relative mb-5">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-gray-700"
          />

          {/* Eye Button */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-5">

          <a
            href="#"
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            Forgot Password?
          </a>

        </div>

        {/* Login Button */}
        {error && (
  <p className="text-red-500 mb-4">
    {error}
  </p>
)}
        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl"
        >
          Login
        </button>
<p className="mt-5 text-center">

  Don't have an account?

  <span
    onClick={() => navigate("/signup")}
    className="text-cyan-400 cursor-pointer ml-2"
  >
    Sign Up
  </span>

</p>
      </div>

    </div>
  );
}

export default LoginPage;