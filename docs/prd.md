# Ganesh Bahadur Thapa - Immersive Portfolio Requirements Document

## 1. Application Overview

**Application Name:** Ganesh Bahadur Thapa - Immersive Portfolio
\n**Application Description:** A high-performance, futuristic React-based portfolio website showcasing WordPress development expertise through immersive 3D interactions, advanced motion design, and premium UI/UX. The redesign transforms the existing portfolio into an Awwwards-level experience with complete content integration from resume data.\n
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
├── components/       # Reusable UI components
├── sections/         # Page sections (Hero, About, Skills, etc.)
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

---\n
## 4. Header Navigation System

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
- **Fully rounded corners:** border-radius: 50px (pill-shaped)\n- **Solid background:** rgba(0, 0, 0, 0.95) with enhanced backdrop blur (blur-xl)
- Soft gradient border: 1px solid rgba(168, 85, 247, 0.3)
- Refined shadow: 0 4px 20px rgba(0, 0, 0, 0.3)
- Zero layout shift during transition

### Mobile Behavior
- Collapses into floating pill-style navigation
- Hamburger menu with smooth slide-in animation
- Touch-optimized tap targets (min 44x44px)
- Logo scales down proportionally
\n### Technical Implementation
- Use GSAP ScrollTrigger to detect scroll position (trigger at 100px scroll)
- Animate header properties (width, border-radius, background opacity, blur, shadow) with custom easing
- Maintain 60fps performance during scroll
- Menu items have hover glow effect (purple accent)
\n---

## 5. Global Motion System

### Animation Framework
- **Primary Engine:** GSAP for all major animations\n- **ScrollTrigger:** Section reveals, parallax effects, text splitting animations
- **Smooth Scrolling:** Lenis or GSAP ScrollSmoother for physics-based scroll behavior
- **Easing:** Custom cubic-bezier curves for natural motion feel
\n### Animation Patterns
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
  - Inner glow: 0 0 15px 5px rgba(255, 255, 255, 0.8)
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
- **Effect radius:** 180px around cursor\n- **Force calculation:** (effectRadius - distance) / effectRadius
- **Displacement:** Points pushed away from cursor with force multiplier of 12
- **Spring-back:** 0.06 spring constant pulling points to base position
- **Damping:** 0.82 velocity damping for smooth motion
- **Physics update:** Each grid point has velocity (vx, vy) and current position

### Particle Trail System
- **Trigger:** Generate 3 particles when mouse moves more than 2px
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

### Canvas Performance
- **Trail effect:** ctx.fillRect with rgba(3, 3, 3, 0.4) for motion blur
- **Frame rate target:** 60fps\n- **Resize handling:** Reinitialize grid on window resize
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
\n---

## 9. Section-Specific Content & Enhancements

