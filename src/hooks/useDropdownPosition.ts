import { useLayoutEffect, useState, RefObject } from "react";

type Placement = "bottom-left" | "bottom-right" | "top-left" | "top-right";

interface Position {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

interface UseDropdownPositionOptions {
  anchorRef: RefObject<HTMLElement | null>;
  isOpen: boolean;
  placement?: Placement;
  gap?: number;
}

export const useDropdownPosition = ({
  anchorRef,
  isOpen,
  placement = "bottom-left",
  gap = 8,
}: UseDropdownPositionOptions) => {
  const [position, setPosition] = useState<Position | null>(null);

  useLayoutEffect(() => {
    if (!isOpen || !anchorRef.current) return;

    const updatePosition = () => {
      const rect = anchorRef.current?.getBoundingClientRect();
      if (!rect) return;

      const pos: Position = {};

      if (placement.startsWith("bottom")) {
        pos.top = rect.bottom + gap;
      } else {
        pos.bottom = window.innerHeight - rect.top + gap;
      }

      if (placement.endsWith("right")) {
        pos.right = window.innerWidth - rect.right;
      } else {
        pos.left = rect.left;
      }

      setPosition(pos);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen, anchorRef, placement, gap]);

  return position;
};
