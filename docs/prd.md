# Ganesh Bahadur Thapa - Immersive Portfolio Requirements Document

## 1. Application Overview

**Application Name:** Ganesh Bahadur Thapa - Immersive Portfolio
\n**Application Description:** A high-performance, futuristic React-based portfolio website showcasing WordPress development expertise through immersive 3D interactions, advanced motion design, and premium UI/UX. The redesign transforms the existing portfolio into an Awwwards-level experience with complete content integration from resume data.

**Target Audience:** Potential clients, recruiters, and industry professionals seeking advanced frontend and WordPress development services.

---

## 2. Core Technology Stack

- **Frontend Framework:** React.js with Vite build tool
- **Styling:** Tailwind CSS + CSS Variables
- **Animation Engine:** GSAP (GreenSock Animation Platform) with ScrollTrigger plugin
- **Canvas Effects:** HTML5 Canvas API for fluid grid and particle system
- **Micro-interactions:** Framer Motion (supplementary)\n- **Smooth Scrolling:** Lenis or GSAP ScrollSmoother
- **UI Effects:** Glassmorphism, backdrop filters, gradient overlays
- **Legacy Support:** jQuery (only if strictly required for specific utilities)

---
\n## 3. Architecture & Code Quality

### Project Structure
```
src/
├── components/# Reusable UI components\n├── sections/         # Page sections (Hero, About, Skills, etc.)
├── hooks/            # Custom React hooks
├── animations/       # GSAP animation configurations
├── canvas/           # Canvas-based effects (FluidGrid, ParticleSystem)
├── utils/            # Helper functions\n└── styles/           # Global styles and Tailwind config
```

### Quality Standards
- Fully component-driven React architecture
- Mobile-first responsive design
- Performance-optimized (lazy loading, code splitting, efficient canvas rendering)
- Accessibility compliant (ARIA labels, keyboard navigation, prefers-reduced-motion support)
- Lighthouse score target: 90+ across all metrics

---
\n## 4. Header Navigation System

### Header Structure
- **Logo:** Display logo.jpg on the left side (height: 40-50px, maintain aspect ratio)
- **Navigation Menu:** Horizontal menu with links: Home, About, Skills, Experience, Projects, Contact
- **Hire Me Button:** Magnetic button on the right side with gradient styling
\n### Initial State (Top of Page)
- Full-width header integrated into hero section
- Standard height (70-80px)\n- Semi-transparent background: rgba(0, 0, 0, 0.6) with subtle backdrop blur
- Logo, menu, and button fully visible

### Scrolled State (GSAP-driven transition)
- Becomes sticky with smooth animation
- Height remains consistent (70-80px)
- Width shrinks to 88-92% of viewport and centers horizontally
- Adds subtle top offset gap (8-12px)
- **Fully rounded corners:** border-radius: 50px (pill-shaped)
- **Solid background:** rgba(0, 0, 0, 0.95) with enhanced backdrop blur (blur-xl)
- Soft gradient border: 1px solid rgba(168, 85, 247, 0.3)
- Refined shadow: 0 4px 20px rgba(0, 0, 0, 0.3)
- Zero layout shift during transition

### Mobile Behavior
- Collapses into floating pill-style navigation
- Hamburger menu with smooth slide-in animation
- Touch-optimized tap targets (min44x44px)
- Logo scales down proportionally
\n### Technical Implementation
- Use GSAP ScrollTrigger to detect scroll position (trigger at 100px scroll)
- Animate header properties (width, border-radius, background opacity, blur, shadow) with custom easing
- Maintain60fps performance during scroll
- Menu items have hover glow effect (purple accent)
\n---

## 5. Global Motion System

### Animation Framework
- **Primary Engine:** GSAP for all major animations
- **ScrollTrigger:** Section reveals, parallax effects, text splitting animations
- **Smooth Scrolling:** Lenis or GSAP ScrollSmoother for physics-based scroll behavior
- **Easing:** Custom cubic-bezier curves for natural motion feel

