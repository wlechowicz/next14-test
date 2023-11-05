import type { UserData } from "@/types/UserData";

export default function NotificationIcon({ user }: { user: UserData | null }) {
  if (!(user && user.notifications)) return null;

  return (
    <div className="rounded-full bg-red-500 w-4 h-4 absolute top-0 right-0 flex items-center justify-center z-50">
      <span className="text-white text-xs font-bold">{user.notifications}</span>
    </div>
  );
}
