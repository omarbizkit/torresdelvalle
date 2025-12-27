# Torres del Valle - Website Demo

A production-ready, bilingual website for Torres del Valle, a boutique family-owned vineyard in Valle de Guadalupe, Baja California, Mexico.

## Features

- **Bilingual Support**: Spanish (primary) and English with seamless language switching
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Reservation system, wine filtering, image galleries
- **Performance Optimized**: Lazy loading, progressive enhancement, optimized images
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support
- **SEO Ready**: Structured data, meta tags, sitemap generation
- **Modern Stack**: Astro 4.0, TypeScript, Alpine.js for interactivity

## Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd torres-del-valle
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
torres-del-valle/
├── src/
│   ├── components/          # Reusable Astro components
│   ├── content/            # MDX content files
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   │   ├── en/            # English pages
│   │   └── es/            # Spanish pages (default)
│   └── i18n/              # Internationalization files
├── public/                 # Static assets
│   ├── images/            # Images and media
│   └── video/             # Video files
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## Pages Included

### Spanish (Default)
- `/` - Homepage
- `/nuestra-historia` - Our Story
- `/el-vinedo` - The Vineyard
- `/vinos` - Wines (with filtering)
- `/experiencias` - Experiences
- `/reservaciones` - Reservations (with booking widget)
- `/eventos` - Events
- `/visitanos` - Visit (directions, hours, accessibility)
- `/club` - Wine Club
- `/contacto` - Contact
- `/faq` - FAQ
- `/politicas` - Policies

### English
- `/en` - Homepage
- `/en/our-story` - Our Story
- `/en/the-vineyard` - The Vineyard
- `/en/wines` - Wines
- `/en/experiences` - Experiences
- `/en/reservations` - Reservations
- `/en/events` - Events
- `/en/visit` - Visit
- `/en/wine-club` - Wine Club
- `/en/contact` - Contact
- `/en/faq` - FAQ
- `/en/policies` - Policies

## Key Components

### Interactive Features
- **Reservation Widget**: Multi-step booking form with validation
- **Wine Filter**: Real-time filtering by wine type
- **Language Toggle**: Seamless switching between Spanish/English
- **Image Gallery**: Masonry layout with lightbox
- **Contact Forms**: Validation and submission handling

### Design System
- **Colors**: Stone (#C4A78E), Vineyard Green (#5A604E), Clay (#B8573E)
- **Typography**: Cormorant Garamond (display), Inter (body), Crimson Text (accents)
- **Spacing**: 8px base scale system
- **Animations**: Subtle reveal animations, hover effects

## Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Form submission endpoints
FORMSPARK_ID=your-formspark-id
RESEND_API_KEY=your-resend-api-key
STRIPE_PUBLIC_KEY=your-stripe-public-key

# Contact information
CONTACT_EMAIL=hola@torresdelvalle.mx
CONTACT_PHONE=+526461234567
```

### Internationalization
The site uses Astro's built-in i18n routing. Language preference is stored in a cookie and persists across sessions.

### Forms
- Reservation forms submit to FormSpark (placeholder configured)
- Contact forms include WhatsApp integration
- Email notifications via Resend (placeholder configured)
- Payment processing via Stripe (placeholder configured)

## Deployment

### Cloudflare Pages
1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push to main branch

### Other Platforms
The built site is static and can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Content Management

### Updating Content
- **Pages**: Edit MDX files in `src/content/pages/`
- **Images**: Place new images in `public/images/`
- **Hours**: Update YAML data file (create `hours.yml`)
- **Navigation**: Modify component files in `src/components/`

### Adding New Wines
1. Add wine data to the wines array in `src/pages/vinos.astro`
2. Upload wine bottle image to `public/images/wine-bottles/`
3. Create individual wine page if needed

### Adding Experiences
1. Add experience data to the experiences array
2. Upload hero image to appropriate directory
3. Update reservation widget with new experience options

## Accessibility Features

- **Keyboard Navigation**: Full site navigation without mouse
- **Screen Reader Support**: Semantic HTML, ARIA labels
- **High Contrast**: 4.5:1 minimum contrast ratios
- **Focus Indicators**: Visible focus states on all interactive elements
- **Alternative Text**: Descriptive alt text for all images
- **Skip Links**: Quick navigation to main content

## Performance Optimizations

- **Image Optimization**: Lazy loading, responsive images
- **CSS Optimization**: Critical CSS inlined, unused CSS removed
- **JavaScript**: Minimal JS, Alpine.js for essential interactivity only
- **Font Loading**: Optimized Google Fonts loading
- **Compression**: Gzip/Brotli compression enabled

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Tips

### Adding New Pages
1. Create Astro file in appropriate directory (`/pages/` or `/pages/en/`)
2. Add navigation link to Header component
3. Create MDX content file if needed
4. Update sitemap generation if applicable

### Styling
- Use Tailwind CSS utility classes
- Follow the 8px spacing scale
- Maintain brand color palette
- Test on mobile devices

### Testing
- Run Lighthouse audits for performance and accessibility
- Test keyboard navigation on all pages
- Verify bilingual functionality
- Check form submissions

## Support

For questions or issues, please contact:
- Email: hola@torresdelvalle.mx
- Phone: +52 646 123 4567
- WhatsApp: Available for quick questions

## License

This project is created for Torres del Valle. All rights reserved.

---

**Torres del Valle**  
Valle Roots. Family Soul.  
Since 1950, Growing Guadalupe's Character.