### Animation Patterns
- Staggered fade-in for section content
- Parallax scrolling for background elements
- Text reveal animations (split text, character-by-character)
- Scroll-linked progress indicators
- Magnetic hover effects on interactive elements

---

## 6. Custom Cursor System

### Desktop Cursor Features
- **Central Dot:** 20px diameter white circle with enhanced glow effect
- **Glow Styling:**
  - Inner glow: 00 15px 5px rgba(255, 255, 255, 0.8)
  - Outer glow: 0 0 30px 15px rgba(168, 85, 247, 0.6)
- Smooth position tracking with minimal lag (0.05s linear transition)
- Automatically disabled on touch devices
- z-index: 100 to stay above all content

### Implementation Notes
- Fixed positioning with transform: translate(-50%, -50%) for perfect centering
- Update position on mousemove event
- Pointer-events: none to avoid blocking interactions
\n---

## 7. Fluid Grid & Particle System

### Canvas Background Effect
- **Full-screen canvas:** Fixed position, z-index: 1, behind all content
- **Background color:** #030303 (near-black)\n- **Grid specifications:**
  - Cell size: 35px\n  - Grid color: rgba(168, 85, 247, 0.12) (subtle purple)
  - Dynamic grid that responds to mouse movement
\n### Fluid Dynamics Behavior
- **Effect radius:** 180px around cursor
- **Force calculation:** (effectRadius - distance) / effectRadius
- **Displacement:** Points pushed away from cursor with force multiplier of 12
- **Spring-back:** 0.06spring constant pulling points to base position
- **Damping:** 0.82 velocity damping for smooth motion
- **Physics update:** Each grid point has velocity (vx, vy) and current position

### Particle Trail System
- **Trigger:** Generate3particles when mouse moves more than 2px
- **Particle properties:**
  - Size: Random between 1-4px
  - Speed: Random velocity between -2 to +2 on both axes
  - Color: rgba(168, 85, 247, opacity) (purple)
  - Life: Starts at 1.0, decays by 0.01-0.03 per frame
- **Rendering:** Circular particles with alpha fade-out
- **Cleanup:** Remove particles when life reaches 0

### Radial Glow Effect
- **Active when:** Mouse is moving on canvas
- **Gradient specs:**
  - Center: rgba(168, 85, 247, 0.3)
  - Radius: 200px
  - Edge: Transparent
- **Tighter glow:** Concentrated around cursor position
\n### Canvas Performance
- **Trail effect:** ctx.fillRect with rgba(3, 3, 3, 0.4) for motion blur
- **Frame rate target:** 60fps
- **Resize handling:** Reinitialize grid on window resize
- **Mobile optimization:** Reduce particle count and effect radius on touch devices

---
\n## 8. Interactive UI Components

### 3D Hover Cards
- Tilt effect on mouse movement (react-tilt or custom GSAP implementation)
- Depth shadow that follows tilt direction
- Subtle glow effect on hover
- Smooth transition between states

