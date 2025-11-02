export const SPORTS = {
  FOOT: "FOOT",
  BASKET: "BASKET",
  TENNIS: "TENNIS",
} as const;

export type Sport = (typeof SPORTS)[keyof typeof SPORTS];
