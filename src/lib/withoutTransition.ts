export function withoutTransition(fn: () => void): void {
  document.documentElement.classList.add("no-transition");
  fn();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("no-transition");
    });
  });
}