### Hero Section
- **Content:**
  - Main heading: 'GANESH BAHADUR THAPA'
  - Subtitle: 'WordPress Developer'
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
- **Resume Download Section:**
  - **Placement:** Positioned prominently within hero section, below main tagline and social links
  - **Layout:** Centered glassmorphic card with clear visual hierarchy
  - **Card Styling:**
    - Background: rgba(0, 0, 0, 0.5)
    - Backdrop-filter: blur(15px)
    - Border: 1px solid rgba(168, 85, 247, 0.25)
    - Border-radius: 24px
    - Padding: 2rem
    - Box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3)\n  - **Content:**
    - Heading: 'Download My Resume' (Poppins, 600 weight, 1.5rem)
    - Subtext: 'Get a detailed overview of my skills and experience' (Inter, 400 weight, 0.9rem, rgba(255, 255, 255, 0.7))
  - **Download Button:**
    - Magnetic button with gradient styling
    - Background: linear-gradient(45deg, #a855f7, #ec4899)
    - Border-radius: 99px
    - Padding: 0.9rem 2.8rem
    - Font-weight: 700
    - Icon: Download icon (arrow down) positioned left of text
    - Text: 'Download Resume'
    - Hover effects:\n      - Scale: 1.08\n      - Box-shadow: 0 12px 28px rgba(168, 85, 247, 0.6)
      - Magnetic attraction with 0.4x multiplier
      - Icon animates with subtle bounce
    - Transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
  - **Accessibility:**
    - ARIA label: 'Download resume PDF'
    - Keyboard accessible with visible focus state
    - Download attribute with proper filename

### About Section\n- **Content (from Resume):**
  - Summary: 'Expert WordPress developer with considerable hands-on experience developing, optimizing, and accelerating various WordPress sites. Expert at debugging, optimizing SEO and loading speed, as well as covering hosting, DNS, SSL, and complete projects from start to finish. I am capable of developing any site, ranging from business and e-commerce sites to custom projects and doing it all with efficiency and speed.'
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
  - Hover-activated depth cards with 3D tilt
  - Icon animations on card hover (use relevant tech icons)
  - Scroll-triggered stagger reveal
  - Each card has glassmorphic background with purple accent border
\n### Experience Section
- **Content (from Resume):**
  1. **WordPress Developer, JoogleTech Pvt. Ltd** (July 2025 - Present)
     - Designed custom themes and plugins for more than 20 client sites, optimized site speed to 90+%, and reduced loading times by more than 40%
     - Integrate WooCommerce and payment gateway services to increase ecommerce sales
     - Provided optimized databases and introduced caching to enhance performance on heavy-traffic sites
     - Completed projects and maintenance work with actual clients. Contributed to optimizing workflows with my team\n  2. **Graphic Designer (Freelance)** (2024)\n     - Designed branding materials, menus, banners, and social media graphics\n     - Ensured visual consistency across platforms using Figma and design principles
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
  - Two-column card layout with institution details\n  - Scroll-triggered fade-in animation
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
  1. **Project One: Webin Nepal**
     - Image: webin.png
     - Description: A digital agency providing web design, development, and graphic design services.\n     - Link: https://webinnepal.com/
  2. **Project Two: Moment Nepal**
     - Image: Moment.png
     - Description: A photography service specializing in wedding, portrait and corporate.\n     - Link: https://momentnepal.com/
  3. **Project Three: Family Shopping Center**
     - Image: family.png
     - Description: An e-commerce website selling groceries and household products.
     - Link: (Family Project)
  4. **Project Four: HashBoard**
     - Image: hashboard.png
     - Description: HashBoard is a lightweight, serverless sticky note dashboard. It allows you to create, organize, and customize thoughts on an infinite canvas.
     - Link: https://hashboard-one.vercel.app/
  5. **Project Five: Designing Nepal**
     - Image: Designing.png
     - Description: Designing Nepal is a creative agency specializing in design, web & app development, branding, and marketing solutions.
     - Link: https://designingnepal.com/
  6. **Project Six: SEWA Nepal**
     - Image: sewanepal.png
     - Description: SEWA Nepal is a non-profit empowering underprivileged communities through education, healthcare, and sustainable development.
     - Link: (SEWA Nepal Project)
\n- **Visual Effects & Interaction Design:**
  - **Layout:** Responsive grid (3 columns on desktop, 2 on tablet, 1 on mobile)
  - **Card Structure:**
    - Glassmorphic container with backdrop-filter: blur(15px)
    - Background: rgba(0, 0, 0, 0.5)
    - Border: 1px solid rgba(168, 85, 247, 0.25)
    - Border-radius: 24px for premium feel
    - Padding: 1.5rem
  - **Hover Animations (smooth, performance-optimized):**
    - **Scale-up:** transform: scale(1.05) with 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) easing
    - **Elevation:** Box-shadow transition from 0 4px 12px rgba(0, 0, 0, 0.2) to 0 20px 40px rgba(168, 85, 247, 0.4)
    - **Glow Effect:** Border color shifts to rgba(168, 85, 247, 0.6) with soft outer glow
    - **Image Zoom:** Project image scales to 1.1 with overflow hidden, 0.4s ease-out transition
  - **Micro-interactions:**
    - **Gradient Shift:** Background gradient overlay transitions from transparent to linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)) on hover
    - **Icon Reveal:** External link icon fades in and slides up from bottom-right corner (opacity 0 to 1, translateY(10px) to 0)
    - **Text Overlay:** Project description slides up from bottom with backdrop blur, revealing full details on hover
  - **Button Styling:**
    - 'View Project' button with magnetic effect (same as global magnetic buttons)
    - Background: linear-gradient(45deg, #a855f7, #ec4899)
    - Border-radius: 99px
    - Padding: 0.6rem 1.8rem
    - Font-weight: 600
    - Hover: Slight scale(1.08) with enhanced shadow
  - **Performance Optimization:**
    - Use CSS transform and opacity for animations (GPU-accelerated)
    - will-change: transform on hover-enabled cards
    - Debounced hover handlers to prevent excessive reflows
    - Lazy load project images with blur-up placeholder
  - **Accessibility:**
    - ARIA labels for project links and buttons
    - Keyboard focus states with visible outline (purple glow)
    - Reduced motion support: disable scale and complex animations if prefers-reduced-motion is active

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
- **Resume Download Section (Alternative Placement):**
  - **Optional placement:** Can also be positioned in contact section as secondary CTA
  - Same styling and functionality as hero section version
  - Provides additional download opportunity for users who scrolled through portfolio

---

## 10. Footer Section

### Footer Structure
- **Layout:** Clean three-column layout on desktop (>980px), two-column on tablet (720-980px), stacked single column on mobile (<720px)
- **Column 1 - Branding & Copyright:**
  - Display logo.jpg (height: 32px, maintain aspect ratio)
  - Developer name: 'Ganesh Thapa' (Poppins, 600 weight, 1.1rem, white)
  - Tagline: 'WordPress Developer' (Inter, 400 weight, 0.85rem, rgba(255, 255, 255, 0.6))
  - Copyright notice: '© 2025 Ganesh Thapa. All rights reserved.' (Inter, 400 weight, 0.8rem, rgba(255, 255, 255, 0.5))
  - Vertical spacing: 0.75rem between elements
- **Column 2 - Quick Links:**
  - Section heading: 'Quick Links' (Poppins, 600 weight, 1rem, white, margin-bottom: 1rem)
  - Navigation links arranged vertically: Home, About, Skills, Experience, Projects, Contact
  - Link styling:\n    - Color: rgba(255, 255, 255, 0.7)
    - Font: Inter, 400 weight, 0.9rem
    - Line-height: 2rem for comfortable spacing
    - Transition: 0.2s ease\n  - Hover effects:
    - Color shifts to white
    - Text-shadow: 0 0 8px rgba(168, 85, 247, 0.6) (purple glow)
    - Slight translateX(4px) shift\n- **Column 3 - Connect:**
  - Section heading: 'Connect' (Poppins, 600 weight, 1rem, white, margin-bottom: 1rem)
  - Social media icons arranged horizontally with proper spacing (gap: 1rem)
  - Icons included: GitHub, LinkedIn, X (Twitter), Medium, Buy Me a Coffee
  - Icon styling:
    - Size: 24x24px
    - Color: rgba(255, 255, 255, 0.7)
    - Background: rgba(168, 85, 247, 0.1)\n    - Border-radius: 8px
    - Padding: 0.5rem
    - Transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
  - Icon hover effects:
    - Scale: 1.15
    - Color: white
    - Background: rgba(168, 85, 247, 0.3)
    - Box-shadow: 0 4px 12px rgba(168, 85, 247, 0.4)
    - Rotate: 5deg (subtle tilt)
  - Contact info below icons:\n    - Email: oceanney5555@gmail.com
    - Phone: 9742391729
    - Location: Imadol, Lalitpur
    - Styling: Inter, 400 weight, 0.85rem, rgba(255, 255, 255, 0.6), line-height: 1.8rem
\n### Back to Top Button
- **Placement:** Fixed position in bottom-right corner\n- **Positioning:** right: 2rem, bottom: 2rem (adjusts to 1rem on mobile)
- **Visibility logic:** Appears with fade-in animation after user scrolls 300px down the page
- **Button styling:**
  - Size: 48x48px circular button
  - Background: linear-gradient(135deg, #a855f7, #ec4899)
  - Border-radius: 50% (perfect circle)
  - Box-shadow: 0 6px 20px rgba(168, 85, 247, 0.4)
  - Icon: Upward arrow (white, 20x20px, centered)
  - z-index: 60 (above content, below cursor)
- **Hover effects:**
  - Scale: 1.12
  - Box-shadow: 0 8px 28px rgba(168, 85, 247, 0.6)\n  - Magnetic attraction with 0.3x multiplier
  - Icon animates with subtle upward bounce
  - Transition: 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
- **Functionality:**
  - Smooth scroll to top using GSAP or native smooth scroll behavior
  - Animation duration: 1.2s with easing\n  - ARIA label: 'Scroll to top'
  - Keyboard accessible (Enter/Space key triggers)

### Footer Styling
- **Background:** rgba(0, 0, 0, 0.95) with subtle noise texture overlay
- **Top border:** 1px solid rgba(168, 85, 247, 0.2) for visual separation
- **Padding:** 4rem vertical on desktop, 3rem on tablet, 2.5rem on mobile; 2rem horizontal (responsive)
- **Divider line:** 1px solid rgba(255, 255, 255, 0.1) above copyright section with 2rem top margin
- **Text hierarchy:**
  - Primary text (headings, name): white
  - Secondary text (links, tagline): rgba(255, 255, 255, 0.7)
  - Tertiary text (copyright, contact info): rgba(255, 255, 255, 0.5-0.6)
- **Spacing:**
  - Column gap: 4rem on desktop, 2.5rem on tablet\n  - Vertical spacing between sections: 1.5rem\n  - Consistent alignment and visual balance

### Responsive Behavior
- **Desktop (>980px):** Three-column layout with equal width distribution, back to top button at 2rem offset
- **Tablet (720-980px):** Two-column layout (branding + quick links in first column, connect in second), reduced column gap, back to top button at 1.5rem offset
- **Mobile (<720px):** Single-column stacked layout, centered text alignment for branding, left-aligned links, centered social icons, back to top button at 1rem offset with reduced size (40x40px)

### Accessibility
- All links have proper ARIA labels
- Social icons include screen reader text (visually hidden)
- Keyboard navigation support with visible focus states (purple glow outline)
- Sufficient color contrast ratios (WCAG AA compliant)
- Back to top button has descriptive ARIA label and keyboard support
\n---

## 11. Performance & Responsiveness

### Performance Optimization
- Lazy loading for images (Resume.jpg, logo.jpg, project images: webin.png, Moment.png, family.png, hashboard.png, Designing.png, sewanepal.png) and heavy components\n- Code splitting by route/section\n- Debounced scroll and resize handlers
- GPU-accelerated CSS transforms\n- Minimal DOM manipulation
- Efficient canvas rendering (requestAnimationFrame loop)
- Particle pool management (remove dead particles)
- Image optimization (WebP format with fallbacks)
\n### Responsive Breakpoints
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
- Project cards adjust to single column on mobile with optimized touch interactions
- Resume download section maintains full width on mobile with adjusted padding
- Back to top button scales down on mobile devices

---

## 12. Visual Design Direction

- **Overall Aesthetic:** Dark, futuristic, high-tech with cosmic fluid dynamics and particle trails creating an immersive, interactive experience; professional portfolio presentation with clear content hierarchy\n- **Color Scheme:** Near-black background (#030303) with vibrant purple accents (#a855f7) and pink gradients (#ec4899), white text for maximum contrast
- **Visual Depth:** Multi-layered composition with canvas grid (z:1), glassmorphic content cards (z:10), sticky header (z:50), back to top button (z:60), and glowing cursor (z:100) creating strong spatial hierarchy
- **Motion Language:** Physics-based fluid grid distortion with 180px effect radius, trailing particle system, magnetic button interactions with 0.4x attraction multiplier, smooth header morphing on scroll, premium project card hover effects with scale, glow, and gradient shifts, animated back to top button with bounce effect
- **Canvas Integration:** Full-screen 35px grid with subtle purple lines (12% opacity) that dynamically warps around cursor with spring-back physics (0.06 constant, 0.82 damping)\n- **Interactive Feedback:** 20px white cursor dot with dual-layer purple glow (15px inner + 30px outer), 3-particle trail generation on movement, magnetic buttons with cubic-bezier easing, project cards with multi-layered hover animations, social icons with scale and rotation effects\n- **Typography Treatment:** Bold Poppins headings paired with clean Inter body text, rendered above glassmorphic cards with 15px backdrop blur\n- **Border Styling:** 24px rounded corners on project cards and resume download card, 32px on section cards with 1px purple borders (20-25% opacity), 50px fully rounded header when scrolled, 99px pill-shaped buttons with gradient backgrounds, 50% circular back to top button\n- **Header Evolution:** Seamless transition from semi-transparent integrated header to floating pill-shaped sticky header with solid background and complete corner rounding
- **Content Presentation:** Professional resume data displayed with clear visual hierarchy, glassmorphic cards for each section, consistent spacing and alignment, captivating project showcase with modern hover interactions, prominent resume download CTA with smooth animations\n- **Footer Design:** Clean, minimal footer with well-structured columns, subtle hover animations on links and social icons, professional finish with proper spacing and alignment, floating back to top button with magnetic effect

---

## 13. Accessibility Requirements

- Semantic HTML structure
- ARIA labels for interactive elements (header menu, buttons, form inputs, project cards, social icons, back to top button, resume download button)
- Keyboard navigation support (tab order, focus states, skip links)
- Skip-to-content link for screen readers
- Sufficient color contrast ratios (WCAG AA minimum)
- Respect prefers-reduced-motion user preference (disable canvas effects and complex animations if requested)
- Alt text for all images (logo.jpg, Resume.jpg, webin.png, Moment.png, family.png, hashboard.png, Designing.png, sewanepal.png)
- Form labels and error messages with proper ARIA attributes
- Pointer-events: none on decorative canvas and cursor elements
- Focus visible indicators on all interactive elements (purple glow outline)
- Social media icons include screen reader text\n- Back to top button accessible via keyboard (Enter/Space)\n- Resume download button has descriptive ARIA label and download attribute

---
\n## 14. Content Preservation & Integration

All content from Resume.jpg must be accurately integrated:\n\n- **Personal Information:** Ganesh Bahadur Thapa, WordPress Developer, @wex-ocean, https://ocean-pi.vercel.app/, 9742391729, oceanney5555@gmail.com, Imadol Lalitpur\n- **Summary:** Complete professional summary as stated in resume
- **Skills:** All 6 skill categories with detailed technologies
- **Work Experience:** 3 positions (JoogleTech, Freelance Graphic Designer, Softech) with full descriptions and dates
- **Education:** BIT degree (2023-2027) and Secondary Education (2020-2022) with institutions\n- **Certifications:** WordPress Development and Core Java Programming diplomas
- **Projects:** 6 projects with images (webin.png, Moment.png, family.png, hashboard.png, Designing.png, sewanepal.png), descriptions, and live links
- **Images:** logo.jpg for header/footer, Resume.jpg profile photo for hero/about sections
- **Resume Download:** Prominent download section with clear CTA button and smooth interactions
- **Footer Content:** Developer name (Ganesh Thapa), copyright notice, quick links, social media icons (GitHub, LinkedIn, X, Medium, Buy Me a Coffee), contact information, back to top button

---

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
- Magnetic 'Hire Me' button component
- Mobile hamburger menu with slide-in animation
```

### Project Card Component Structure
```javascript
// ProjectCard.jsx
- Props: image, title, description, link\n- useState for hover state tracking
- useRef for card element and magnetic button
- Mouse event handlers for hover effects (mouseenter, mouseleave, mousemove)
- GSAP animations for scale, shadow, glow transitions
- Lazy loading for project images
- Conditional rendering for icon reveal and overlay
- Accessibility attributes (ARIA labels, keyboard focus)
```

### Resume Download Component Structure
```javascript\n// ResumeDownload.jsx
- Glassmorphic card container with heading and subtext
- Magnetic download button with icon
- Mouse event handlers for magnetic effect
- GSAP animations for hover interactions (scale, shadow, icon bounce)
- Download functionality with proper file handling
- Accessibility attributes (ARIA label, keyboard support)
- Responsive styling for mobile devices
```

### Footer Component Structure
```javascript
// Footer.jsx
- Three-column layout with responsive breakpoints
- Logo image (logo.jpg) with proper sizing
- Quick links with smooth scroll functionality
- Social media icons with hover animations
- Contact information display
- Copyright notice with developer name
- Accessibility attributes for all links and icons
```

### Back to Top Button Component Structure
```javascript
// BackToTop.jsx
- useState for visibility tracking based on scroll position
- useEffect with scroll event listener (shows after 300px)\n- Fixed positioning with responsive offsets
- Magnetic hover effect with GSAP\n- Smooth scroll to top functionality
- Icon with bounce animation on hover
- Accessibility attributes (ARIA label, keyboard support)
- Fade-in/fade-out transitions
```

### Integration Points
- Canvas renders as fixed background across all pages
- Content sections have relative positioning with z-index: 10
- Header has z-index: 50 to stay above content but below cursor
- Back to top button has z-index: 60\n- Custom cursor component tracks mouse globally with z-index: 100
- Magnetic buttons use individual mousemove/mouseleave handlers
- Glassmorphic cards positioned above canvas with proper stacking context
- Project cards grid with responsive layout and optimized hover interactions
- Resume download section integrated in hero and/or contact section
- Footer positioned at bottom with proper spacing and back to top button overlay

---
\n## 16. Design Style\n
- **Overall Aesthetic:** Dark, futuristic, high-tech with cosmic fluid dynamics and particle trails creating an immersive, interactive experience; professional portfolio presentation with clear content hierarchy and prominent resume download functionality
- **Color Scheme:** Near-black background (#030303) with vibrant purple accents (#a855f7) and pink gradients (#ec4899), white text for maximum contrast
- **Visual Depth:** Multi-layered composition with canvas grid (z:1), glassmorphic content cards (z:10), sticky header (z:50), back to top button (z:60), and glowing cursor (z:100) creating strong spatial hierarchy\n- **Motion Language:** Physics-based fluid grid distortion with 180px effect radius, trailing particle system, magnetic button interactions with 0.4x attraction multiplier, smooth header morphing on scroll, premium project card hover effects with scale, glow, and gradient shifts, animated social icons with rotation, bouncing back to top button\n- **Canvas Integration:** Full-screen 35px grid with subtle purple lines (12% opacity) that dynamically warps around cursor with spring-back physics (0.06 constant, 0.82 damping)
- **Interactive Feedback:** 20px white cursor dot with dual-layer purple glow (15px inner + 30px outer), 3-particle trail generation on movement, magnetic buttons with cubic-bezier easing, project cards with multi-layered hover animations, social icons with scale and tilt effects, resume download button with icon bounce\n- **Typography Treatment:** Bold Poppins headings paired with clean Inter body text, rendered above glassmorphic cards with 15px backdrop blur
- **Border Styling:** 24px rounded corners on project cards and resume download card, 32px on section cards with 1px purple borders (20-25% opacity), 50px fully rounded header when scrolled, 99px pill-shaped buttons with gradient backgrounds, 50% circular back to top button, 8px rounded social icon containers
- **Header Evolution:** Seamless transition from semi-transparent integrated header to floating pill-shaped sticky header with solid background and complete corner rounding
- **Content Presentation:** Professional resume data displayed with clear visual hierarchy, glassmorphic cards for each section, consistent spacing and alignment, captivating project showcase with modern hover interactions, prominent resume download CTA with smooth animations and clear call-to-action
- **Footer Design:** Clean, minimal three-column footer with well-structured layout, subtle hover animations on links (glow and shift) and social icons (scale, rotate, glow), professional finish with proper spacing and alignment, floating circular back to top button with magnetic effect and smooth scroll functionality

---
\n## 17. Image Assets

- **logo.jpg:** Brand logo displayed in header (40-50px height) and footer (32px height)
- **Resume.jpg:** Profile photo used in hero section and about section with subtle glow effect
- **webin.png:** Project image for Webin Nepal (Project One)\n- **Moment.png:** Project image for Moment Nepal (Project Two)
- **family.png:** Project image for Family Shopping Center (Project Three)
- **hashboard.png:** Project image for HashBoard (Project Four)
- **Designing.png:** Project image for Designing Nepal (Project Five)
- **sewanepal.png:** Project image for SEWA Nepal (Project Six)
\n---

## 18. Final Outcome

A **premium, immersive portfolio experience** that:\n- Features a full-screen fluid grid canvas with physics-based distortion and particle trails
- Implements an enhanced custom cursor with tight dual-layer purple glow
- Includes a sophisticated header system with logo.jpg, navigation menu, and 'Hire Me' button that transforms into a fully rounded, solid-background sticky header on scroll
- Displays complete professional information from resume including summary, skills, experience, education, certifications, and projects
- Provides a prominent, strategically placed Resume Download section with clear call-to-action button, smooth hover effects, and professional glassmorphic card design
- Showcases 6 live projects with modern, visually captivating project cards featuring smooth hover effects (scale-up, elevation, glow, gradient shifts, icon reveals, image zoom)
- Provides comprehensive contact information and functional contact form
- Features a clean, minimal, well-structured footer with three-column layout including:\n  - Branding section with logo, developer name (Ganesh Thapa), and copyright notice
  - Quick links section with smooth hover effects (purple glow and shift)
  - Connect section with aligned social media icons (GitHub, LinkedIn, X, Medium, Buy Me a Coffee) featuring scale, rotation, and glow animations on hover
  - Contact information with proper spacing and hierarchy
- Includes a floating 'Back to Top' button in bottom-right corner with:\n  - Circular gradient design with magnetic hover effect
  - Appears after 300px scroll with smooth fade-in\n  - Bouncing icon animation on hover
  - Smooth scroll functionality to top of page
  - Full keyboard accessibility\n- Responds dynamically to user movement with 180px effect radius and spring-back physics
- Performs flawlessly across devices (60fps target with optimized canvas rendering and GPU-accelerated animations)
- Clearly demonstrates advanced frontend, canvas animation, and interaction design expertise
- Maintains all resume content with professional presentation and clear hierarchy
- Achieves Awwwards/Apple-level visual and interaction quality with cosmic, fluid aesthetics and premium micro-interactions
- Provides polished, professional finish with consistent styling, subtle animations, proper spacing, and accessibility compliance throughout
- Serves as a compelling showcase for WordPress development services and technical capabilities with easy resume access and professional footer presentation
