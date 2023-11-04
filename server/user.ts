import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

const cookieName = "fooflix-sso";
const secret = process.env.JWT_SECRET;

// cookie payload
// const token = jwt.sign({ notifications: 3, username: "Fred" }, secret);
// console.log(JSON.stringify({ token }));

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
    const decoded = jwt.verify(user.token, secret) as JwtPayload;
    return decoded;
  } catch (e) {
    console.error(e);
    return null;
  }
}
