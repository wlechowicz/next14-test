import Link from "next/link";
import NotificationIcon from "./NotificationIcon";
import { getUser } from "@/server/user";
import { Suspense } from "react";

export default async function UserIcon() {
  return (
    <div className="h-full flex items-center justify-center">
      <Link
        href="/sign-in"
        className="block hover:[&_.person]:opacity-80 relative"
      >
        <Suspense fallback={null}>
          <NotificationIcon />
        </Suspense>
        <img
          src="/user-profile.svg"
          alt="User profile icon"
          className="w-12 h-auto person"
        />
      </Link>
    </div>
  );
}
