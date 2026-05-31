export const ease = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
};

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.12 } },
};

export const staggerItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease },
};

export const timelineItem = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease },
};

export const timelineLine = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  transition: { duration: 1, ease },
};
