# Torres del Valle - Project Outline

## File Structure

```
/mnt/okcomputer/output/
├── astro.config.mjs                 # Astro configuration with i18n
├── tailwind.config.cjs              # Tailwind with brand design tokens
├── package.json                     # Dependencies and scripts
├── README.md                        # Setup and deployment guide
├── public/
│   ├── images/
│   │   ├── hero-vineyard.jpg        # Main hero image
│   │   ├── family-portrait.jpg      # Torres siblings
│   │   ├── meliton-legacy.jpg       # Historical image
│   │   ├── wine-hero.jpg            # Wine collection hero
│   │   ├── experience-hero.jpg      # Tasting room
│   │   ├── wedding-hero.jpg         # Events page
│   │   ├── vineyard-gallery/        # 20 vineyard images
│   │   ├── wine-bottles/            # Individual wine photos
│   │   └── family/                  # Sibling portraits
│   ├── video/
│   │   └── hero-video.mp4           # 15s vineyard walk
│   └── favicon.ico                  # Generated from Stone color
├── src/
│   ├── components/
│   │   ├── Header.astro             # Bilingual navigation
│   │   ├── Footer.astro             # Site footer
│   │   ├── Hero.astro               # Hero section with video
│   │   ├── ExperienceCard.astro     # Experience listings
│   │   ├── WineCard.astro           # Wine collection cards
│   │   ├── Testimonial.astro        # Customer quotes
│   │   ├── Gallery.astro            # Masonry image grid
│   │   ├── ReservationWidget.astro  # Multi-step booking form
│   │   ├── FormField.astro          # Reusable form inputs
│   │   └── LanguageToggle.astro     # ES/EN switcher
│   ├── layouts/
│   │   └── Layout.astro             # Base page layout
│   ├── content/
│   │   ├── pages/
│   │   │   ├── index.es.mdx         # Spanish homepage
│   │   │   ├── index.en.mdx         # English homepage
│   │   │   ├── nuestra-historia.es.mdx
│   │   │   ├── our-story.en.mdx
│   │   │   └── [additional pages]
│   │   └── journal/
│   │       ├── nebbiolo-en-el-desierto.es.mdx
│   │       └── harvest-memories.en.mdx
│   ├── i18n/
│   │   └── ui.yml                   # UI string translations
│   └── pages/
│       ├── index.astro              # Spanish root
│       ├── en/
│       │   └── index.astro          # English root
│       ├── es/
│       │   ├── index.astro
│       │   ├── nuestra-historia.astro
│       │   ├── el-vinedo.astro
│       │   ├── vinos.astro
│       │   ├── experiencias.astro
│       │   ├── reservaciones.astro
│       │   ├── eventos.astro
│       │   ├── visitanos.astro
│       │   ├── club.astro
│       │   ├── journal/
│       │   │   ├── index.astro
│       │   │   └── [slug].astro
│       │   ├── faq.astro
│       │   ├── politicas.astro
│       │   └── contacto.astro
│       └── en/ [mirror structure]
```

## Page Specifications

### 1. Homepage (index.astro)
**Purpose**: Primary landing experience showcasing Torres del Valle
**Key Sections**:
- Hero with vineyard video or fallback image
- Story snippet with family legacy
- Experiences carousel (auto-advancing)
- Testimonials with author photos
- Instagram feed integration
- Newsletter signup (Mailchimp)
- JSON-LD LocalBusiness schema

**Interactive Elements**:
- Video play/pause controls
- Carousel navigation
- Language toggle
- CTA buttons to reservations and story

### 2. Our Story (nuestra-historia.astro / our-story.astro)
**Purpose**: Family heritage and brand narrative
**Key Sections**:
- 50/50 hero split (text/image)
- Vertical timeline component
- Family grid (3 siblings)
- Values grid with icons
- CTA to reservations

**Interactive Elements**:
- Timeline scroll animations
- Image hover effects
- Responsive grid layouts

### 3. The Vineyard (el-vinedo.astro / the-vineyard.astro)
**Purpose**: Terroir and winemaking practices
**Key Sections**:
- 3x2 terroir grid cards
- Practices accordion (5 items)
- Masonry gallery (20 images)
- Lazy loading implementation

**Interactive Elements**:
- Accordion expand/collapse
- Gallery lightbox
- Infinite scroll loading

### 4. Wines (vinos.astro / wines.astro)
**Purpose**: Wine portfolio with filtering
**Key Sections**:
- Wine hero image
- Sticky filter bar
- Wine grid (12 cards)
- Individual wine detail pages

**Interactive Elements**:
- Alpine.js filtering (no page reload)
- Wine card hover effects
- Modal/detail page navigation

### 5. Experiences (experiencias.astro / experiences.astro)
**Purpose**: Visit offerings and booking
**Key Sections**:
- Experience hero
- Experience cards (4 types)
- FAQ mini accordion
- Seasonal banner (harvest dates)

**Interactive Elements**:
- Experience card interactions
- FAQ expand/collapse
- Seasonal content display logic