### Magnetic Buttons
- **Magnetic attraction:** Calculate offset based on mouse position relative to button center
- **Transform formula:** translate((mouseX - centerX) * 0.4px, (mouseY - centerY) * 0.4px)
- **Reset on mouseleave:** Smooth return to translate(0px, 0px)
- **Visual styling:**
  - Background: linear-gradient(45deg, #a855f7, #ec4899)
  - Border-radius: 99px (pill shape)
  - Padding: 0.8rem 2.5rem
  - Box-shadow: 0 10px 20px -5px rgba(168, 85, 247, 0.5)
  - Font-weight: 700
- **Transition:** 0.2s cubic-bezier(0.23, 1, 0.32, 1)

### Project Cards
- Tactile, responsive hover states
- 3D transform on interaction
- Image zoom or parallax effect
- Smooth color overlay transitions

---

## 9. Section-Specific Content & Enhancements

### Hero Section
- **Content:**
  - Main heading: 'GANESH BAHADUR THAPA'\n  - Subtitle: 'WordPress Developer'
  - Brief tagline: 'Expert WordPress developer with considerable hands-on experience developing, optimizing, and accelerating various WordPress sites'
  - Social links: @wex-ocean (GitHub/social handle)
  - Portfolio link: https://ocean-pi.vercel.app/
  - Contact: 9742391729, oceanney5555@gmail.com
  - Location: Imadol, Lalitpur\n- **Visual Effects:**
  - Cinematic entrance animation (fade-in + scale)
  - Fluid grid canvas as background layer
  - Animated text reveal (split text, staggered characters)
  - Floating profile card with glassmorphism:\n    - Background: rgba(0, 0, 0, 0.4)
    - Backdrop-filter: blur(15px)
    - Border: 1px solid rgba(168, 85, 247, 0.2)
    - Border-radius: 32px
    - Padding: 3rem\n  - Scroll indicator with animated arrow
  - Display Resume.jpg profile photo with subtle glow effect

### About Section\n- **Content (from Resume):**
  - Summary: 'Expert WordPress developer with considerable hands-on experience developing, optimizing, and accelerating various WordPress sites. Expert at debugging, optimizing SEO and loading speed, as well as covering hosting, DNS, SSL, and complete projects from start to finish. I'm capable of developing any site, ranging from business and e-commerce sites to custom projects and doing it all with efficiency and speed.'
  - Display profile photo from Resume.jpg
- **Visual Effects:**
  - Animated depth grid background
  - Photo slot with hover tilt effect
  - Text content fades in on scroll
  - Two-column layout (photo left, text right on desktop)
\n### Skills Section
- **Content (from Resume):**
  1. WordPress Theme & Plugin Customization, Elementor / Gutenberg
  2. PHP, MySQL, Tailwind CSS, jQuery, JavaScript, HTML, CSS
  3. WooCommerce Setup & Customization
  4. SEO Optimization & Speed Optimization, Debugging & Problem-Solving
  5. cPanel / Hosting / DNS / SSL\n  6. Git, GitHub, Vercel, Figma, Responsive UI/UX Design
- **Visual Effects:**
  - Grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
  - Hover-activated depth cards with3D tilt
  - Icon animations on card hover (use relevant tech icons)
  - Scroll-triggered stagger reveal
  - Each card has glassmorphic background with purple accent border

### Experience Section\n- **Content (from Resume):**
  1. **WordPress Developer, JoogleTech Pvt. Ltd** (July 2025 - Present)
     - Designed custom themes and plugins for more than 20 client sites, optimized site speed to 90+%, and reduced loading times by more than 40%
     - Integrate WooCommerce and payment gateway services to increase ecommerce sales\n     - Provided optimized databases and introduced caching to enhance performance on heavy-traffic sites
     - Completed projects and maintenance work with actual clients. Contributed to optimizing workflows with my team\n  2. **Graphic Designer (Freelance)** (2024)\n     - Designed branding materials, menus, banners, and social media graphics
     - Ensured visual consistency across platforms using Figma and design principles
  3. **Data Entry Assistant, Softech Company** (2023)
     - Managed high-volume data entry with accuracy and timely reporting
     - Collaborated to optimize workflows and update records efficiently
- **Visual Effects:**
  - Vertical timeline with scroll-linked progress line (purple gradient)
  - Timeline dots animate in sequence as user scrolls
  - Card content reveals with stagger animation
  - Parallax offset for timeline elements
  - Each experience card has date badge and company logo placeholder

### Education Section
- **Content (from Resume):**
  1. **Bachelor in Information Technology (BIT)** (Jan 2023 - Jan 2027)
     - Padmashree College, Affiliated to Nilai University
  2. **Secondary Education** (2020 - 2022)
     - Nepal Don Bosco School\n- **Visual Effects:**
  - Two-column card layout with institution details
  - Scroll-triggered fade-in animation
  - Degree icon with subtle glow effect
\n### Certifications Section
- **Content (from Resume):**
  1. WordPress Development (Diploma)
  2. Core Java Programming (Diploma)
- **Visual Effects:**
  - Badge-style cards with certificate icons
  - Hover scale effect\n  - Arranged in horizontal row\n
### Projects Section
- **Content:**
  - Project One: Moment Nepal (https://momentnepal.com/) - Use Moment-Logo.png
  - Project Two: Webin Nepal (https://webinnepal.com/) - Use webin.png
  - Project Three: Family Project - Use family.png
  - Project Four: Hashboard (https://hashboard-one.vercel.app/) - Use hashboard.png
  - Project Five: Designing Nepal (https://designingnepal.com/) - Use Designing-Nepal.png
- **Visual Effects:**
  - Grid layout (2 columns on desktop, 1 on mobile)
  - Hover-driven3D preview cards
  - Image zoom and tilt on hover
  - Project details slide in from bottom on hover
  - Live link button with magnetic effect
  - Each card shows project logo/screenshot with glassmorphic overlay

### Contact Section\n- **Content:**
  - Contact form with fields: Name, Email, Message
  - Contact details:\n    - Phone: 9742391729
    - Email: oceanney5555@gmail.com
    - Location: Imadol, Lalitpur\n  - Social links: @wex-ocean\n- **Visual Effects:**
  - Two-column layout (form left, contact info right)
  - Smooth form interactions with micro-feedback
  - Input focus animations (border glow, label float)
  - Submit button with loading state animation (magnetic button style)
  - Success/error toast notifications
  - Contact info cards with icons and hover glow

---

## 10. Footer Section

### Footer Structure\n- **Layout:** Three-column layout on desktop, stacked on mobile
- **Column1 - Branding:**
  - Display logo.jpg (smaller version,30-40px height)
  - Tagline: 'WordPress Developer'
  - Copyright text: '© 2025 Ganesh Bahadur Thapa. All rights reserved.'
- **Column 2 - Quick Links:**
  - Navigation links: Home, About, Skills, Experience, Projects, Contact
  - Each link with hover purple glow effect
- **Column 3 - Connect:**
  - Social media links with icons
  - Email: oceanney5555@gmail.com
  - Phone: 9742391729
  - Location: Imadol, Lalitpur
- **Back to Top Button:**
  - Floating button in bottom-right corner
  - Appears after scrolling 300px
  - Smooth scroll animation to top
  - Magnetic hover effect with purple glow

### Footer Styling
- Background: rgba(0, 0, 0, 0.95) with subtle top border (1px solid rgba(168, 85, 247, 0.2))
- Padding: 4rem vertical, responsive horizontal
- Text color: rgba(255, 255, 255, 0.7) for secondary text, white for headings
- Divider line above copyright section
\n---

## 11. Performance & Responsiveness

### Performance Optimization
- Lazy loading for images (Resume.jpg, logo.jpg, project logos) and heavy components
- Code splitting by route/section
- Debounced scroll and resize handlers
- GPU-accelerated CSS transforms
- Minimal DOM manipulation\n- Efficient canvas rendering (requestAnimationFrame loop)
- Particle pool management (remove dead particles)
- Image optimization (WebP format with fallbacks)

### Responsive Breakpoints
- Mobile: < 720px
- Tablet: 720px – 980px
- Desktop: > 980px

### Device-Specific Behavior
- Heavy canvas effects reduced on mobile (smaller grid, fewer particles)
- Custom cursor disabled on touch devices
- Reduced motion mode respects prefers-reduced-motion
- Graceful degradation for older browsers
- Header menu collapses to hamburger on mobile
- Footer columns stack vertically on mobile

---

## 12. Visual Design Direction

### Color Palette
- **Primary:** Deep blue (#053183) to vibrant blue (#1368b3) gradient
- **Accent:** Purple (#a855f7) with pink gradient (#ec4899)
- **Background:** Pure black (#000000) with near-black canvas (#030303)
- **Grid/Effects:** rgba(168, 85, 247, 0.12) for subtle purple grid lines
- **Text:** White (#ffffff) with muted teal accents (#03554a)
- **Glassmorphism:** Semi-transparent blacks (rgba(0, 0, 0, 0.4)) with backdrop blur
- **Header Scrolled:** rgba(0, 0, 0, 0.95) with enhanced blur
\n### Visual Effects
- **Glassmorphism:** Frosted glass cards with soft borders (rgba(168, 85, 247, 0.2)) and 15px backdrop blur
- **Gradients:** Smooth radial gradients for cursor glow, linear gradients for buttons
- **Shadows:** Layered, soft shadows for elevation hierarchy (010px 20px -5px)\n- **Glow:** Dual-layer glow on cursor (tight inner + soft outer purple halo)
- **Particles:** Trailing purple particles with alpha fade-out
- **Header Transition:** Smooth morphing from semi-transparent to solid with full rounded corners

### Typography\n- **Headings:** Poppins (700weight, tight letter-spacing)
- **Body:** Inter (400–600 weight, optimized line-height)
- **Scale:** Fluid typography using clamp() for responsive sizing
- **Resume Data:** Maintain professional hierarchy with clear section headings

### Layout Principles
- Strong depth and layering with canvas background (z-index: 1), content overlay (z-index: 10), header (z-index: 50), cursor (z-index: 100)\n- Generous whitespace for breathing room
- Asymmetric grid layouts for visual interest
- Consistent border radius (32px for cards, 50px for scrolled header, 99px for buttons)
- Smooth, natural motion throughout
- Clear visual hierarchy for resume content sections

---
\n## 13. Accessibility Requirements

- Semantic HTML structure
- ARIA labels for interactive elements (header menu, buttons, form inputs)
- Keyboard navigation support (tab order, focus states, skip links)
- Skip-to-content link for screen readers
- Sufficient color contrast ratios (WCAG AA minimum)
- Respect prefers-reduced-motion user preference (disable canvas effects if requested)
- Alt text for all images (logo.jpg, Resume.jpg, project logos)
- Form labels and error messages with proper ARIA attributes
- Pointer-events: none on decorative canvas and cursor elements
- Focus visible indicators on all interactive elements

---

## 14. Content Preservation & Integration

All content from Resume.jpg must be accurately integrated:\n\n- **Personal Information:** Ganesh Bahadur Thapa, WordPress Developer, @wex-ocean, https://ocean-pi.vercel.app/, 9742391729, oceanney5555@gmail.com, Imadol Lalitpur
- **Summary:** Complete professional summary as stated in resume
- **Skills:** All6 skill categories with detailed technologies
- **Work Experience:** 3 positions (JoogleTech, Freelance Graphic Designer, Softech) with full descriptions and dates
- **Education:** BIT degree (2023-2027) and Secondary Education (2020-2022) with institutions
- **Certifications:** WordPress Development and Core Java Programming diplomas
- **Projects:** 5 projects with logos (Moment-Logo.png, webin.png, family.png, hashboard.png, Designing-Nepal.png) and live links
- **Images:** logo.jpg for header/footer, Resume.jpg profile photo for hero/about sections
\n---

## 15. Technical Implementation Notes

### Canvas Component Structure (React)
```javascript
// FluidCanvas.jsx
- useEffect hook for canvas initialization
- useRef for canvas element and animation frame ID
- Grid class with baseX, baseY, currentX, currentY, vx, vy properties
- Particle class with x, y, size, speedX, speedY, life, decay properties
- Mouse state tracking (x, y, lastX, lastY, active)
- Event listeners: mousemove, resize\n- Animation loop with requestAnimationFrame
- Cleanup on component unmount
```
\n### Header Component Structure\n```javascript
// Header.jsx
- useState for scroll position tracking
- useEffect with scroll event listener
- GSAP animation for header transformation (width, border-radius, background, blur)
- Conditional styling based on scroll state
- Logo image (logo.jpg) with proper sizing\n- Navigation menu with smooth scroll links
- Magnetic'Hire Me' button component
- Mobile hamburger menu with slide-in animation
```

### Integration Points
- Canvas renders as fixed background across all pages
- Content sections have relative positioning with z-index: 10
- Header has z-index: 50 to stay above content but below cursor
- Custom cursor component tracks mouse globally with z-index: 100
- Magnetic buttons use individual mousemove/mouseleave handlers
- Glassmorphic cards positioned above canvas with proper stacking context
- Footer positioned at bottom with proper spacing

---
\n## 16. Design Style\n
- **Overall Aesthetic:** Dark, futuristic, high-tech with cosmic fluid dynamics and particle trails creating an immersive, interactive experience; professional portfolio presentation with clear content hierarchy\n- **Color Scheme:** Near-black background (#030303) with vibrant purple accents (#a855f7) and pink gradients (#ec4899), white text for maximum contrast\n- **Visual Depth:** Multi-layered composition with canvas grid (z:1), glassmorphic content cards (z:10), sticky header (z:50), and glowing cursor (z:100) creating strong spatial hierarchy
- **Motion Language:** Physics-based fluid grid distortion with 180px effect radius, trailing particle system, magnetic button interactions with0.4x attraction multiplier, smooth header morphing on scroll
- **Canvas Integration:** Full-screen 35px grid with subtle purple lines (12% opacity) that dynamically warps around cursor with spring-back physics (0.06constant, 0.82 damping)
- **Interactive Feedback:** 20px white cursor dot with dual-layer purple glow (15px inner + 30px outer), 3-particle trail generation on movement, magnetic buttons with cubic-bezier easing
- **Typography Treatment:** Bold Poppins headings paired with clean Inter body text, rendered above glassmorphic cards with 15px backdrop blur
- **Border Styling:** 32px rounded corners on content cards with 1px purple borders (20% opacity), 50px fully rounded header when scrolled, 99px pill-shaped buttons with gradient backgrounds
- **Header Evolution:** Seamless transition from semi-transparent integrated header to floating pill-shaped sticky header with solid background and complete corner rounding
- **Content Presentation:** Professional resume data displayed with clear visual hierarchy, glassmorphic cards for each section, consistent spacing and alignment

---
\n## 17. Image Assets

- **logo.jpg:** Brand logo displayed in header (40-50px height) and footer (30-40px height)
- **Resume.jpg:** Profile photo used in hero section and about section with subtle glow effect
- **Moment-Logo.png:** Project logo for Moment Nepal\n- **webin.png:** Project logo for Webin Nepal\n- **family.png:** Project image for Family Project
- **hashboard.png:** Project logo for Hashboard
- **Designing-Nepal.png:** Project logo for Designing Nepal
\n---

## 18. Final Outcome

A **premium, immersive portfolio experience** that:\n- Features a full-screen fluid grid canvas with physics-based distortion and particle trails
- Implements an enhanced custom cursor with tight dual-layer purple glow
- Includes a sophisticated header system with logo.jpg, navigation menu, and 'Hire Me' button that transforms into a fully rounded, solid-background sticky header on scroll
- Displays complete professional information from resume including summary, skills, experience, education, certifications, and projects
- Showcases 5 live projects with proper logos and working links
- Provides comprehensive contact information and functional contact form
- Features a well-structured footer with branding, quick links, and back-to-top functionality
- Responds dynamically to user movement with180px effect radius and spring-back physics
- Performs flawlessly across devices (60fps target with optimized canvas rendering)
- Clearly demonstrates advanced frontend, canvas animation, and interaction design expertise
- Maintains all resume content with professional presentation and clear hierarchy
- Achieves Awwwards/Apple-level visual and interaction quality with cosmic, fluid aesthetics
- Serves as a compelling showcase for WordPress development services and technical capabilities