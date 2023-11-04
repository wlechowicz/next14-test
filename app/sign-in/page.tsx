import SignInForm from "./SignInForm";
import { setUser } from "@/server/user";

export default function SignInPage() {
  return <SignInForm setUser={setUser} />;
}
