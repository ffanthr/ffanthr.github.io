export interface ResumeData {
  ui: {
    nav: { about: string; experience: string; education: string; skills: string; projects: string; certificates: string; contact: string };
    downloadResume: string;
    contactMe: string;
    present: string;
    viewCode: string;
    viewDemo: string;
    contactIntro: string;
    langSwitch: string;
    footer: string;
  };
  profile: {
    name: string;
    title: string;
    summary: string;
    photo: string;        // เช่น "profile.jpg" (วางไว้ใน public/) — เว้นว่างเพื่อแสดงตัวอักษรย่อ
    resumePdf: string;    // เช่น "resume.pdf" (วางไว้ใน public/) — เว้นว่างเพื่อซ่อนปุ่ม
    location: string;
  };
  about: string[];
  experience: { role: string; company: string; start: string; end: string; points: string[] }[];
  education: { degree: string; school: string; start: string; end: string; detail?: string }[];
  skills: { group: string; items: string[] }[];
  projects: { name: string; description: string; tech: string[]; image?: string; code?: string; demo?: string }[];
  certificates: { name: string; issuer: string; year: string }[];
  contact: { email?: string; phone?: string; linkedin?: string; github?: string; website?: string };
}
