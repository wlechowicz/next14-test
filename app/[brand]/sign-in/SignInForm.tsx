"use client";

import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
import { setUser } from "@/server/actions";

const initialState = {
  message: "",
};

export default function SignInForm() {
  const [state, formAction] = useFormState(setUser, initialState);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold text-gray-100 mb-8">Sign In</h1>
        <form
          className={`flex flex-col items-center justify-center w-full h-full ${
            state?.message ? "outline-red-900 outline-dashed" : "outline-none"
          }`}
          action={formAction}
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
          <SubmitButton label="Sign In" />
          {state?.message && (
            <p className="text-xl text-gray-100">{state?.message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
