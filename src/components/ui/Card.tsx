import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-lg border border-slate-200 bg-white p-4 shadow-sm ${className}`}
    >
      {children}
    </article>
  );
}