### 6. Reservations (reservaciones.astro / reservations.astro)
**Purpose**: Booking system and form
**Key Sections**:
- Minimal hero
- Multi-step booking widget
- Policies sidebar (collapsible)
- Confirmation page

**Interactive Elements**:
- Form validation (Zod schema)
- Date picker with restrictions
- WhatsApp integration
- Calendar download (.ics)

### 7. Events (eventos.astro / events.astro)
**Purpose**: Wedding and event venue information
**Key Sections**:
- Wedding hero image
- Venue tabs (Indoor/Outdoor/Cocktail)
- Services and partners
- Event inquiry form
- Testimonials

**Interactive Elements**:
- Tab switching
- Image galleries per venue
- Form with file upload
- Slider for guest count

### 8. Visit (visitanos.astro / visit.astro)
**Purpose**: Practical visitor information
**Key Sections**:
- Embedded Google Map
- Directions tabs (4 routes)
- Hours (YAML data)
- Accessibility information

**Interactive Elements**:
- Map integration
- Tabbed directions
- Expandable sections

### 9. Wine Club (club.astro / wine-club.astro)
**Purpose**: Membership program signup
**Key Sections**:
- Pricing cards (3 tiers)
- Benefits comparison
- Signup form with Stripe
- FAQ section

**Interactive Elements**:
- Tier comparison
- Form validation
- Payment integration

### 10. Journal (journal/index.astro + [slug].astro)
**Purpose**: Blog and content marketing
**Key Sections**:
- Post grid (6 latest)
- Category filtering
- Individual post pages
- Author bios

**Interactive Elements**:
- Category filtering
- Pagination
- Related posts

### 11. Contact (contacto.astro / contact.astro)
**Purpose**: General contact and inquiries
**Key Sections**:
- Contact form
- Information grid
- Team photo
- Map integration

**Interactive Elements**:
- Form validation
- WhatsApp click-to-chat

### 12. FAQ & Policies (faq.astro, policies.astro)
**Purpose**: Legal and practical information
**Key Sections**:
- Accordion FAQ (10 questions)
- Policies markdown content
- Search functionality

**Interactive Elements**:
- Accordion expand/collapse
- Content search

## Component Architecture

### Core Components

**Header.astro**
- Sticky navigation with language toggle
- Mobile hamburger menu
- CTA button "Reservar"
- Accessibility features (skip link, ARIA)

**Footer.astro**
- 4-column layout
- Newsletter signup
- Social links (Instagram, WhatsApp)
- Copyright with brand tagline

**Hero.astro**
- Video/image hero with controls
- Gradient overlay for text contrast
- Typewriter animation support
- Responsive sizing

**ExperienceCard.astro**
- Horizontal desktop, stacked mobile
- Image, duration, price, group size
- Hover overlay effects
- Direct booking links

**WineCard.astro**
- 4:5 aspect ratio
- Hover effects with details reveal
- Price and vintage display
- Link to detail pages

**ReservationWidget.astro**
- Alpine.js state management
- Multi-step form with validation
- Progress indicator
- Error handling

**Gallery.astro**
- Masonry layout with CSS columns
- Lazy loading implementation
- Lightbox modal
- Keyboard navigation

### Utility Components

**FormField.astro** - Reusable form inputs with validation
**Testimonial.astro** - Quote display with author info
**LanguageToggle.astro** - Bilingual switcher with cookie storage

## Technical Implementation

### Internationalization (i18n)
- Astro's built-in i18n routing
- Spanish as default locale (/)
- English as secondary (/en/)
- UI strings in YAML format
- Content in MDX files

### Performance Optimization
- Critical CSS inlined
- Progressive image loading
- JavaScript loaded asynchronously
- Video lazy loading
- Cloudflare Pages integration

### Accessibility (WCAG 2.1 AA)
- 4.5:1 contrast ratios minimum
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Semantic HTML5 structure

### Form Handling
- Zod schema validation
- FormSpark endpoint integration
- WhatsApp confirmation
- Email notifications (Resend)
- Calendar file generation

### SEO & Meta
- JSON-LD structured data
- Open Graph tags
- Twitter Card support
- Sitemap generation
- Robots.txt configuration

## Content Strategy

### Spanish-First Approach
- All content written in Spanish first
- English as natural translation
- Cultural context preserved
- Regional expressions maintained

### Photography Requirements
- Golden hour vineyard landscapes
- Family portraits (natural, candid)
- Wine bottle and tasting room shots
- Soil and terroir close-ups
- Behind-the-scenes winemaking

### Content Themes
- Family heritage and legacy
- Terroir and winemaking process
- Valle de Guadalupe region
- Sustainable practices
- Hospitality and experiences

## Deployment & Development

### Build Process
- Astro build command
- Tailwind CSS processing
- Image optimization
- Sitemap generation

### Cloudflare Pages Setup
- GitHub integration
- Build command: npm run build
- Output directory: dist
- Environment variables for forms

### Testing Requirements
- Lighthouse accessibility score 100
- Cross-browser compatibility
- Mobile responsiveness
- Form functionality
- Language switching
- Navigation flow

### Maintenance
- Content updates via MDX files
- Image management in /public
- Form endpoint configuration
- SEO meta updates