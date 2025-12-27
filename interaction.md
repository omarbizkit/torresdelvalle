# Torres del Valle - Interaction Design

## Core Interactive Components

### 1. Bilingual Language Toggle
- **Location**: Top-right of header navigation
- **Functionality**: Seamless switch between Spanish (ES) and English (EN) versions
- **Behavior**: Stores preference in cookie, switches entire site content including URLs
- **Visual**: Text-based buttons showing "ES" and "EN" with active state styling

### 2. Reservation Booking Widget
- **Location**: Dedicated reservations page and hero CTA
- **Multi-step Form**:
  - Step 1: Experience type dropdown (Classic Tasting, Private Tour, Harvest Experience, Events)
  - Step 2: Date picker with disabled past dates and Mondays/Tuesdays
  - Step 3: Guest count slider (1-12), contact details, dietary restrictions
  - Step 4: Confirmation with WhatsApp integration and calendar download
- **Validation**: Real-time form validation with user-friendly error messages
- **Integration**: FormSpark endpoint with WhatsApp confirmation

### 3. Wine Collection Filter
- **Location**: Wines page
- **Filter Options**: All Wines, Red Wines, White Wines, Rosé Wines
- **Behavior**: Instant filtering without page reload using Alpine.js
- **Display**: Grid layout with wine cards showing hover effects
- **Details**: Each card links to individual wine detail page

### 4. Interactive Experience Cards
- **Location**: Homepage and experiences page
- **Features**: Auto-advancing carousel on homepage, manual navigation
- **Content**: Experience images, duration, group size, pricing, inclusions
- **Hover States**: Smooth overlay effects revealing additional details
- **CTA**: Direct links to reservation widget with pre-selected experience

### 5. Image Gallery with Lightbox
- **Location**: Vineyard page and individual wine pages
- **Functionality**: Masonry grid layout with lazy loading
- **Interaction**: Click to open full-screen lightbox with navigation
- **Performance**: Optimized loading with progressive image enhancement

### 6. Contact Forms with Validation
- **Location**: Contact page and event inquiries
- **Fields**: Name, email, phone (with Mexican/US format validation), message
- **Behavior**: Real-time validation feedback, success/error states
- **Integration**: Email submission with confirmation messages

## User Journey Flows

### Primary Flow: Wine Enthusiast to Visitor
1. **Discovery**: Land on homepage via search or social media
2. **Exploration**: Browse wine collection with filtering
3. **Learning**: Read about vineyard history and terroir
4. **Engagement**: Explore experience offerings
5. **Conversion**: Complete reservation booking

### Secondary Flow: Event Planner
1. **Landing**: Events page from search or referral
2. **Research**: View venue options and services
3. **Inquiry**: Submit event inquiry form
4. **Follow-up**: Receive information packet via email

### Tertiary Flow: Wine Club Member
1. **Discovery**: Wine club page from main navigation
2. **Comparison**: Review membership tiers and benefits
3. **Signup**: Complete membership form with payment
4. **Onboarding**: Receive welcome information

## Accessibility Features

### Keyboard Navigation
- Full site navigation without mouse
- Visible focus indicators on all interactive elements
- Skip links for main content areas
- Logical tab order through forms and navigation

### Screen Reader Support
- Semantic HTML5 structure throughout
- ARIA labels for language toggle and mobile menu
- Alt text for all images and visual content
- Form labels properly associated with inputs

### Visual Accessibility
- Minimum 4.5:1 contrast ratio for all text
- Focus indicators with sufficient contrast
- No reliance on color alone for information
- Scalable text that maintains readability

## Mobile Responsiveness

### Navigation
- Collapsible hamburger menu for mobile
- Touch-friendly button sizes (minimum 44px)
- Swipe gestures for image galleries and carousels

### Forms
- Stacked form layouts for narrow screens
- Large touch targets for date pickers and dropdowns
- Optimized keyboard types for mobile inputs

### Content
- Responsive image sizing with proper aspect ratios
- Readable typography scaling across devices
- Simplified layouts that maintain visual hierarchy

## Performance Considerations

### Loading Strategy
- Critical CSS inlined for above-the-fold content
- Progressive image loading with lazy loading
- JavaScript loaded asynchronously for non-critical features
- Video content with placeholder images and user-initiated play

### Interaction Feedback
- Immediate visual feedback for all user actions
- Loading states for form submissions and data fetching
- Error states that guide users to correct issues
- Success confirmations that acknowledge completed actions