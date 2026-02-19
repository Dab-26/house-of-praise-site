# .bolt/config.json

```json
{
  "template": "bolt-vite-react-ts"
}

```

# .bolt/prompt

```
For all designs I ask you to make, have them be beautiful, not cookie cutter. Make webpages that are fully featured and worthy for production.

By default, this template supports JSX syntax with Tailwind CSS classes, React hooks, and Lucide React for icons. Do not install other packages for UI themes, icons, etc unless absolutely necessary or I request them.

Use icons from lucide-react for logos.

```

# .gitignore

```
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env

```

# BRAND_GUIDELINES.md

```md
# House of Praise Brand Guidelines

## Brand Overview

House of Praise is a contemporary worship band dedicated to creating authentic worship experiences that bridge heaven and earth. Our brand reflects sophistication, spiritual depth, and modern excellence in worship ministry.

### Brand Positioning
Contemporary worship band for the next generation - combining timeless reverence with modern expression.

### Brand Values
- Authenticity
- Excellence
- Community
- Spiritual Depth
- Innovation

---

## Color Palette

### Primary Colors

#### Cream
**Hex:** `#FAF9F6`
**RGB:** rgb(250, 249, 246)
**Usage:** Primary background color, light sections, text on dark backgrounds
**Psychology:** Purity, peace, elegance, sophistication

#### Charcoal
**Hex:** `#2C2C2C`
**RGB:** rgb(44, 44, 44)
**Usage:** Primary text color, dark backgrounds, footer, buttons
**Psychology:** Strength, authority, grounding, professionalism

#### Gold
**Hex:** `#C9A34C`
**RGB:** rgb(201, 163, 76)
**Usage:** Primary brand accent, call-to-action elements, active states, highlights
**Psychology:** Divine presence, glory, value, excellence

### Secondary Colors

#### Beige
**Hex:** `#DCC3A1`
**RGB:** rgb(220, 195, 161)
**Usage:** Subtle accents, decorative elements, backgrounds for icons
**Psychology:** Warmth, comfort, approachability

#### Light Gray
**Hex:** `#E5E5E5`
**RGB:** rgb(229, 229, 229)
**Usage:** Alternate section backgrounds, form inputs, subtle dividers
**Psychology:** Neutrality, balance, spaciousness

### Color Variations for UI

