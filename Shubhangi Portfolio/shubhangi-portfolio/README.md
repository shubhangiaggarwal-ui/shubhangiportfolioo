# Shubhangi Aggarwal &bull; Personal Portfolio Website

A modern, minimalist, and responsive personal portfolio website built for **Shubhangi Aggarwal**, a first-year **B.Tech Computer Science and Engineering (Core)** student at **JECRC University**.

---

## 🎨 Design System & Palette

- **Deep Navy Blue:** `#0B192C` (Headings, primary buttons, accents)
- **Rich Medium Navy:** `#1E3E62` (Hover states & brand highlights)
- **Muted Slate Blue:** `#4A6B82` (Subheadings, category tags, icons)
- **Off-White / Warm Canvas:** `#FAF8F5` (Base background)
- **Crisp Card White:** `#FFFFFF` (Surface cards)
- **Warm Beige Accent:** `#D4C3B3` & `#E8E2D9` (Borders, pill chips, dividers)
- **Typography:**
  - Headings: `Outfit` (Clean, geometric, editorial)
  - Body: `Plus Jakarta Sans` (Readable, contemporary)
  - Monospace/Code: `JetBrains Mono`

---

## 📂 Project Structure

```
shubhangi-portfolio/
│
├── index.html        # Complete semantic HTML5 structure with all sections
├── styles.css        # Modular CSS design system with CSS custom properties
├── script.js         # Lightweight, dependency-free JavaScript interactions
└── README.md         # Customization and GitHub Pages deployment guide
```

---

## 🚀 How to View Locally

1. Open File Explorer to:
   `C:\Users\Ritvika Mahla\.gemini\antigravity\scratch\shubhangi-portfolio`
2. Double-click **`index.html`** in any web browser (Google Chrome, Microsoft Edge, Firefox, Safari).
3. Alternatively, you can run a local development server using Python or VS Code Live Server:
   ```bash
   python -m http.server 8000
   ```
   and visit `http://localhost:8000`.

---

## 🌐 How to Publish for Free on GitHub Pages

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/) (using your account `shubhangiaggarwal-ui`).
   - Create a new public repository named `portfolio` or `shubhangiaggarwal-ui.github.io`.

2. **Push the Files**:
   ```bash
   git init
   git add .
   git commit -m "Initial release of portfolio website"
   git branch -M main
   git remote add origin https://github.com/shubhangiaggarwal-ui/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your repository, click **Settings** &rarr; **Pages**.
   - Under **Build and deployment > Source**, select `Deploy from a branch`.
   - Choose `main` branch and `/ (root)` folder, then click **Save**.
   - Your live website will be accessible globally at `https://shubhangiaggarwal-ui.github.io/portfolio/` in less than 2 minutes!

---

## 🛠️ How to Update as You Advance Through College

Every section is structured with clean semantic classes and comments so you can easily update it as your experience grows:

1. **Adding a New Project**:
   - In `index.html`, locate `<section id="projects">`.
   - Duplicate any `<article class="project-card">` block.
   - Update the title, description, tech stack tags (`tech-pill`), and repository link.

2. **Updating Technical Skills**:
   - In `index.html`, locate `<section id="skills">`.
   - Add new `<div class="skill-row">` items under Programming Languages, Web Development, or Tools as you learn Python, Java, Data Structures, SQL, React, etc.

3. **Adding New Certifications / Hackathon Wins**:
   - In `index.html`, locate `<section id="achievements">`.
   - Add a new `<div class="achievement-card">` with your certificate title, issuing organization, and date.

4. **Updating Education & CGPA**:
   - In `index.html`, locate `<section id="education">`.
   - Update the coursework tags or add your semester GPA / milestone achievements.

5. **Connecting a PDF Resume**:
   - Place your resume PDF (e.g. `Shubhangi_Aggarwal_Resume.pdf`) in the same folder.
   - Update the resume button in the Hero section:
     ```html
     <a href="Shubhangi_Aggarwal_Resume.pdf" target="_blank" class="btn btn-outline-navy">View Resume</a>
     ```

---

## 🔗 Integrated Links

- **LinkedIn:** [shubhangi-aggarwal-134b50418](https://www.linkedin.com/in/shubhangi-aggarwal-134b50418?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **GitHub:** [@shubhangiaggarwal-ui](https://github.com/shubhangiaggarwal-ui)
- **Email:** `shubhangi.aggarwal.dev@gmail.com`
