import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prepend Vite base URL to public asset paths */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/'
  const clean = path.startsWith('/') ? path.slice(1) : path
  return base + clean
}
