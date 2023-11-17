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

export const useFocusTrap = (
  ref: React.RefObject<HTMLElement>,
  onDismiss: () => void
) => {
  useEffect(() => {
    if (ref.current) {
      const focusableElements = ref.current.querySelectorAll(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleKeyPress = (event: KeyboardEvent) => {
        if (!ref.current) return false;

        // dismiss on escape
        if (event.key.toLowerCase() === "escape") {
          return typeof onDismiss === "function" && onDismiss();
        }

        // trap focus on tab or shift-tab
        if (event.key.toLowerCase() === "tab") {
          // if first element and shift-tab, focus last element
          if (event.target === firstElement && event.shiftKey) {
            event.preventDefault();
            lastElement.focus();
            return false;
          }

          // if last element and tab, focus first element
          if (event.target === lastElement && !event.shiftKey) {
            event.preventDefault();
            firstElement.focus();
            return false;
          }

          // if the focus is outside the trap, bring it back to the first element
          if (!ref.current.contains(event.target as Node)) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener("keydown", handleKeyPress);

      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [ref, onDismiss]);
};
