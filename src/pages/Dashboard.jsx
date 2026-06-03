import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
    }

  }, [navigate]);

  const userEmail = localStorage.getItem("userEmail");

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          GhostXDR Dashboard
        </h1>

        <p className="text-gray-400 mb-6">
          Welcome {userEmail}
        </p>

        <button
  onClick={() => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");

  }}
  className="
    mt-8
    bg-red-500
    px-6
    py-3
    rounded-xl
    font-bold
  "
>
  Logout
</button>

      </div>

    </div>
  );
}

export default Dashboard;