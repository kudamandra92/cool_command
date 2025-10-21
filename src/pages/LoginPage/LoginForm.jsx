import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Here you can add real login logic later
    if (username && password) {
      // For now, just go to dashboard
      navigate("/dashboard");
    } else {
      alert("Please fill in both fields!");
    }
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <p className="mt-8 text-sm font-medium">Username</p>
      <input
        type="text"
        placeholder="NIK"
        className="text-xs border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className=" text-sm font-medium">Password</p>
      <input
        type="password"
        placeholder="Password"
        className="text-xs border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="text-sm font-semibold bg-greenish mt-10 text-white py-3 rounded-xl hover:bg-blueish transition"
      >
        Login
      </button>
    </form>
  );
}