"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const user = {
      username: "Fred",
    };

    localStorage.setItem("fooflix-user", JSON.stringify(user));

    setTimeout(() => router.push("/"), 2000);

    return false;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold text-gray-100 mb-8">Sign In</h1>
        <form
          className="flex flex-col items-center justify-center w-full h-full"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-1/2 p-4 m-4 text-xl text-gray-900 bg-gray-100 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-1/2 p-4 m-4 text-xl text-gray-900 bg-gray-100 rounded"
          />
          <button
            type="submit"
            className={`w-1/2 p-4 m-4 text-xl text-gray-900 bg-gray-100 rounded ${
              loading ? "animate-ping" : ""
            }`}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