#### Text Opacity Levels
- **Primary Text:** Charcoal at 100% opacity (#2C2C2C)
- **Secondary Text:** Charcoal at 80% opacity (rgba(44, 44, 44, 0.8))
- **Tertiary Text:** Charcoal at 70% opacity (rgba(44, 44, 44, 0.7))
- **Disabled Text:** Charcoal at 50% opacity (rgba(44, 44, 44, 0.5))

#### Cream Text Variations (on dark backgrounds)
- **Primary:** Cream at 100% (#FAF9F6)
- **Secondary:** Cream at 70% opacity (rgba(250, 249, 246, 0.7))
- **Tertiary:** Cream at 50% opacity (rgba(250, 249, 246, 0.5))

#### Gold Variations
- **Standard:** #C9A34C
- **Light:** Gold at 60% opacity (rgba(201, 163, 76, 0.6))
- **Subtle:** Gold at 20% opacity (rgba(201, 163, 76, 0.2))

### Gradient Backgrounds

#### Hero Gradient
\`\`\`css
background: linear-gradient(to bottom right, #FFFFFF, #F8F5F2, #EADFD6);
\`\`\`

#### Card Gradient (Subtle)
\`\`\`css
background: linear-gradient(to bottom right, #F5F3F0, #E8E5E0);
\`\`\`

### Color Usage Rules

**DO:**
- Use cream as primary background for most content sections
- Use charcoal for primary text and dark sections
- Use gold sparingly as accent color for CTAs and important elements
- Maintain high contrast ratios for accessibility (minimum 4.5:1 for body text)

**DON'T:**
- Never use purple, indigo, or violet hues
- Don't use gold as a background color for large areas
- Avoid pure black (#000000) - use charcoal instead
- Don't mix warm and cool tones outside the defined palette

---

## Typography

### Font Families

#### Primary Serif: Playfair Display
**Source:** Google Fonts
**Fallback:** Georgia, serif
**Usage:** Headings, titles, brand name, section headers
**Characteristics:** Elegant, classical, sophisticated, high contrast

**Weights Available:**
- Light (300)
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)
- ExtraBold (800)
- Black (900)

**Recommended Weights:**
- Light (300): Large headings, hero text
- Bold (700): Emphasized headings, brand name

#### Primary Sans-Serif: Inter
**Source:** Google Fonts
**Fallback:** Helvetica, Arial, sans-serif
**Usage:** Body text, navigation, buttons, forms, captions
**Characteristics:** Modern, clean, highly readable, neutral

**Weights Available:**
- Thin (100) - not recommended
- ExtraLight (200) - not recommended
- Light (300)
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)
- ExtraBold (800) - not recommended
- Black (900) - not recommended

**Recommended Weights:**
- Light (300): Body paragraphs, descriptions
- Regular (400): Standard body text
- Medium (500): Subheadings, labels
- Bold (700): Buttons, emphasized text

### Font Sizes

#### Desktop Sizes

**Display Headings (Hero)**
- 9xl: 128px / 8rem (Hero main heading)
- 8xl: 96px / 6rem
- 7xl: 72px / 4.5rem

**Section Headings**
- 7xl: 72px / 4.5rem (Major section titles)
- 6xl: 60px / 3.75rem
- 5xl: 48px / 3rem

**Subheadings**
- 3xl: 30px / 1.875rem (Hero subheading)
- 2xl: 24px / 1.5rem (Feature titles)
- xl: 20px / 1.25rem (Card headings)

**Body Text**
- xl: 20px / 1.25rem (Large body, important paragraphs)
- lg: 18px / 1.125rem (Standard body text)
- base: 16px / 1rem (Regular body text)

**Small Text**
- sm: 14px / 0.875rem (Labels, captions, footer links)
- xs: 12px / 0.75rem (Fine print, helper text)

#### Mobile Sizes (Responsive Scaling)

**Display Headings**
- 7xl (desktop 9xl): 72px / 4.5rem
- 5xl (desktop 7xl): 48px / 3rem

**Section Headings**
- 5xl (desktop 7xl): 48px / 3rem
- 4xl (desktop 6xl): 36px / 2.25rem

**Subheadings**
- 2xl (desktop 3xl): 24px / 1.5rem
- xl (desktop 2xl): 20px / 1.25rem

**Body Text**
- lg (desktop xl): 18px / 1.125rem
- base (desktop lg): 16px / 1rem

### Typography Specifications

#### Line Height

**Headings:**
- Display/Hero: 0.9 (tight)
- Section headers: 1.1 (snug)
- Subheadings: 1.2

**Body Text:**
- Paragraphs: 1.5 (relaxed)
- Long-form content: 1.6-1.7
- Compact text: 1.4

#### Letter Spacing

**Headings:**
- Large display: -0.05em (tight tracking)
- Standard headings: -0.025em

**Uppercase Text:**
- Navigation: 0.15em (tracking-wider)
- Buttons/CTAs: 0.2em (tracking-widest)
- Small labels: 0.3em (tracking-widest)

**Body Text:**
- Normal tracking (0em)

#### Text Alignment
- Hero section: Left-aligned
- Section headings: Left-aligned or center (based on layout)
- Body paragraphs: Left-aligned
- Feature cards: Center-aligned
- Footer: Left-aligned in columns, center for copyright

### Typography Usage Guidelines

**DO:**
- Use Playfair Display for all headings and titles
- Use Inter for all body text and UI elements
- Maintain consistent hierarchy across sections
- Use light weights (300) for elegance on large text
- Use bold weights (700) sparingly for emphasis
- Apply wide letter spacing to uppercase text
- Keep line height relaxed for readability

**DON'T:**
- Don't mix more than 2 font families
- Avoid using more than 3 font weights per family
- Don't use all caps for long paragraphs
- Never use font sizes smaller than 12px (0.75rem)
- Don't use extreme weights (100, 900) except for special effects

---

## Logo & Brand Mark

### Logo Usage

**Primary Logo:**
Text-based logo using "House of Praise"
- Font: Playfair Display Bold (700)
- Size: 48px / 3rem (3xl) in standard contexts
- Color: Charcoal on light backgrounds, Cream on dark backgrounds

**Logo Variations:**
- Full: "House of Praise"
- Abbreviated: "HOP" (for very small applications)
- With Tagline: "House of Praise | Contemporary Worship"

### Clear Space
Maintain minimum clear space equal to the height of one letter around all sides of the logo.

### Minimum Size
- Digital: 120px width minimum
- Print: 1 inch width minimum

---

## Spacing System

### Base Unit: 8px

All spacing should follow the 8px grid system using Tailwind spacing scale:

- 1 unit = 4px (0.25rem)
- 2 units = 8px (0.5rem)
- 3 units = 12px (0.75rem)
- 4 units = 16px (1rem)
- 6 units = 24px (1.5rem)
- 8 units = 32px (2rem)
- 12 units = 48px (3rem)
- 16 units = 64px (4rem)
- 24 units = 96px (6rem)
- 32 units = 128px (8rem)

### Section Spacing

**Vertical Padding:**
- Major sections: 96-128px (py-24 to py-32)
- Sub-sections: 48-64px (py-12 to py-16)
- Card/Component internal: 32-48px (p-8 to p-12)

**Horizontal Padding:**
- Container edges: 24-48px (px-6 to px-12)
- Content max-width: 1280px (max-w-7xl)
- Form max-width: 896px (max-w-4xl)

**Element Gaps:**
- Between major elements: 32px (gap-8)
- Between related items: 16-24px (gap-4 to gap-6)
- Between text elements: 8-16px (gap-2 to gap-4)

---

## Shadows & Depth

### Shadow Elegant (Custom)
\`\`\`css
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
\`\`\`
**Usage:** Cards, images, forms, elevated containers

### Tailwind Shadow Utilities

**shadow-sm:** Subtle depth
\`\`\`css
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
\`\`\`

**shadow-2xl:** Dramatic depth
\`\`\`css
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
\`\`\`

**shadow-3xl:** Maximum depth (custom, used on hover)
\`\`\`css
box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
\`\`\`

---

## Border Radius

### Standard Radius Values

- **rounded-sm:** 2px (subtle rounding for images)
- **rounded:** 4px (standard for most elements)
- **rounded-lg:** 8px (cards, containers)
- **rounded-2xl:** 16px (special containers)
- **rounded-full:** 9999px (circular buttons, icons)

### Usage
- Images: rounded-sm (2px)
- Cards: rounded-lg (8px) or rounded-2xl (16px)
- Buttons: no rounding (sharp corners) or rounded-full for icon buttons
- Input fields: no rounding (sharp corners)

---

## Buttons & CTAs

### Primary Button (Gold)
**Background:** #C9A34C
**Text:** White (#FFFFFF)
**Hover:** Charcoal (#2C2C2C)
**Style:**
- Padding: 40px horizontal (px-10), 20px vertical (py-5)
- Font: Inter Bold (700)
- Size: 16px (text-base)
- Letter spacing: 0.2em (tracking-widest)
- Text transform: Uppercase
- Transition: 500ms

### Secondary Button (Outlined)
**Border:** 2px Charcoal (#2C2C2C)
**Text:** Charcoal (#2C2C2C)
**Background:** Transparent
**Hover:** Fill with Charcoal, text to White
**Style:** Same as primary button

### Icon Button (Circular)
**Size:** 36-40px (w-9 to w-10)
**Background:** Charcoal/90
**Icon color:** White
**Hover:** Gold (#C9A34C)
**Border radius:** Full (rounded-full)

---

## Animations & Transitions

### Standard Transitions
**Duration:** 300ms
**Easing:** ease-in-out
**Properties:** color, background-color, border-color, transform, opacity, box-shadow

### Hover Effects

**Images:**
- Scale: scale-105 (1.05)
- Rotation: ±1 degree
- Duration: 700ms

**Buttons:**
- Background color change
- Smooth transition
- Duration: 300-500ms

**Links:**
- Color to gold
- Duration: 300ms

### Special Animations

**Wave Animation (Music Section):**
\`\`\`css
@keyframes wave {
  0%, 100% { height: 1rem; }
  50% { height: 4rem; }
}
\`\`\`

**Bounce (Scroll Indicator):**
Tailwind's built-in animate-bounce

---

## Photography Style

### Image Guidelines

**Composition:**
- Natural, candid moments during worship
- High-quality, professionally shot
- Warm tones that complement the color palette
- Mix of wide shots and close-ups
- Authentic expressions and genuine emotion

**Color Treatment:**
- Warm, slightly desaturated
- Avoid high contrast or overly vibrant edits
- Maintain natural skin tones
- Complement cream and gold palette

**Aspect Ratios:**
- Hero images: 3:5 and 3:4
- About section: 3:4 and 1:1 (square)
- Always maintain aspect ratio, never stretch

**Filters & Effects:**
- Subtle vignetting acceptable
- Avoid heavy filters
- Keep editing minimal and natural

---

## Iconography

### Icon Style
**Library:** Lucide React
**Size:** 18-28px
**Stroke width:** 1.5-2px
**Style:** Outline/line icons (not filled)
**Color:** Inherits from parent or gold for accents

### Common Icons
- Music notes: Music2
- Social media: Facebook, Instagram (Lucide)
- Actions: Send, CheckCircle2
- Custom: Spotify (SVG)

---

## Voice & Tone

### Brand Voice
- **Inspirational** but not preachy
- **Authentic** and genuine
- **Professional** yet approachable
- **Contemporary** while respecting tradition
- **Passionate** without being overwhelming

### Writing Style

**Headlines:**
- Short and impactful
- Focus on transformation and encounter
- Example: "Prophetic Sound"

**Body Copy:**
- Conversational but elevated
- Use "we" to create community
- Balance spiritual language with accessibility
- Keep paragraphs concise (3-4 sentences)

**CTAs:**
- Action-oriented and clear
- Create urgency without pressure
- Examples: "Experience Now", "Send Booking Request"

---

## UI Component Guidelines

### Navigation
- Height: 80px
- Fixed position
- Transitions on scroll
- Active state indication

### Form Inputs
- Background: Light gray (#E5E5E5)
- Padding: 12-16px
- Focus state: Gold border
- Error state: Red border with message below

### Cards
- Background: Cream or gradient
- Shadow: shadow-elegant
- Padding: 32-48px
- Rounded corners: 8-16px

---

## Responsive Breakpoints

- **sm:** 640px (mobile landscape)
- **md:** 768px (tablet)
- **lg:** 1024px (desktop)
- **xl:** 1280px (large desktop)
- **2xl:** 1536px (extra large)

### Mobile-First Approach
Design for mobile first, then enhance for larger screens.

---

## Accessibility Standards

### Contrast Ratios
- Body text: Minimum 4.5:1
- Large text (18px+): Minimum 3:1
- Interactive elements: Minimum 3:1

### Interactive Elements
- Minimum touch target: 44x44px
- Focus states visible on all interactive elements
- ARIA labels on icon-only buttons

---

## File Naming Conventions

### Images
- Lowercase with hyphens
- Descriptive names
- Example: `band-member-worship.jpg`

### Components
- PascalCase
- Descriptive of function
- Example: `Navigation.tsx`, `Hero.tsx`

---

## Brand Applications

### Digital
- Website (primary)
- Social media graphics
- Email signatures
- Digital posters

### Print
- Event posters
- Business cards
- Merchandise
- Album artwork

---

**Last Updated:** October 2025
**Version:** 1.0

For questions or clarifications about these brand guidelines, contact the House of Praise creative team.

```

# eslint.config.js

```js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>House of Praise Band Website</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

# RECREATION_PROMPT.md

```md
# House of Praise Website Recreation Prompt

Create a modern, elegant single-page website for "House of Praise," a contemporary worship band. The site should have a sophisticated, premium feel with careful attention to detail.

## Technical Stack
- React 18+ with TypeScript
- Vite as build tool
- Tailwind CSS for styling
- Lucide React for icons
- Google Fonts: Playfair Display (serif) and Inter (sans-serif)

## Color Palette
- Cream: #FAF9F6 (primary background)
- Charcoal: #2C2C2C (primary text, dark sections)
- Beige: #DCC3A1 (accents)
- Gold: #C9A34C (primary brand color, CTAs)
- Light Gray: #E5E5E5 (section backgrounds)

## Layout & Structure

### 1. Navigation Bar
- Fixed position with smooth scroll behavior
- Transparent background initially, transitions to cream with blur on scroll
- Left side: Navigation links (Home, Music, About, Booking) in uppercase with wide letter spacing
- Right side: Social media icons (Facebook, Instagram, TikTok, Spotify, Pinterest)
- Active section highlighting with gold color
- Text color transitions: cream when transparent, charcoal when scrolled
- Height: 80px (5rem)
- Smooth transitions (300ms)

### 2. Hero Section
- Full viewport height
- Gradient background: from white (#FFFFFF) via light cream (#F8F5F2) to beige (#EADFD6)
- Two-column layout (5:7 ratio on large screens)

**Left Column:**
- Decorative line with label: "CONTEMPORARY WORSHIP" in small uppercase tracking-widest text
- Main heading: "House of Praise" in Playfair Display, 7xl-9xl size, bold weight, tight line height (0.9)
- Subheading: "Where heaven's sound meets earth's cry" in Inter, 2xl-3xl, light weight
- Two CTA buttons:
  - Primary: "EXPERIENCE NOW" - gold background, white text, hover to charcoal
  - Secondary: "OUR STORY" - outlined, transparent background, hover fills charcoal
- Buttons use uppercase, bold tracking-widest text

**Right Column:**
- 8-column grid of band member photos
- Alternating aspect ratios (3:5 and 3:4)
- Staggered vertical alignment (pt-12, pt-6, pt-3 variations)
- Each image has shadow-2xl and hover effects (scale-105, slight rotation)
- Decorative blur elements: gold/beige circular gradients positioned absolutely

**Bottom Center:**
- Animated scroll indicator: vertical line with bounce animation

### 3. Prophetic Sound (Music) Section
- Background: light-gray (#E5E5E5)
- Padding: 24-32 (py)

**Header:**
- Title: "Prophetic Sound" in Playfair Display, 5xl-7xl, light weight
- Animated sound wave visualization: 60 vertical bars with staggered wave animation
- Description text: "Sound that breaks through heaven and stirs every heart"

**Social Media Videos:**
- Three embedded videos side-by-side (TikTok, YouTube Shorts, Instagram Reel)
- Each video in a card with:
  - Soft gradient background (from #F5F3F0 to #E8E5E0)
  - Rounded corners (rounded-lg)
  - Width: 280px, aspect ratio 9:16
  - Gradient overlay on video (from transparent to background color)
  - Bottom section with platform name and clickable icon button
  - Icon button: circular, charcoal background, hover to gold
  - Shadow-elegant effect with hover shadow-2xl
- Gap between cards: 6 (24px)

**Spotify CTA:**
- Below videos, centered
- Button with Spotify icon, charcoal background, cream text
- Hover transitions to gold

### 4. About Section
- Background: cream (#FAF9F6)
- Padding: 24-32 (py)
- Two-column layout (1:1 on large screens)

**Left Column (Content):**
- Heading: "About Us" in Playfair Display, 5xl-7xl, light weight
- Three paragraphs of body text in light weight, large size (lg-xl)
- Decorative section at bottom:
  - Thin gold horizontal line
  - "Leading Worship Since 2020" in gold, uppercase, tracking-widest

**Right Column (Images):**
- 2-column grid with 4 images
- Alternating aspect ratios (3:4 and square)
- Second column offset with pt-8
- Rounded corners (rounded-sm)
- Shadow-elegant with hover scale-105 transition

**Bottom Grid (3 Features):**
- Three centered feature cards with icons
- Icons in circular beige/30 backgrounds, gold stroke color
- Icons: music notes, users, layers
- Titles in Playfair Display, 2xl
- Light gray descriptive text

### 5. Booking Section
- Background: light-gray (#E5E5E5)
- Padding: 24-32 (py)
- Max width: 4xl (56rem)

**Header:**
- Title: "Booking House of Praise" in Playfair Display, 5xl-7xl
- Subtitle text describing the purpose

**Form:**
- Background: cream with shadow-elegant
- Rounded corners (rounded-sm)
- Padding: 8-12 (p)
- Two-column grid for most inputs on desktop
- Fields: Name, Email, Phone, Event Date, Event Type (dropdown), Message (textarea)
- Input styling: light-gray background, border transitions to gold on focus
- Validation with error messages in red
- Submit button: charcoal background, cream text, uppercase tracking-widest
- Loading state with spinner animation
- Success state with check icon and thank you message

**Contact Info:**
- Below form: alternative email contact (booking@houseofpraise.com) in gold with hover underline

### 6. Footer
- Background: charcoal (#2C2C2C)
- Text: cream (#FAF9F6)
- Padding: 16 (py)
- Three-column grid

**Column 1:**
- Brand name in Playfair Display, 3xl
- Tagline in light weight, cream/70 opacity

**Column 2:**
- "Quick Links" heading in gold, uppercase, tracking-widest
- List of section links with hover gold transitions

**Column 3:**
- "Connect With Us" heading in gold
- Social media icons in circular containers (cream/10 background)
- Email contact link below icons

**Bottom:**
- Copyright notice centered, bordered top, cream/50 opacity

## Design Principles

### Typography
- Headings: Playfair Display (serif) - elegant, classical
- Body: Inter (sans-serif) - clean, modern
- Font weights: light (300), medium (500), bold (700)
- Generous letter spacing on uppercase text (tracking-wider, tracking-widest)
- Line height: relaxed for body text (leading-relaxed)

### Spacing
- Consistent 8px spacing system via Tailwind
- Section padding: 24-32 (96-128px)
- Element gaps: 4-8 (16-32px)
- Large whitespace for breathing room

### Colors & Contrast
- Neutral, sophisticated palette (cream, charcoal, gold)
- No purple, indigo, or violet hues
- Gold as primary accent/CTA color
- Text opacity variations for hierarchy (charcoal/70, charcoal/80, cream/70)

### Animations & Interactions
- Smooth transitions (300ms duration)
- Hover states: scale transforms (scale-105), color changes, shadow enhancements
- Scroll-triggered navigation background change
- Active section highlighting in navigation
- Button hover effects with background transitions
- Image hover effects with scale and slight rotation

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Grid layouts collapse to single column on mobile
- Navigation remains horizontal but could be adapted for mobile menu
- Font sizes scale down on smaller screens
- Padding and spacing adjust for mobile (smaller values)

### Accessibility
- Semantic HTML elements
- ARIA labels on icon-only buttons
- Focus states on interactive elements
- Sufficient color contrast ratios
- Smooth scroll behavior

## Special Effects

### Wave Animation (Music Section)
- 60 vertical bars (w-1, bg-gold/60, rounded-full)
- CSS keyframe animation cycling height from 1rem to 4rem
- Staggered animation delays (i * 0.05s)
- Variable duration (1 + (i % 3) * 0.2s)

### Shadow Elegant (Custom Utility)
- box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08)
- Applied to cards, images, forms

### Scroll Behavior
- Smooth scrolling throughout
- Navigation clicks offset by 80px for fixed header
- Section detection for active state highlighting

## Content Tone
- Inspirational and authentic
- Contemporary yet reverent
- Professional and approachable
- Focused on community and worship experience

## File Organization
- Separate component files: Navigation.tsx, Hero.tsx, Music.tsx, About.tsx, Booking.tsx, Footer.tsx
- Main App.tsx imports and arranges all sections
- Tailwind config extends default theme with custom colors and animations
- Custom CSS in index.css for base styles and utility animations

This website should feel premium, modern, and purposeful - reflecting the band's commitment to excellence in worship ministry.

```

# src/App.tsx

```tsx
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Music from './components/Music';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'music', 'about', 'booking'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Music />
      <About />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;

```

# src/assets/_S6C0122 copy copy copy.jpg

This is a binary file of the type: Image

# src/assets/_S6C0122 copy copy.jpg

This is a binary file of the type: Image

# src/assets/_S6C9830-Edit copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-02 copy copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-12 copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-18 copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-26 copy copy copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-26 copy copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-26 copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-29 copy copy copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-29 copy copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-29 copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-30 copy copy copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-30 copy copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-30 copy.jpg

This is a binary file of the type: Image

# src/assets/HOPs-57 copy copy.jpg

This is a binary file of the type: Image

# src/assets/ig_thumbnail copy.png

This is a binary file of the type: Image

# src/assets/tiktok_thumbnail copy.png

This is a binary file of the type: Image

# src/assets/youtube_thumbnail copy.png

This is a binary file of the type: Image

# src/components/About.tsx

```tsx
import member1 from '../assets/_S6C9830-Edit copy.jpg';
import member2 from '../assets/HOPs-29 copy copy copy.jpg';
import member3 from '../assets/HOPs-30 copy copy copy.jpg';
import member4 from '../assets/HOPs-26 copy copy copy.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal mb-8">
              About Us
            </h2>
            <div className="space-y-6 text-charcoal/80 font-light leading-relaxed">
              <p className="text-lg md:text-xl">
                House of Praise is more than a worship band—we're a movement of young believers
                passionate about creating space for authentic encounter with God.
              </p>
              <p className="text-base md:text-lg">
                Our sound blends contemporary worship with cinematic production, crafting
                atmospheres where the presence of God meets the heart of a generation. We believe
                that worship is both intimate and powerful, personal and collective.
              </p>
              <p className="text-base md:text-lg">
                From local church gatherings to regional conferences, we've seen God move in
                extraordinary ways. Our mission is simple: to lead this generation into wholehearted
                worship that transforms lives and awakens faith.
              </p>
              <div className="pt-6">
                <div className="inline-block">
                  <div className="h-px w-12 bg-gold mb-4" />
                  <p className="text-sm tracking-widest uppercase text-gold font-medium">
                    Leading Worship Since 2020
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-elegant">
                  <img
                    src={member1}
                    alt="Band member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden shadow-elegant">
                  <img
                    src={member2}
                    alt="Worship team"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-sm overflow-hidden shadow-elegant">
                  <img
                    src={member3}
                    alt="Band member with guitar"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-elegant">
                  <img
                    src={member4}
                    alt="Team member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-beige/30">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-3">Original Music</h3>
            <p className="text-charcoal/70 font-light leading-relaxed">
              Creating fresh sounds that resonate with today's generation
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-beige/30">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-3">Community Impact</h3>
            <p className="text-charcoal/70 font-light leading-relaxed">
              Building authentic relationships through worship and ministry
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-beige/30">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gold"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-charcoal mb-3">Kingdom Vision</h3>
            <p className="text-charcoal/70 font-light leading-relaxed">
              Advancing God's kingdom through excellence and authenticity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

```

# src/components/Booking.tsx

```tsx
import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  message: string;
}

const Booking = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        message: '',
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-light-gray">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal mb-6">
            Booking House of Praise
          </h2>
          <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto font-light">
            Let's create an unforgettable worship experience for your event
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-cream rounded-sm shadow-elegant p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gold/10">
              <CheckCircle2 className="text-gold" size={40} />
            </div>
            <h3 className="font-serif text-3xl text-charcoal mb-4">Thank You!</h3>
            <p className="text-charcoal/70 font-light text-lg">
              We've received your booking request and will get back to you within 24-48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-cream rounded-sm shadow-elegant p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray border ${
                    errors.name ? 'border-red-400' : 'border-transparent'
                  } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray border ${
                    errors.email ? 'border-red-400' : 'border-transparent'
                  } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray border ${
                    errors.phone ? 'border-red-400' : 'border-transparent'
                  } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-charcoal mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-light-gray border ${
                    errors.eventDate ? 'border-red-400' : 'border-transparent'
                  } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
                />
                {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="eventType" className="block text-sm font-medium text-charcoal mb-2">
                Event Type *
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-light-gray border ${
                  errors.eventType ? 'border-red-400' : 'border-transparent'
                } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal`}
              >
                <option value="">Select an event type</option>
                <option value="church-service">Church Service</option>
                <option value="youth-conference">Youth Conference</option>
                <option value="worship-night">Worship Night</option>
                <option value="retreat">Retreat</option>
                <option value="festival">Festival</option>
                <option value="other">Other</option>
              </select>
              {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                Additional Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-light-gray border ${
                  errors.message ? 'border-red-400' : 'border-transparent'
                } focus:border-gold focus:outline-none transition-colors duration-300 text-charcoal resize-none`}
                placeholder="Tell us about your event, expected attendance, venue details, and any special requirements..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto group relative inline-flex items-center justify-center gap-3 px-10 py-4 text-sm font-medium tracking-widest uppercase overflow-hidden transition-all duration-300 bg-charcoal text-cream hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Booking Request
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-12 text-center">
          <p className="text-charcoal/60 text-sm font-light">
            Prefer to reach out directly? Email us at{' '}
            <a href="mailto:booking@houseofpraise.com" className="text-gold hover:underline">
              booking@houseofpraise.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;

```

# src/components/Footer.tsx

```tsx
import { Instagram, Music2, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-3xl mb-4">House of Praise</h3>
            <p className="text-cream/70 font-light leading-relaxed">
              Awakening a generation through worship and authentic encounter with God.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-cream/70 hover:text-gold transition-colors duration-300 font-light"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#music"
                  className="text-cream/70 hover:text-gold transition-colors duration-300 font-light"
                >
                  Music
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-cream/70 hover:text-gold transition-colors duration-300 font-light"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-cream/70 hover:text-gold transition-colors duration-300 font-light"
                >
                  Booking
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-widest uppercase mb-4 text-gold">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.instagram.com/houseofpraisee/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/10 hover:bg-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@houseofpraisee?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/10 hover:bg-gold transition-colors duration-300"
                aria-label="TikTok"
              >
                <Music2 size={18} />
              </a>
              <a
                href="https://www.youtube.com/@House_Of_Praise/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/10 hover:bg-gold transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
            <p className="text-cream/70 font-light text-sm">
              <a href="mailto:info@thehop.net" className="hover:text-gold transition-colors">
                info@thehop.net
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 text-center">
          <p className="text-cream/50 text-sm font-light">
            © {currentYear} House of Praise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

# src/components/Hero.tsx

```tsx
import member1 from '../assets/_S6C0122 copy copy copy.jpg';
import member2 from '../assets/HOPs-57 copy copy.jpg';
import member3 from '../assets/HOPs-26 copy copy.jpg';
import member4 from '../assets/HOPs-29 copy copy.jpg';
import member5 from '../assets/HOPs-30 copy copy.jpg';
import member6 from '../assets/HOPs-02 copy copy.jpg';
import member7 from '../assets/HOPs-18 copy.jpg';
import member8 from '../assets/HOPs-12 copy.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#F8F5F2] to-[#EADFD6]"
    >

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-8 pt-32 md:pt-0">
            <div className="space-y-4 text-center md:text-left">
              <div className="hidden md:flex items-center gap-3 justify-center md:justify-start">
                <div className="w-16 h-[2px] bg-[#D8B36F]" />
                <span className="text-sm tracking-[0.3em] uppercase text-[#3B3B3B]/70 font-medium">Contemporary Worship</span>
              </div>

              <h1
                className="text-8xl md:text-8xl lg:text-9xl font-bold text-[#3B3B3B] leading-[0.9] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                House<br /><span className="text-4xl md:text-8xl lg:text-9xl md:font-bold of-word">of</span> Praise
              </h1>

              <p className="text-3xl md:text-3xl text-[#3B3B3B]/80 font-light leading-relaxed max-w-lg mx-auto md:mx-0" style={{ fontFamily: "'Inter', sans-serif" }}>
                Praise That Awakens a Generation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('music')}
                className="group relative px-10 py-5 text-base font-bold tracking-widest uppercase transition-all duration-500 bg-[#D8B36F] text-white hover:bg-[#3B3B3B] overflow-hidden"
              >
                <span className="relative z-10">Watch & Listen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B3B3B] to-[#1A1A1A] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <button
                onClick={() => scrollToSection('booking')}
                className="px-10 py-5 text-base font-bold tracking-widest uppercase transition-all duration-300 border-2 border-[#3B3B3B] text-[#3B3B3B] hover:bg-[#3B3B3B] hover:text-white"
              >
                Book Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative grid grid-cols-8 gap-3 md:gap-4">
              <div className="col-span-2 space-y-3 md:space-y-4">
                <div className="relative overflow-hidden aspect-[3/5] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <img
                    src={member1}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/4] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <img
                    src={member2}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2 space-y-3 md:space-y-4 pt-12">
                <div className="relative overflow-hidden aspect-[3/4] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <img
                    src={member3}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/5] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <img
                    src={member4}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2 space-y-3 md:space-y-4 pt-6">
                <div className="relative overflow-hidden aspect-[3/5] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <img
                    src={member5}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/4] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <img
                    src={member6}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="col-span-2 space-y-3 md:space-y-4 pt-3">
                <div className="relative overflow-hidden aspect-[3/4] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:-rotate-1">
                  <img
                    src={member7}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/5] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:rotate-1">
                  <img
                    src={member8}
                    alt="Band member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-[#D8B36F]/20 rounded-full blur-3xl" />
            <div className="absolute -left-8 top-1/3 w-48 h-48 bg-[#EADFD6]/40 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#D8B36F] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

```

# src/components/Music.tsx

```tsx
import igThumbnail from '../assets/ig_thumbnail copy.png';
import tiktokThumbnail from '../assets/tiktok_thumbnail copy.png';
import youtubeThumbnail from '../assets/youtube_thumbnail copy.png';

interface MediaItem {
  id: number;
  type: 'youtube' | 'instagram' | 'tiktok';
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description: string;
}

const Music = () => {
  const bars = Array.from({ length: 60 }, (_, i) => i);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'instagram',
      thumbnailUrl: igThumbnail,
      videoUrl: 'https://www.instagram.com/reel/DLspnCvIXAn/',
      title: 'Worship Moment',
      description: 'Experience our latest worship sessions',
    },
    {
      id: 2,
      type: 'tiktok',
      thumbnailUrl: tiktokThumbnail,
      videoUrl: 'https://www.tiktok.com/@houseofpraisee/video/7502520295979289878',
      title: 'Daily Praise',
      description: 'Join our community for daily inspiration',
    },
    {
      id: 3,
      type: 'youtube',
      thumbnailUrl: youtubeThumbnail,
      videoUrl: 'https://youtube.com/shorts/7UiS_oXKbn4',
      title: 'Live Sessions',
      description: 'Full worship experiences and more',
    },
  ];

  return (
    <section id="music" className="py-24 md:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal mb-6">
            Prophetic Sound
          </h2>
          <div className="flex items-center justify-center gap-1 mb-6 h-16">
            {bars.map((i) => (
              <div
                key={i}
                className="w-1 bg-gold/60 rounded-full animate-wave"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: `${1 + (i % 3) * 0.2}s`,
                }}
              />
            ))}
          </div>
          <p className="font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto font-light">
            Sound that breaks through heaven and stirs every heart
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {mediaItems.map((item, index) => (
              <a
                key={item.id}
                href={item.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block"
                style={{
                  transform: index === 1 ? 'scale(1.05)' : 'scale(1)',
                  zIndex: index === 1 ? 10 : 1,
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="aspect-[9/16] relative overflow-hidden bg-charcoal">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-charcoal/50 opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-xl">
                        <svg
                          className="w-7 h-7 text-charcoal ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        {item.type === 'instagram' && (
                          <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        )}
                        {item.type === 'tiktok' && (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                          </svg>
                        )}
                        {item.type === 'youtube' && (
                          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        )}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-cream text-lg font-medium mb-1">{item.title}</h3>
                      <p className="text-cream/80 text-sm font-light">{item.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-cream text-sm font-medium tracking-widest uppercase hover:bg-gold transition-colors duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Listen on Spotify
          </a>
        </div>
      </div>
    </section>
  );
};

export default Music;

```

# src/components/Navigation.tsx

```tsx
import { useState, useEffect } from 'react';
import { Instagram, Music2, Youtube, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                scrolled
                  ? activeSection === 'home' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                  : activeSection === 'home' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('music')}
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                scrolled
                  ? activeSection === 'music' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                  : activeSection === 'music' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
              }`}
            >
              Music
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                scrolled
                  ? activeSection === 'about' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                  : activeSection === 'about' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className={`text-sm font-light tracking-wider uppercase transition-colors ${
                scrolled
                  ? activeSection === 'booking' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                  : activeSection === 'booking' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
              }`}
            >
              Booking
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? 'text-charcoal' : 'text-cream'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/houseofpraisee/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold'
              }`}
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@houseofpraisee?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold'
              }`}
              aria-label="TikTok"
            >
              <Music2 size={18} />
            </a>
            <a
              href="https://www.youtube.com/@House_Of_Praise/shorts"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                scrolled ? 'text-charcoal hover:text-gold' : 'text-cream hover:text-gold'
              }`}
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-light tracking-wider uppercase transition-colors text-left ${
                  scrolled
                    ? activeSection === 'home' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                    : activeSection === 'home' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('music')}
                className={`text-sm font-light tracking-wider uppercase transition-colors text-left ${
                  scrolled
                    ? activeSection === 'music' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                    : activeSection === 'music' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
                }`}
              >
                Music
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm font-light tracking-wider uppercase transition-colors text-left ${
                  scrolled
                    ? activeSection === 'about' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                    : activeSection === 'about' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className={`text-sm font-light tracking-wider uppercase transition-colors text-left ${
                  scrolled
                    ? activeSection === 'booking' ? 'text-gold font-medium' : 'text-charcoal hover:text-gold'
                    : activeSection === 'booking' ? 'text-gold font-medium' : 'text-cream hover:text-gold'
                }`}
              >
                Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

```

# src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
}

@layer utilities {
  .font-serif {
    font-family: 'Playfair Display', serif;
  }

  .font-sans {
    font-family: 'Inter', sans-serif;
  }

  .shadow-elegant {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  @keyframes wave {
    0%, 100% {
      height: 1rem;
    }
    50% {
      height: 4rem;
    }
  }

  .animate-wave {
    animation: wave ease-in-out infinite;
  }

  @keyframes slow-zoom {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.15);
    }
  }

  .animate-slow-zoom {
    animation: slow-zoom 20s ease-in-out infinite alternate;
  }

  @keyframes waveAppear {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    50% {
      opacity: 1;
      transform: scaleY(1.2);
    }
    100% {
      opacity: 0.6;
      transform: scaleY(1);
    }
  }

  .of-word {
    font-family: 'Dancing Script', cursive;
  }

  @media (min-width: 768px) {
    .of-word {
      font-family: 'Playfair Display', serif;
      font-style: normal;
    }
  }
}

```

# src/main.tsx

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

# src/vite-env.d.ts

```ts
/// <reference types="vite/client" />

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        charcoal: '#2C2C2C',
        beige: '#DCC3A1',
        gold: '#C9A34C',
        'light-gray': '#E5E5E5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        drawWave: {
          'to': { strokeDashoffset: '0' }
        },
        waveAppear: {
          '0%': { opacity: '0', transform: 'scaleY(0)' },
          '50%': { opacity: '1', transform: 'scaleY(1.2)' },
          '100%': { opacity: '0.6', transform: 'scaleY(1)' }
        }
      },
      animation: {
        drawWave: 'drawWave 3s ease-in-out forwards',
        waveAppear: 'waveAppear 0.3s ease-out forwards',
      }
    },
  },
  plugins: [],
};

```

# tsconfig.app.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

```

# tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

# tsconfig.node.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}

```

# vite.config.ts

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

```

