import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {

    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    alert("Account Created Successfully");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-[#0D1323] p-10 rounded-3xl w-[400px]">

        <h1 className="text-4xl font-bold mb-8 text-cyan-400">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 rounded-xl bg-black border border-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 rounded-xl bg-black border border-gray-700"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-cyan-500 text-black py-4 rounded-xl font-bold"
        >
          Sign Up
        </button>

      </div>

    </div>
  );
}

export default SignupPage;