import type { Colors } from '@/themes'
import type { Href } from 'expo-router'

type HrefString = Href & string

export const tabColors:  Partial<Record<HrefString, Colors>> = {
  "/parents/home": 'pink',
  "/parents/teaching": 'purple',
  "/parents/therapy": 'green',
  "/therapist/home": 'purple',
  "/therapist/alert": 'pink'
}

export type TabColor = keyof typeof tabColors