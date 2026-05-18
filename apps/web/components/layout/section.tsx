import { ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 sm:py-28 lg:py-36 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
