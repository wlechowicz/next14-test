"use client";

import { useEffect } from "react";

export const useClickAway = (
  ref: React.RefObject<HTMLElement>,
  onClickAway: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway(event);
      }
    };
    document.addEventListener("click", handleClickAway);
    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, [ref, onClickAway]);
};
