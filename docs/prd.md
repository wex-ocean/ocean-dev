# Ganesh Bahadur Thapa - Immersive Portfolio Requirements Document

## 1. Application Overview

**Application Name:** Ganesh Bahadur Thapa - Immersive Portfolio
\n**Application Description:** A high-performance, futuristic React-based portfolio website showcasing WordPress development expertise through immersive 3D interactions, advanced motion design, and premium UI/UX. The redesign transforms the existing portfolio into an Awwwards-level experience while preserving all original content and information architecture.

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
├── components/# Reusable UI components
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

### Initial State (Top of Page)
- Full-width header integrated into hero section
- Tall height with transparent/minimal blur background
- Flush to viewport top\n- Logo and navigation fully visible
\n### Scrolled State (GSAP-driven transition)
- Becomes sticky with smooth animation
- Height reduces progressively
- Width shrinks to 88–92% of viewport and centers horizontally
- Adds subtle top offset gap (8–12px)
- Applies glassmorphism effect:\n  - Backdrop blur (blur-md to blur-lg)
  - Soft gradient border with low opacity
  - Refined shadow (04px 20px rgba(0,0,0,0.1))
- Zero layout shift during transition

### Mobile Behavior
- Collapses into floating pill-style navigation
- Hamburger menu with smooth slide-in animation
- Touch-optimized tap targets (min44x44px)
\n### Technical Implementation
- Use GSAP ScrollTrigger to detect scroll position
- Animate header properties (height, width, blur, shadow) with custom easing
- Maintain60fps performance during scroll
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
  - Cell size: 35px
  - Grid color: rgba(168, 85, 247, 0.12) (subtle purple)
  - Dynamic grid that responds to mouse movement
\n### Fluid Dynamics Behavior
- **Effect radius:** 180px around cursor
- **Force calculation:** (effectRadius - distance) / effectRadius
- **Displacement:** Points pushed away from cursor with force multiplier of 12
- **Spring-back:**0.06 spring constant pulling points to base position
- **Damping:** 0.82 velocity damping for smooth motion
- **Physics update:** Each grid point has velocity (vx, vy) and current position

### Particle Trail System
- **Trigger:** Generate3 particles when mouse moves more than 2px
- **Particle properties:**
  - Size: Random between 1-4px
  - Speed: Random velocity between -2to +2 on both axes
  - Color: rgba(168, 85, 247, opacity) (purple)
  - Life: Starts at 1.0, decays by 0.01-0.03 per frame
- **Rendering:** Circular particles with alpha fade-out
- **Cleanup:** Remove particles when life reaches 0

### Radial Glow Effect
- **Active when:** Mouse is moving on canvas
- **Gradient specs:**
  - Center: rgba(168, 85, 247, 0.3)\n  - Radius: 200px
  - Edge: Transparent
- **Tighter glow:** Concentrated around cursor position

### Canvas Performance
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
- **Reset on mouseleave:** Smooth return to translate(0px, 0px)\n- **Visual styling:**
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
\n## 9. Section-Specific Enhancements

### Hero Section
- Cinematic entrance animation (fade-in + scale)
- Fluid grid canvas as background layer
- Animated text reveal (split text, staggered characters)
- Floating profile card with glassmorphism:\n  - Background: rgba(0, 0, 0, 0.4)
  - Backdrop-filter: blur(15px)
  - Border: 1px solid rgba(168, 85, 247, 0.2)
  - Border-radius: 32px
  - Padding: 3rem\n- Scroll indicator with animated arrow

### About Section\n- Animated depth grid background
- Photo slot with hover tilt effect
- Text content fades in on scroll
- Skill chips with staggered entrance

### Skills Section\n- Grid layout with hover-activated depth cards
- Icon animations on card hover
- Scroll-triggered stagger reveal
- Optional particle connections between cards

### Experience Section
- Vertical timeline with scroll-linked progress line
- Timeline dots animate in sequence
- Card content reveals as user scrolls
- Parallax offset for timeline elements

### Projects Section
- Hover-driven3D preview cards
- Image zoom and tilt on hover
- Project details slide in from bottom
- Filter/category system with smooth transitions
- Links to live projects:\n  - Project One: https://momentnepal.com/
  - Project Two: https://webinnepal.com/
  - Project Four: https://hashboard-one.vercel.app/
  - Project Five: https://designingnepal.com/

### Contact Section
- Smooth form interactions with micro-feedback
- Input focus animations (border glow, label float)
- Submit button with loading state animation
- Success/error toast notifications
- Contact details:\n  - Phone: 9742391729
  - Email: oceanney5555@gmail.com
  - Location: Imadol, Lalitpur\n
---

## 10. Performance & Responsiveness

### Performance Optimization
- Lazy loading for images and heavy components
- Code splitting by route/section
- Debounced scroll and resize handlers
- GPU-accelerated CSS transforms
- Minimal DOM manipulation
- Efficient canvas rendering (requestAnimationFrame loop)
- Particle pool management (remove dead particles)

### Responsive Breakpoints
- Mobile: < 720px
- Tablet: 720px – 980px
- Desktop: > 980px

### Device-Specific Behavior
- Heavy canvas effects reduced on mobile (smaller grid, fewer particles)
- Custom cursor disabled on touch devices
- Reduced motion mode respects prefers-reduced-motion
- Graceful degradation for older browsers

