"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { z } from "zod";

const cookieName = "fooflix-sso";
const secret = process.env.JWT_SECRET;

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function setUser(prevState: any, formData: FormData) {
  if (!secret) {
    throw new Error("Missing JWT_SECRET in env");
  }

  try {
    const email = formData.get("email");
    const password = formData.get("password");
    userSchema.parse({
      email,
      password,
    });
  } catch (e) {
    return { message: "Invalid credentials" };
  }

  const store = cookies();
  const user = {
    username: "Fred",
    notifications: 3,
  };

  const token = jwt.sign(user, secret);

  store.set(cookieName, JSON.stringify({ token }), {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
    path: "/",
    sameSite: "lax",
  });

  return redirect("/");
}

export async function signOut() {
  const store = cookies();
  store.delete(cookieName);

  return redirect("/");
}
