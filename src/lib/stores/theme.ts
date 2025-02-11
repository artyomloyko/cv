import { writable } from 'svelte/store';

export type ThemeType = 'light' | 'dark'

export const theme = writable<ThemeType>('light');