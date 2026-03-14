import { useEffect, useRef, RefObject } from "react";

interface UseClickOutsideOptions {
  onClickOutside: () => void;
  enabled?: boolean;
  /** Escape 키로도 닫기 (기본: true) */
  escapeKey?: boolean;
  /** 제외할 요소 (예: 트리거 버튼) */
  excludeRef?: RefObject<HTMLElement | null>;
}

/**
 * 요소 외부 클릭 및 Escape 키 감지 훅
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  { onClickOutside, enabled = true, escapeKey = true, excludeRef }: UseClickOutsideOptions
) => {
  const callbackRef = useRef(onClickOutside);
  callbackRef.current = onClickOutside;

  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // 드롭다운 내부 클릭 무시
      if (ref.current?.contains(target)) return;

      // 제외 요소 클릭 무시
      if (excludeRef?.current?.contains(target)) return;

      callbackRef.current();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (escapeKey && event.key === "Escape") {
        callbackRef.current();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [ref, enabled, escapeKey, excludeRef]);
};
