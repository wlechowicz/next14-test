"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`w-1/2 p-4 m-4 text-xl text-gray-900 bg-gray-100 rounded ${
        pending ? "animate-ping" : ""
      }`}
      disabled={!!pending}
    >
      {label}
    </button>
  );
}
