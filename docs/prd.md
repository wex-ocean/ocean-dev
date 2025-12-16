# Futuristic Portfolio Redesign Requirements Document

## 1. Application Overview

**Application Name:** Ganesh Bahadur Thapa - Immersive Portfolio

**Application Description:** A high-performance, futuristic React-based portfolio website showcasing WordPress development expertise through immersive 3D interactions, advanced motion design, and premium UI/UX. The redesign transforms the existing portfolio into an Awwwards-level experience while preserving all original content and information architecture.

**Target Audience:** Potential clients, recruiters, and industry professionals seeking advanced frontend and WordPress development services.

---

## 2. Core Technology Stack

- **Frontend Framework:** React.js with Vite build tool
- **Styling:** Tailwind CSS + CSS Variables
- **Animation Engine:** GSAP (GreenSock Animation Platform) with ScrollTrigger plugin
- **3D Graphics:** Three.js via React Three Fiber (@react-three/fiber, @react-three/drei)
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
├── three/# Three.js scenes and materials
├── utils/            # Helper functions\n└── styles/           # Global styles and Tailwind config
```

### Quality Standards
- Fully component-driven React architecture
- Mobile-first responsive design
- Performance-optimized (lazy loading, code splitting, minimal draw calls)
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
- Custom cursor follower with smooth lag effect
- Scale and distortion on hover over interactive elements
- Magnetic attraction to buttons, links, and cards
- Optional trailing particle system (low opacity, GPU-accelerated)
- Color/shape changes based on hover context

### Implementation Notes
- Use GSAP for smooth cursor tracking
- Automatically disabled on touch devices
- Fallback to native cursor if performance drops below30fps
\n---

## 7. 3D & WebGL Integration

### Hero Section 3D Scene
- Subtle Three.js scene with geometric shapes or abstract forms
- Particle system or shader-based background (low opacity,10–20%)
- Scroll-based depth parallax (foreground/background layer separation)
- Mouse-reactive camera movement (subtle tilt/rotation)

### Technical Constraints
- GPU-efficient rendering (target 60fps on mid-range devices)
- Lightweight meshes and optimized geometries
- Use instanced rendering for particle systems
- Graceful degradation on low-end hardware

---
\n## 8. Interactive UI Components

### 3D Hover Cards
- Tilt effect on mouse movement (react-tilt or custom GSAP implementation)
- Depth shadow that follows tilt direction
- Subtle glow effect on hover
- Smooth transition between states

### Magnetic Buttons
- Buttons attract cursor within proximity radius
- Energy/ripple feedback on click
- Scale and shadow animation on hover
- Haptic-like visual feedback

### Project Cards
- Tactile, responsive hover states
- 3D transform on interaction
- Image zoom or parallax effect
- Smooth color overlay transitions

---
\n## 9. Section-Specific Enhancements

### Hero Section
- Cinematic entrance animation (fade-in + scale)
- Shader-based background with gradient noise
- Animated text reveal (split text, staggered characters)
- Floating profile card with glassmorphism
- Scroll indicator with animated arrow

### About Section\n- Animated depth grid background
- Photo slot with hover tilt effect
- Text content fades in on scroll
- Skill chips with staggered entrance
\n### Skills Section
- Grid layout with hover-activated depth cards
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
- Minimal DOM manipulation\n- Efficient Three.js scene management (dispose unused resources)

### Responsive Breakpoints
- Mobile: < 720px
- Tablet: 720px – 980px
- Desktop: > 980px
\n### Device-Specific Behavior
- Heavy3D effects disabled on mobile
- Custom cursor disabled on touch devices
- Reduced motion mode respects prefers-reduced-motion
- Graceful degradation for older browsers

---
\n## 11. Visual Design Direction

### Color Palette
- **Primary:** Deep blue (#053183) to vibrant blue (#1368b3) gradient
- **Accent:** Purple undertones (#110477)\n- **Background:** Pure black (#000000) with subtle dark gray sections (#131111)
- **Text:** White (#ffffff) with muted teal accents (#03554a)\n- **Glassmorphism:** Semi-transparent whites with backdrop blur

### Visual Effects
- **Glassmorphism:** Frosted glass cards with soft borders and shadows
- **Gradients:** Smooth radial and linear gradients for depth
- **Shadows:** Layered, soft shadows for elevation hierarchy
- **Blur:** Strategic backdrop blur for floating elements
- **Glow:** Subtle neon glow on interactive elements

### Typography
- **Headings:** Poppins (700 weight, tight letter-spacing)
- **Body:** Inter (400–600 weight, optimized line-height)
- **Scale:** Fluid typography using clamp() for responsive sizing
\n### Layout Principles
- Strong depth and layering\n- Generous whitespace for breathing room
- Asymmetric grid layouts for visual interest
- Consistent border radius (12–18px)
- Smooth, natural motion throughout

---
\n## 12. Accessibility Requirements

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support (tab order, focus states)
- Skip-to-content link for screen readers
- Sufficient color contrast ratios (WCAG AA minimum)
- Respect prefers-reduced-motion user preference
- Alt text for all images
- Form labels and error messages

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

## 14. Design Style\n
- **Overall Aesthetic:** Dark, futuristic, high-tech with Apple/Awwwards-level polish
- **Color Scheme:** Deep blue gradients on pure black background with white text and teal accents
- **Visual Depth:** Multi-layered glassmorphism cards with soft shadows and backdrop blur creating strong spatial hierarchy
- **Motion Language:** Smooth, physics-based animations with magnetic interactions and scroll-linked reveals
- **3D Integration:** Subtle WebGL particle systems and geometric shapes adding immersive depth without overwhelming content
- **Interactive Feedback:** Magnetic cursor with scale/distortion, energy ripples on buttons, and tactile 3D card tilts
- **Typography Treatment:** Bold Poppins headings with tight spacing paired with clean Inter body text, fluid scaling across devices
- **Border Styling:** Consistent12–18px rounded corners with gradient borders on glassmorphic elements

---
\n## 15. Final Outcome

A **premium, immersive portfolio experience** that:
- Feels alive and responsive to user interaction
- Performs flawlessly across devices (60fps target)
- Clearly demonstrates advanced frontend, animation, and WebGL expertise
- Maintains all original content and information architecture
- Achieves Awwwards/Apple-level visual and interaction quality
- Serves as a compelling showcase for WordPress development services