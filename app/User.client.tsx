"use client";

import type { UserData } from "./SomeUserStuff";

export default function User({ id, firstName }: UserData) {
  return (
    <div>
      click me:{" "}
      <button
        className="border-2 border-gray-400 rounded px-4 py-2"
        onClick={() => alert(`Hi, ${id}: ${firstName}`)}
      >
        I'm {firstName}!
      </button>
    </div>
  );
}
