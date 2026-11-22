// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: เปลี่ยน USERNAME เป็นชื่อผู้ใช้ GitHub ของคุณ
// ถ้าตั้งชื่อ repo เป็น "<username>.github.io" ให้ base เป็น '/'
// ถ้าใช้ชื่อ repo อื่น เช่น "resume" ให้ base เป็น '/resume'
export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
