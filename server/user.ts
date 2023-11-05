import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { UserData } from "@/types/UserData";

const cookieName = "fooflix-sso";
const secret = process.env.JWT_SECRET;

export function getUser() {
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
