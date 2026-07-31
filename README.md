# Viva Construct - Award-Winning Construction & Engineering Portfolio Website

> **Building Excellence. Creating Lasting Value.**

Viva Construct is a modern, responsive, award-winning portfolio website designed for a multi-million dollar Tier-1 global construction and engineering enterprise. Built using **React.js, Vite, Tailwind CSS, Framer Motion, Lucide Icons, and Swiper.js**.

---

## Key Features

- **Cinematic Hero Section**: Full-screen landing banner with animated headlines, dual CTA action triggers, and live animated stat counters.
- **11 Specialized Construction Services**: Interactive filterable cards with detail popups covering Residential, Commercial, Industrial, Civil Engineering, Road/Bridge Infrastructure, Seismic Retrofits, Interior Fit-Outs, Architecture, Structural Design, CM Services, and Facility Maintenance.
- **Landmark Projects Portfolio**: Filterable gallery by category, search bar by client/location, detailed case study modals with specs, gallery carousel, and investment scale tracking.
- **Executive Leadership & Experts**: Professional team grid with credentials, biographies, and contact actions.
- **Client Endorsements & Swiper Carousel**: Verified corporate reviews, star ratings, and interactive testimonial slider.
- **6-Stage Construction Workflow**: Visual timeline detailing discovery, 5D BIM planning, design optimization, groundwork, quality auditing, and asset handover.
- **ISO Certifications & Compliance**: Official ISO 9001, 14001, 45001, LEED Platinum, and OSHA safety verification cards.
- **Searchable Accordion FAQ**: Categorized query resolution system.
- **Technical Engineering Blog**: Insights on ultra-low carbon concrete, digital twin simulations, and seismic base isolation.
- **Interactive Proposal Desk**: Full contact page with interactive quote request form, 24/7 emergency hotline details, and Google Maps location embed.
- **SEO & Accessibility Compliance**: Dynamic schema.org JSON-LD structured data, meta descriptions, OpenGraph tags, ARIA attributes, sitemap.xml, and robots.txt.

---

## Color Palette & Theme Tokens

- **Primary (Deep Navy Blue)**: `#0A2342`
- **Secondary (Construction Orange/Amber)**: `#F4A300`
- **Accent (White)**: `#FFFFFF`
- **Background (Light Gray)**: `#F8F9FA`
- **Text (Dark Gray)**: `#2D2D2D`
- **Success**: `#3FA34D`

---

## Tech Stack & Dependencies

- **Frontend Core**: React.js 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism directives
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Sliders**: Swiper.js
- **Routing**: React Router DOM v6

---

## Getting Started & Installation

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation Steps

1. Clone or navigate to the project directory:
   ```bash
   cd viva_construct
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## Folder Structure

```text
viva_construct/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── common/         # Navbar, Footer, Modal, Breadcrumbs, BackToTop, Loader, SEOHead, CounterStat
│   ├── data/               # Services, Projects, Team, Testimonials, FAQ, Blog, Certifications, Process
│   ├── pages/              # Home, About, Services, Projects, Team, Testimonials, Process, Certifications, FAQ, Blog, Contact
│   ├── index.css           # Global design tokens & Tailwind imports
│   ├── App.jsx             # Router configuration & main layout
│   └── main.jsx            # React root entry
├── index.html
├── vite.config.js
└── package.json
```

---

## License

© 2026 Viva Construct Ltd. All Rights Reserved.
