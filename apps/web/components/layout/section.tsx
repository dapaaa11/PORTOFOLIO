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
      className={`py-20 sm:py-24 lg:py-32 scroll-mt-32 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
