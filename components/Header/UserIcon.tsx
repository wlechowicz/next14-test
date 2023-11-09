import Link from "@/components/Link";
import NotificationIcon from "./NotificationIcon";
import { getUser } from "@/server/user";
import UserMenuToggle from "./UserMenuButton";

const Icon = () => (
  <img
    src="/user-profile.svg"
    alt="User profile icon"
    className="w-12 h-auto person"
  />
);

export default function UserIcon() {
  const user = getUser();

  return (
    <div className="h-full flex items-center justify-center relative">
      {user ? (
        <UserMenuToggle>
          <NotificationIcon user={user} />
          <Icon />
        </UserMenuToggle>
      ) : (
        <Link
          href="/sign-in"
          prefetch={false}
          className="block hover:[&_.person]:opacity-80 relative"
        >
          <Icon />
        </Link>
      )}
    </div>
  );
}
