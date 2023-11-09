"use client";

import { useRef, useState } from "react";
import Link from "@/components/Link";
import { signOut } from "@/server/actions";
import { useClickAway } from "@/hooks";

const MenuItem = ({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) => {
  const Elem = ({ className }: { className: string }) =>
    onClick ? (
      <button onClick={onClick} className={className}>
        {label}
      </button>
    ) : (
      <Link href={href} prefetch={false} className={className}>
        {label}
      </Link>
    );
  return (
    <Elem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-gray-100 w-full text-left" />
  );
};

export default function UserMenuToggle({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickAway(menuRef, () => setIsOpen(false));

  return (
    <>
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="relative"
      >
        {children}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute right-2 bottom-2 translate-y-full w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
        >
          <MenuItem label="Your Profile" href="/profile" />
          <MenuItem label="Settings" href="/settings" />
          <MenuItem
            label="Sign out"
            href=""
            onClick={() => {
              signOut();
            }}
          />
        </div>
      )}
    </>
  );
}
