"use client";

import { useState } from "react";
import Image from "next/image";

const LogInForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 👉 Handles input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "username") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  // 👉 Handles login click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // stop page reload
    console.log("Logging in with:", { username, password });

    // 🔑 Here you can check credentials against UserArray/context
  };

  return (
    <form
      className="bg-gray-900 p-6 rounded-lg shadow-md w-80 mx-auto text-white flex flex-col gap-4"
    >
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/sree-logo.png"
          alt="Sree Logo"
          width={100}
          height={100}
          className="rounded-full shadow mb-2"
        />
      </div>
      <h2 className="px-3 bg-red-400">Hi User, please log in to access the content.</h2>
      {/* Username */}
      <label htmlFor="username" className="text-sm">
        Username
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter username"
        className="px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* Password */}
      <label htmlFor="password" className="text-sm">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
        className="px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* Button */}
      <button
        onClick={handleClick}
        className="mt-4 bg-orange-600 hover:bg-orange-500 transition px-4 py-2 rounded font-semibold"
      >
        Log In
      </button>
    </form>
  );
};

export default LogInForm;
