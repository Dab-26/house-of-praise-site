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
```css
background: linear-gradient(to bottom right, #FFFFFF, #F8F5F2, #EADFD6);
```

#### Card Gradient (Subtle)
```css
background: linear-gradient(to bottom right, #F5F3F0, #E8E5E0);
```

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
```css
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
```
**Usage:** Cards, images, forms, elevated containers

### Tailwind Shadow Utilities

**shadow-sm:** Subtle depth
```css
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
```

**shadow-2xl:** Dramatic depth
```css
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

**shadow-3xl:** Maximum depth (custom, used on hover)
```css
box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
```

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
```css
@keyframes wave {
  0%, 100% { height: 1rem; }
  50% { height: 4rem; }
}
```

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
