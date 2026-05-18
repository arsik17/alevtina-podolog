# Podology Center Website for Alevtina Ligai

## Git Workflow
- Use `git add` to stage files, but NEVER run `git commit` yourself. Instead, provide the commit message to the user and let them commit manually.

## Context
Building a beautiful, modern, selling website for "Подологический центр Алевтины Лигай" — a podology center with locations in Almaty and Taraz, Kazakhstan. The reference site (podocenter.kz) is functional but dated; our goal is a significantly more modern, visually striking, and conversion-optimized site. Bilingual: Russian + Kazakh.

## Tech Stack
- **Next.js 15** (App Router) with static export for easy hosting
- **Tailwind CSS 4** for styling
- **next-intl** for Russian/Kazakh internationalization
- **Framer Motion** for scroll animations and transitions
- **Lucide React** for icons
- **TypeScript**

## Site Structure (Single-page with smooth scroll sections + i18n)

```
/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Root layout with fonts, metadata
│   │   └── page.tsx            # Main page composing all sections
│   └── layout.tsx              # Root layout (locale redirect)
├── components/
│   ├── Header.tsx              # Sticky nav + language switcher + CTA
│   ├── Hero.tsx                # Full-screen hero with gradient overlay
│   ├── About.tsx               # About Alevtina + trust signals
│   ├── Services.tsx            # Service cards with icons
│   ├── BeforeAfter.tsx         # Interactive before/after slider
│   ├── Pricing.tsx             # Inline pricing table
│   ├── Reviews.tsx             # Social proof (ratings + testimonials)
│   ├── Training.tsx            # Training/education section
│   ├── Locations.tsx           # City switcher (Almaty/Taraz) with maps
│   ├── Gallery.tsx             # Photo gallery grid
│   ├── CTA.tsx                 # Final call-to-action section
│   ├── Footer.tsx              # Footer with contacts + socials
│   ├── WhatsAppButton.tsx      # Floating WhatsApp button
│   └── CityContext.tsx         # Context for city switching
├── messages/
│   ├── ru.json                 # Russian translations
│   └── kk.json                 # Kazakh translations
├── public/
│   └── images/                 # Placeholder dir for real photos later
├── i18n.ts                     # next-intl config
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Sections (top to bottom)

### 1. Header (sticky)
- Logo/brand name "ALEVTINA" in elegant serif
- Nav links: О центре, Услуги, Цены, Галерея, Обучение, Контакты
- City picker pill: [Алматы | Тараз]
- Language toggle: RU | ҚЗ
- CTA button: "Записаться" → WhatsApp

### 2. Hero
- Full-viewport height, background gradient (soft rose/cream medical tones)
- Large heading: "Подологический центр Алевтины Лигай"
- Subheading about professional foot care
- Two CTAs: "Записаться на приём" (WhatsApp) + "Узнать больше" (scroll)
- Trust badges below: "5.0 рейтинг", "180+ отзывов", "2 города", "4+ года опыта"
- Subtle animated shapes/blobs in background

### 3. About
- Split layout: text left, photo placeholder right
- About Alevtina — founder, medical credentials
- License number: KZ230002057139
- Key differentiators (medical education, modern equipment, sterile conditions)
- Fade-in animation on scroll

### 4. Services
- Grid of 6-8 service cards with icons
- Services: Медицинский педикюр, Коррекция вросших ногтей, Лечение грибка, Ортезирование, Обработка стержневых мозолей, Диабетическая стопа, Консультация подолога, Мужской педикюр
- Each card: icon + title + short description + "Записаться" link
- Hover animations

### 5. Before/After Gallery
- Interactive drag slider component
- Placeholder images (will be replaced with real before/after photos)
- Caption text explaining the treatment

### 6. Pricing
- Clean table/card layout
- Service name + price range
- Note about consultation
- CTA to WhatsApp for exact pricing

### 7. Reviews / Social Proof
- 2GIS rating badge: 5.0 stars
- Review count: 147 (Almaty) + 34 (Taraz)
- 3-4 testimonial cards (placeholder text, can be filled later)
- Link to 2GIS profiles

### 8. Training
- Section about the training center for nail/podology masters
- Listed in both 2GIS profiles as "Обучение мастеров для салонов красоты"

### 9. Locations
- City switcher tabs (Almaty / Taraz)
- Address, phone, schedule, payment methods
- Embedded 2GIS/Google map iframe
- "Как добраться" info (nearest metro for Almaty)

### 10. Photo Gallery
- Masonry-style grid
- Lightbox on click
- Categories: Interior, Services, Staff

### 11. Final CTA
- Full-width gradient section
- "Запишитесь на консультацию прямо сейчас"
- WhatsApp button (large, prominent)
- Phone numbers for both cities

### 12. Footer
- Logo + description
- Quick nav links
- Contact info (both cities)
- Instagram link
- License info
- Copyright

### 13. Floating WhatsApp Button
- Fixed bottom-right
- Pulse animation
- Opens WhatsApp with pre-filled message
- Adapts to selected city (different phone number)

## Design System

### Colors
```
Primary:     #8B5E83 (muted mauve/plum — medical yet warm)
Primary-light: #B8899E
Accent:      #C9956B (warm gold)
Background:  #FBF8F5 (warm off-white)
Surface:     #FFFFFF
Text:        #2D2A32 (near-black with warmth)
Text-muted:  #6B6572
Success:     #4CAF50 (for ratings)
```

### Typography
- Headings: `Playfair Display` (elegant serif)
- Body: `Inter` (clean sans-serif)

### Animations
- Sections fade + slide up on scroll entry (Framer Motion `whileInView`)
- Service cards scale on hover
- Smooth scroll between sections
- Hero elements stagger-animate on load
- Before/after slider with drag interaction

## Build Sequence

1. **Project setup**: `create-next-app`, install dependencies, configure Tailwind + next-intl
2. **Layout + Header + Footer**: App shell with navigation and i18n
3. **Hero section**: The visual anchor of the site
4. **About section**: Trust-building content
5. **Services section**: Core offering cards
6. **Pricing section**: Inline pricing
7. **Before/After component**: Interactive slider
8. **Reviews section**: Social proof
9. **Training section**: Education offering
10. **Locations section**: City switcher + maps
11. **Gallery section**: Photo grid
12. **CTA + WhatsApp button**: Conversion elements
13. **Kazakh translations**: Complete kk.json
14. **Polish**: Responsive testing, animations tuning, meta tags

## Business Data (extracted from 2GIS)

### Almaty
- Name: Подологический центр Алевтины Лигай
- Address: проспект Жибек Жолы, 126а, 1 этаж
- Phone: +7 705 715 02 05
- WhatsApp: +7 707 567 88 93, +7 705 715 02 05
- Schedule: Mon-Sun 10:00-19:00 (по предварительной записи)
- Rating: 5.0 (147 reviews)
- Payment: Card, Cash, QR
- Coords: 43.261016, 76.933445
- Nearest metro: Жибек Жолы (1.1 km)

### Taraz
- Name: Alevtina, подологический центр
- Address: улица Айтеке би, 10
- Phone: +7 702 811 80 00
- WhatsApp: +7 702 811 80 00
- Schedule: Mon-Sun 10:00-19:00 (по предварительной записи)
- Rating: 5.0 (34 reviews)
- Payment: Cash, card transfer
- Coords: 42.895709, 71.371587
- Services extra: nail studios, house calls

### Shared
- Instagram: @alevtina_podolog.center
- License: KZ230002057139
- Also offers: Training for beauty salon masters

## Verification
1. `npm run dev` — site runs on localhost:3000
2. Navigate to `/ru` and `/kk` — both languages work
3. Click city switcher — contacts/map change
4. Test all nav links — smooth scroll to sections
5. Test WhatsApp buttons — opens WhatsApp with correct pre-filled message
6. Resize browser — responsive on mobile/tablet/desktop
7. `npm run build` — static export succeeds
