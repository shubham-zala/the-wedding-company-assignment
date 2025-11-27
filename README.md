# Frontend Intern Assignment — Pixel-Perfect Desktop Site

> **Note**: This project was implemented to match the provided Figma prototype and pages exactly for desktop (1440px). It uses React + TypeScript + Tailwind and is production-ready for deployment on Vercel. All interactive states and accessibility requirements per the assignment brief have been implemented.

## 🔗 Links

- **Figma Prototype**: https://www.figma.com/proto/MHt6QPdmr1lKvJYiLMA1Tx/Front-End-Dev.-Assignment?node-id=18-359
- **Figma Design Pages**: https://www.figma.com/design/MHt6QPdmr1lKvJYiLMA1Tx/Front-End-Dev.-Assignment?node-id=0-1
- **Live Demo**: https://the-wedding-company-assignment.vercel.app/

---

## 🚀 Tech Stack

- React 18 + TypeScript  
- Tailwind CSS  
- Framer Motion (animations)  
- Vite (build tool)  
- ESLint + TypeScript strict mode  
- Deployed on Vercel  

---

## ✨ Features Implemented

### 🧩 Core Functionality
- Interactive quiz with 5 questions  
- Smooth animated transitions  
- Answer selection with visual states  
- Progress bar  
- Results screen with scoring  
- Restart quiz option  

### 🎨 Design Fidelity
- Pixel-perfect match to Figma  
- Custom design system (colors, spacing, fonts)  
- Playfair Display (headings)  
- Inter (body)  
- Accurate shadows, radius, spacing  
- Animated mascot  

### 🖱️ Interactive States
- Hover states  
- Focus-visible keyboard support  
- Active/pressed states  
- Disabled states  

### 🎞 Animations
- Page transitions  
- Slide animations  
- Fade-ins  
- Mascot float animation  
- Smooth micro-interactions  

### ♿ Accessibility
- Semantic HTML5  
- ARIA roles + labels  
- Fully keyboard accessible  
- Skip-to-content  
- Screen reader announcements  
- Minimum contrast AA compliant  

### ⚡ Performance
- Optimized Vite build  
- Preconnected Google Fonts  
- Fast load, minimal bundle size  

---

## 📁 Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   └── Quiz/
│   │       ├── QuizMascot.tsx
│   │       ├── ProgressBar.tsx
│   │       ├── QuestionCard.tsx
│   │       ├── AnswerOption.tsx
│   │       ├── NavigationButtons.tsx
│   │       └── ResultsScreen.tsx
│   ├── data/
│   │   └── quizData.ts
│   ├── pages/
│   │   └── Index.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── index.css
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🛠️ Setup & Installation

### 1. Clone Repository
```bash
git clone https://github.com/shubham-zala/the-wedding-company-assignment
cd the-wedding-company-assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Dev Server
```bash
npm run dev
```

App opens at:
```
http://localhost:5173
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment (Vercel)

1. Commit & push repository  
2. Go to https://vercel.com  
3. Import the GitHub repo  
4. Build settings auto-detected (Vite)  
5. Click **Deploy**

Or via CLI:

```bash
npm i -g vercel
vercel
```

---

## ♿ Accessibility Compliance

- Semantic HTML  
- ARIA attributes  
- Visible focus rings  
- Keyboard navigable  
- Skip link included  
- Screen reader friendly (aria-live)  
- Contrast AA compliant  

---

## 🎨 Design System (Summary)

- **Fonts**: Playfair Display, Inter  
- **Colors**: Cyan-based palette  
- **Spacing**: 4px grid system  
- **Animation timing**: 200–500ms  

---

## 🧪 Testing Checklist

- [x] Matches Figma at 1440px  
- [x] All hover states  
- [x] Keyboard navigation  
- [x] Score calculation  
- [x] Smooth animations  
- [x] No console errors  

Tested on:

- Chrome  
- Firefox  
- Safari  
- Edge  

---

## ⏱ Time Spent (Total ~8–10 hours)

- UI analysis: 1h  
- Components: 3h  
- Animations: 1.5h  
- Accessibility: 1h  
- Testing: 1h  
- Documentation: 1h  

---

## 👤 Author

**Shubham Zala**  
Frontend Developer  
GitHub: https://github.com/shubham-zala

---