---
\n## 11. Visual Design Direction

### Color Palette
- **Primary:** Deep blue (#053183) to vibrant blue (#1368b3) gradient
- **Accent:** Purple (#a855f7) with pink gradient (#ec4899)
- **Background:** Pure black (#000000) with near-black canvas (#030303)
- **Grid/Effects:** rgba(168, 85, 247, 0.12) for subtle purple grid lines
- **Text:** White (#ffffff) with muted teal accents (#03554a)
- **Glassmorphism:** Semi-transparent blacks (rgba(0, 0, 0, 0.4)) with backdrop blur

### Visual Effects
- **Glassmorphism:** Frosted glass cards with soft borders (rgba(168, 85, 247, 0.2)) and 15px backdrop blur
- **Gradients:** Smooth radial gradients for cursor glow, linear gradients for buttons
- **Shadows:** Layered, soft shadows for elevation hierarchy (0 10px 20px -5px)\n- **Glow:** Dual-layer glow on cursor (tight inner + soft outer purple halo)
- **Particles:** Trailing purple particles with alpha fade-out

### Typography
- **Headings:** Poppins (700weight, tight letter-spacing)
- **Body:** Inter (400–600 weight, optimized line-height)
- **Scale:** Fluid typography using clamp() for responsive sizing
\n### Layout Principles
- Strong depth and layering with canvas background (z-index: 1), content overlay (z-index: 10), cursor (z-index: 100)\n- Generous whitespace for breathing room
- Asymmetric grid layouts for visual interest
- Consistent border radius (32px for cards, 99px for buttons)
- Smooth, natural motion throughout

---
\n## 12. Accessibility Requirements

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support (tab order, focus states)
- Skip-to-content link for screen readers
- Sufficient color contrast ratios (WCAG AA minimum)
- Respect prefers-reduced-motion user preference (disable canvas effects if requested)
- Alt text for all images
- Form labels and error messages
- Pointer-events: none on decorative canvas and cursor elements

---

## 13. Content Preservation

All content from the existing portfolio must be preserved:
\n- Personal information (name, title, contact details)
- About section text and photo
- Skills list (9 skill cards)
- Experience timeline (3 entries: JoogleTech, Freelance, Softech)
- Projects showcase (6 projects with images, descriptions, and links)
- Contact form fields (name, email, message)
- Footer copyright and back-to-top link
- Profile images: profile.jpg, gimg.png\n- Project logos: Moment-Logo.png, webin.png, family.png, hashboard.png, Designing-Nepal.png

---

## 14. Technical Implementation Notes

### Canvas Component Structure (React)\n```javascript
// FluidCanvas.jsx
- useEffect hook for canvas initialization
- useRef for canvas element and animation frame ID
- Grid class with baseX, baseY, currentX, currentY, vx, vy properties
- Particle class with x, y, size, speedX, speedY, life, decay properties
- Mouse state tracking (x, y, lastX, lastY, active)
- Event listeners: mousemove, resize\n- Animation loop with requestAnimationFrame
- Cleanup on component unmount
```
\n### Integration Points
- Canvas renders as fixed background across all pages
- Content sections have relative positioning with z-index: 10
- Custom cursor component tracks mouse globally
- Magnetic buttons use individual mousemove/mouseleave handlers
- Glassmorphic cards positioned above canvas with proper stacking context

---

## 15. Design Style\n
- **Overall Aesthetic:** Dark, futuristic, high-tech with cosmic fluid dynamics and particle trails creating an immersive, interactive experience
- **Color Scheme:** Near-black background (#030303) with vibrant purple accents (#a855f7) and pink gradients (#ec4899), white text for maximum contrast
- **Visual Depth:** Multi-layered composition with canvas grid (z:1), glassmorphic content cards (z:10), and glowing cursor (z:100) creating strong spatial hierarchy
- **Motion Language:** Physics-based fluid grid distortion with180px effect radius, trailing particle system, and magnetic button interactions with0.4x attraction multiplier
- **Canvas Integration:** Full-screen 35px grid with subtle purple lines (12% opacity) that dynamically warps around cursor with spring-back physics (0.06 constant, 0.82 damping)\n- **Interactive Feedback:** 20px white cursor dot with dual-layer purple glow (15px inner + 30px outer), 3-particle trail generation on movement, magnetic buttons with cubic-bezier easing
- **Typography Treatment:** Bold Poppins headings paired with clean Inter body text, rendered above glassmorphic cards with 15px backdrop blur
- **Border Styling:** 32px rounded corners on content cards with 1px purple borders (20% opacity), 99px pill-shaped buttons with gradient backgrounds

---
\n## 16. Final Outcome

A **premium, immersive portfolio experience** that:\n- Features a full-screen fluid grid canvas with physics-based distortion and particle trails
- Implements an enhanced custom cursor with tight dual-layer purple glow
- Responds dynamically to user movement with 180px effect radius and spring-back physics
- Performs flawlessly across devices (60fps target with optimized canvas rendering)
- Clearly demonstrates advanced frontend, canvas animation, and interaction design expertise
- Maintains all original content and information architecture
- Achieves Awwwards/Apple-level visual and interaction quality with cosmic, fluid aesthetics
- Serves as a compelling showcase for WordPress development services