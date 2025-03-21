import type { Colors } from "@/themes";
import type { Href } from "expo-router";

type HrefString = Href & string;

export const tabColors: Partial<Record<HrefString, Colors>> = {
  "/parents/home": "darkBlue",
  "/parents/teaching": "darkBlue",
  "/parents/therapy": "darkBlue",
  "/therapist/home": "purple",
  "/therapist/alert": "pink",
  "/educators/home": "purple",
  "/educators/alerts": "pink",
};

export type TabColor = keyof typeof tabColors;
