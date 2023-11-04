import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { z } from "zod";

const cookieName = "fooflix-sso";
const secret = process.env.JWT_SECRET;

export type UserData = {
  username: string;
  notifications: number;
};

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function setUser(prevState: any, formData: FormData) {
  "use server";
  if (!secret) {
    throw new Error("Missing JWT_SECRET in env");
  }
  // validate formData with zod

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

export async function getUser() {
  if (!secret) {
    throw new Error("Missing JWT_SECRET in env");
  }

  const store = cookies();
  if (!store.has(cookieName)) {
    return null;
  }

  const stringified = store.get(cookieName)!.value;

  if (!stringified) {
    return null;
  }

  const user = JSON.parse(stringified);

  if (!user.token) {
    return null;
  }

  try {
    const decoded = jwt.verify(user.token, secret) as UserData;
    return decoded;
  } catch (e) {
    console.error(e);
    return null;
  }
}
