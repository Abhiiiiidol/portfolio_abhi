import { ReactNode } from "react";

export default function FadeIn({ children, className = "" }: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={`animate-enter ${className}`}>{children}</div>;
}
