import type { ResumeData } from './data/types';
import th from './data/resume.th.json';
import en from './data/resume.en.json';

export type Lang = 'th' | 'en';
export const data: Record<Lang, ResumeData> = { th, en };

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** แปลง path ของไฟล์ใน public/ ให้ถูกต้องตาม base ของเว็บ */
export function asset(p: string): string {
  if (!p) return '';
  if (/^(https?:|mailto:|tel:)/.test(p)) return p;
  return `${base}/${p.replace(/^\//, '')}`;
}

export function pageUrl(lang: Lang): string {
  return lang === 'en' ? `${base}/` : `${base}/th/`;
}

export function initials(name: string): string {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
}
