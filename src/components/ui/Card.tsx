import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({
  children,
  className = "",
  interactive = false,
}: CardProps) {
  const interactiveClasses = interactive
    ? "transition-transform duration-200 ease-out hover:scale-[1.1] hover:rotate-[3deg]"
    : "";

  return (
    <article
      className={`rounded-lg border border-slate-200 bg-white p-4 shadow-sm ${interactiveClasses} ${className}`}
    >
      {children}
    </article>
  );
}