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
      className={`py-24 md:py-32 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}