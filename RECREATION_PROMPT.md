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
