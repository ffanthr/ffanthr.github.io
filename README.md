# เว็บ Resume + Portfolio

สร้างด้วย [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) มีหน้าไทย (`/`) และอังกฤษ (`/en/`)

## แก้ไขข้อมูล
ข้อมูลทั้งหมดอยู่ใน 2 ไฟล์ — แก้แล้วเว็บเปลี่ยนตามทันที
- `src/data/resume.th.json` — ภาษาไทย
- `src/data/resume.en.json` — ภาษาอังกฤษ

ไฟล์รูปและเอกสารให้วางใน `public/` แล้วใส่ชื่อไฟล์ในข้อมูล
| ไฟล์ | ใส่ที่ช่อง |
|---|---|
| `public/profile.jpg` | `profile.photo` = `"profile.jpg"` |
| `public/resume.pdf` | `profile.resumePdf` = `"resume.pdf"` (ปุ่มดาวน์โหลดจะแสดงเอง) |
| `public/projects/xxx.png` | `projects[].image` = `"projects/xxx.png"` |

ช่องไหนเว้นว่าง (`""`) จะถูกซ่อนบนเว็บ

## รันบนเครื่อง
```bash
npm install
```
```bash
npm run dev
```
เปิด http://localhost:4321

> ใช้ Node 20 ได้ (ล็อก Astro 5 + Vite 6 ไว้แล้ว) ถ้าอัปเกรดเป็น Node 22 ภายหลังก็ใช้ได้เช่นกัน

## นำขึ้นออนไลน์ (GitHub Pages — ฟรี)
1. สมัคร/ล็อกอิน GitHub แล้วสร้าง repo ชื่อ **`<username>.github.io`** (Public)
2. แก้ `astro.config.mjs` → เปลี่ยน `USERNAME` เป็นชื่อผู้ใช้ GitHub ของคุณ
3. push โค้ดขึ้น repo:
   ```bash
   git remote add origin https://github.com/<username>/<username>.github.io.git
   ```
   ```bash
   git push -u origin main
   ```
4. ใน repo ไปที่ **Settings › Pages › Build and deployment › Source = GitHub Actions**
5. รอ Action ในแท็บ **Actions** ขึ้นเครื่องหมายถูก แล้วเปิด `https://<username>.github.io` — นี่คือ link ที่แนบตอนสมัครงาน

หลังจากนี้แก้ข้อมูล → commit → push ระบบจะอัปเดตเว็บให้อัตโนมัติ
