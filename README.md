# เว็บ Resume + Portfolio

สร้างด้วย [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) มีหน้าอังกฤษ (`/` ค่าเริ่มต้น) และไทย (`/th/`)

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

## แก้ Skills / Projects ผ่านหน้าเว็บ (`/admin`)
เปิด https://ffanthr.github.io/admin เพื่อเพิ่ม/ลบ/แก้ไข/เรียงลำดับ Skills และ Projects และอัปโหลดรูปผลงานได้ (หน้านี้ไม่มีในเมนู และตั้งไว้ไม่ให้ search engine เก็บ)

1. สร้าง token ที่ [Fine-grained tokens](https://github.com/settings/personal-access-tokens/new)
   - Repository access: **Only select repositories** → `ffanthr.github.io`
   - Repository permissions › **Contents: Read and write**
2. วาง token ในหน้า admin → **โหลดข้อมูล** → แก้ไข → **บันทึก**
3. ระบบจะ commit ไฟล์ข้อมูลเข้า repo แล้ว deploy เอง เว็บอัปเดตใน 1–2 นาที

คนอื่นเปิดหน้า `/admin` ได้ แต่บันทึกไม่ได้ เพราะไม่มี token ของคุณ

> ⚠️ หลังแก้ผ่าน `/admin` ไฟล์ใน repo จะใหม่กว่าในเครื่อง ก่อนแก้โค้ดในเครื่องให้รัน `git pull` ก่อนทุกครั้ง

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
