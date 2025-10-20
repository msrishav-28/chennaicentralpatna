<high_level_design>
## 1. Brand & Art Direction Overview

The Rameshwaram Cafe presents a **traditional South Indian restaurant experience** with a sophisticated, heritage-inspired aesthetic. The design emphasizes cultural authenticity through:

- **Dark, dramatic backdrop** (deep black #1a1a1a) creating premium contrast
- **Rich copper/bronze accent color** (#c87533, #d87939) representing traditional South Indian metalwork and temple architecture
- **Architectural heritage photography** featuring ornate temple corridors as hero imagery
- **Organic food photography** showcasing authentic South Indian dishes on banana leaves and traditional serving vessels
- **Elegant serif typography** for headings paired with clean sans-serif for body text
- **Minimalist layout** with generous white space on content sections (#f5ede5 cream background)
- **Cultural symbols** including geometric mandala-style logo
- **Fixed sidebar navigation** in dark theme with vertical brand identity

The overall aesthetic balances **traditional Indian heritage with modern digital design**, creating a premium yet approachable restaurant brand identity.

---

## 2. Color Palette (Dark Theme)

| Token | HEX / RGB | Usage | Notes |
|-------|-----------|-------|-------|
| **Primary Background** | `#1a1a1a` | Sidebar, footer, dark sections | Deep charcoal black |
| **Secondary Background** | `#2a2a2a` | Hover states, overlays | Slightly lighter black |
| **Light Background** | `#f5ede5` | Main content sections, About Us | Warm cream/beige |
| **Alternate Light BG** | `#fef5ed` | Gallery section background | Very light peach/cream |
| **Primary Accent** | `#c87533` | Logo text, primary brand color | Copper/bronze |
| **Secondary Accent** | `#d87939` | Links, hover states, CTA backgrounds | Warm orange-copper |
| **Tertiary Accent** | `#b36428` | Time badges, secondary elements | Darker copper |
| **Text Primary** | `#ffffff` | White text on dark backgrounds | Pure white |
| **Text Secondary** | `#333333` | Body text on light backgrounds | Dark gray/black |
| **Text Tertiary** | `#666666` | Descriptive text, captions | Medium gray |
| **Heading Accent** | `#4a4a4a` | Section headings on light bg | Charcoal gray |
| **Border/Divider** | `#e0e0e0` | Subtle borders | Light gray |
| **Overlay Dark** | `rgba(0,0,0,0.6)` | Hero image overlays | Semi-transparent black |

---

## 3. Typography Scale

### Font Families
- **Primary Headings**: `'Libre Baskerville', serif` or similar elegant serif
- **Secondary Headings**: `'Playfair Display', serif` (for stylistic headings like "Authentic")
- **Body/Navigation**: `'Open Sans', 'Helvetica Neue', Arial, sans-serif`
- **Accent Script**: `'Great Vibes', cursive` or similar for decorative "Authentic" label

### Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|------|--------|-------------|----------------|-------|
| **H1 (Hero)** | Libre Baskerville | 72px | 700 | 1.2 | 2px | #ffffff |
| **H2 (Sections)** | Libre Baskerville | 48px | 700 | 1.3 | 1px | #333333 |
| **H3 (Subsections)** | Open Sans | 32px | 600 | 1.4 | 0.5px | #4a4a4a |
| **H4 (Brand Name)** | Open Sans | 24px | 600 | 1.4 | 0.5px | #ffffff |
| **H5 (Values)** | Open Sans | 18px | 600 | 1.5 | 0 | #333333 |
| **Body Text** | Open Sans | 16px | 400 | 1.8 | 0 | #666666 |
| **Navigation** | Open Sans | 14px | 600 | 1.5 | 1px | #ffffff |
| **Button Text** | Open Sans | 15px | 600 | 1 | 1px | #ffffff |
| **Caption/Label** | Open Sans | 13px | 400 | 1.5 | 0 | #888888 |
| **Script Accent** | Great Vibes | 42px | 400 | 1.2 | 0 | #d87939 |
| **Logo Brand** | Open Sans | 28px | 700 | 1.2 | 2px | #c87533 |
| **Logo Tagline** | Open Sans | 12px | 400 | 1.3 | 3px | #c87533 |

### Text Transforms
- Navigation links: `UPPERCASE`
- Logo text: `UPPERCASE`
- Button text: `UPPERCASE`
- Section headings: `UPPERCASE` where applicable

---

## 4. Spacing & Layout Grid

### Layout Structure
- **Fixed Sidebar**: 300px width (left side)
- **Main Content Area**: `calc(100% - 300px)` width
- **Container Max Width**: 1200px (centered)
- **Content Padding**: 60px horizontal, 80px vertical

### Spacing Scale (8pt Grid System)

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 8px | Tight spacing, icon gaps |
| `space-sm` | 16px | Small gaps, button padding |
| `space-md` | 24px | Medium gaps, card padding |
| `space-lg` | 32px | Large gaps, section padding |
| `space-xl` | 48px | Extra large gaps |
| `space-2xl` | 64px | Section margins |
| `space-3xl` | 80px | Major section spacing |
| `space-4xl` | 120px | Hero section spacing |

### Grid System
- **Sidebar Navigation**: Fixed position, full height
- **Hero Section**: Full viewport height (100vh)
- **Content Sections**: Full width with centered containers
- **Values Grid**: 5 columns on desktop, circular icon layout
- **Gallery Grid**: 2x2 grid for food images

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

---

## 5. Visual Effects & Treatments

### Shadows
```css
/* Sidebar shadow */
box-shadow: 2px 0 10px rgba(0,0,0,0.1);

/* Button shadow */
box-shadow: 0 4px 12px rgba(200,117,51,0.3);

/* Card hover shadow */
box-shadow: 0 8px 24px rgba(0,0,0,0.15);

/* Image overlay */
box-shadow: inset 0 0 0 2000px rgba(0,0,0,0.4);
```

### Border Radius
- **Buttons**: `4px`
- **Images**: `8px` (food gallery images)
- **Logo Circle**: `50%` (circular mandala design)
- **Navigation items**: `0px` (sharp edges)

### Transitions
```css
/* Standard transition */
transition: all 0.3s ease;

/* Button hover */
transition: background-color 0.3s ease, transform 0.2s ease;

/* Navigation hover */
transition: color 0.3s ease, background-color 0.3s ease;

/* Image hover */
transition: transform 0.5s ease, filter 0.3s ease;
```

### Hover Effects
- **Buttons**: Background darkens, slight scale (1.05)
- **Navigation**: Background color change to accent
- **Images**: Scale (1.1), brightness increase
- **Links**: Color shift to accent color

### Overlays & Filters
```css
/* Hero image overlay */
background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));

/* Values section overlay */
background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7));
```

### Gradients
- **Time badge**: `linear-gradient(135deg, #c87533, #d87939)`
- **Hero overlay**: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))`

---

## 6. Component Styles

### Navigation (Fixed Sidebar)
```css
width: 300px;
height: 100vh;
background: #1a1a1a;
position: fixed;
left: 0;
top: 0;
padding: 40px 30px;
box-shadow: 2px 0 10px rgba(0,0,0,0.1);
```

**Logo Area:**
- Centered circular mandala icon (80px diameter)
- Brand name: "THE RAMESHWARAM CAFE" (#c87533, 28px, bold, uppercase, 2px letter-spacing)
- Vertical alignment, 40px top padding

**Navigation Menu:**
```css
margin-top: 60px;
list-style: none;
text-align: center;
```

**Nav Items:**
```css
padding: 15px 20px;
margin: 8px 0;
font-size: 14px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
color: #ffffff;
transition: all 0.3s ease;
border-radius: 0;
```

**Nav Hover:**
```css
background: #c87533;
color: #ffffff;
```

**Social Icons:**
```css
position: absolute;
bottom: 100px;
display: flex;
gap: 20px;
justify-content: center;
```

**Footer Info:**
```css
position: absolute;
bottom: 30px;
font-size: 11px;
color: #888888;
text-align: center;
line-height: 1.6;
```

### Hero Section (Slider)
```css
height: 100vh;
background-size: cover;
background-position: center;
position: relative;
display: flex;
align-items: center;
justify-content: center;
```

**Hero Overlay:**
```css
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.4);
```

**Hero Content:**
```css
position: relative;
z-index: 2;
text-align: center;
color: #ffffff;
```

**Hero Heading:**
```css
font-family: 'Libre Baskerville', serif;
font-size: 72px;
font-weight: 700;
letter-spacing: 2px;
margin-bottom: 20px;
text-transform: uppercase;
```

**Hero Subheading:**
```css
font-size: 24px;
font-weight: 400;
margin-bottom: 40px;
```

**Hero CTA Button:**
```css
background: #c87533;
color: #ffffff;
padding: 16px 40px;
font-size: 15px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
border-radius: 4px;
border: none;
cursor: pointer;
transition: all 0.3s ease;
box-shadow: 0 4px 12px rgba(200,117,51,0.3);
```

**CTA Hover:**
```css
background: #b36428;
transform: translateY(-2px);
box-shadow: 0 6px 16px rgba(200,117,51,0.4);
```

### About Section
```css
background: #f5ede5;
padding: 80px 60px;
```

**Section Heading:**
```css
font-family: 'Libre Baskerville', serif;
font-size: 48px;
font-weight: 700;
color: #333333;
text-align: center;
margin-bottom: 40px;
text-transform: uppercase;
letter-spacing: 1px;
```

**Body Text:**
```css
max-width: 900px;
margin: 0 auto;
font-size: 16px;
line-height: 1.8;
color: #666666;
text-align: center;
```

### Values Section
```css
background-image: url('food-image.jpg');
background-size: cover;
background-position: center;
position: relative;
padding: 100px 60px;
```

**Values Overlay:**
```css
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.7);
```

**Values Heading:**
```css
font-family: 'Libre Baskerville', serif;
font-size: 52px;
color: #ffffff;
text-align: center;
margin-bottom: 80px;
position: relative;
z-index: 2;
```

**Values Grid:**
```css
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 40px;
max-width: 1200px;
margin: 0 auto;
position: relative;
z-index: 2;
```

**Value Item:**
```css
text-align: center;
color: #ffffff;
```

**Value Letter:**
```css
font-size: 52px;
font-weight: 700;
color: #d87939;
margin-bottom: 15px;
```

**Value Description:**
```css
font-size: 14px;
line-height: 1.5;
font-weight: 400;
```

### Menu Section
```css
background: #f5ede5;
padding: 80px 60px;
```

**Menu Image:**
```css
max-width: 800px;
margin: 40px auto;
display: block;
border-radius: 8px;
```

**Time Badge:**
```css
display: inline-block;
background: linear-gradient(135deg, #c87533, #d87939);
color: #ffffff;
padding: 10px 24px;
border-radius: 25px;
font-size: 15px;
font-weight: 600;
margin-bottom: 20px;
```

**Menu Items:**
```css
font-size: 18px;
font-weight: 600;
color: #333333;
line-height: 2;
text-transform: uppercase;
```

**Menu CTA:**
```css
background: #333333;
color: #ffffff;
padding: 16px 40px;
font-size: 15px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 1px;
border-radius: 4px;
margin: 40px auto;
display: inline-block;
transition: all 0.3s ease;
```

### Gallery Section (Tasteful)
```css
background: #fef5ed;
padding: 80px 60px;
```

**Gallery Label (Script):**
```css
font-family: 'Great Vibes', cursive;
font-size: 42px;
color: #d87939;
text-align: center;
margin-bottom: 10px;
```

**Gallery Heading:**
```css
font-family: 'Libre Baskerville', serif;
font-size: 56px;
font-weight: 700;
color: #333333;
text-align: center;
margin-bottom: 60px;
text-transform: uppercase;
```

**Gallery Grid:**
```css
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
max-width: 800px;
margin: 0 auto;
```

**Gallery Image:**
```css
width: 100%;
border-radius: 8px;
transition: transform 0.5s ease;
box-shadow: 0 4px 12px rgba(0,0,0,0.1);
```

**Image Hover:**
```css
transform: scale(1.05);
box-shadow: 0 8px 24px rgba(0,0,0,0.2);
```

### Footer
```css
background: #1a1a1a;
color: #888888;
padding: 30px 60px;
text-align: center;
font-size: 13px;
line-height: 1.8;
```

**Footer Links:**
```css
color: #1e90ff;
text-decoration: none;
transition: color 0.3s ease;
```

**Footer Link Hover:**
```css
color: #d87939;
```

---

## 7. Site Sections (In Order)

1. **Fixed Sidebar Navigation**
   - Logo with circular mandala icon
   - Brand name: "THE RAMESHWARAM CAFE"
   - Navigation menu (HOME, ABOUT US, MENU, CONTACT US)
   - Social media icons (Facebook, Twitter, Instagram)
   - Copyright and design credit

2. **Hero Section (Carousel)**
   - Full-screen image background (temple architecture)
   - Dark overlay (rgba(0,0,0,0.4))
   - "WELCOME!" heading
   - "The Rameshwaram Cafe" subheading
   - "CONTACT US" CTA button
   - Carousel navigation arrows

3. **About Us Section**
   - Cream background (#f5ede5)
   - "ABOUT US" heading
   - Descriptive paragraph about the brand
   - Centered layout, max-width 900px

4. **Values Section**
   - Food photography background with dark overlay
   - "Values" heading in white
   - Grid of 10 value items (RAMESHWARAM acronym)
   - Each with large letter in copper color and description

5. **Our Menu Section**
   - Cream background (#f5ede5)
   - "OUR MENU" heading
   - Time badge (6:30am to 11:30am & 4pm to 1am)
   - Menu image/sample
   - List of menu items in two columns
   - "VIEW OUR COMPLETE MENU" CTA button (dark background)

6. **Gallery Section**
   - Light peach background (#fef5ed)
   - "Authentic" in script font
   - "TASTEFUL" heading
   - 2x2 grid of food images
   - Images with hover effects

7. **Footer**
   - Dark background (#1a1a1a)
   - Copyright notice
   - Design credit link
   - Social media icons (repeated)
</high_level_design>

<theme>
dark
</theme>

<sections>
<clone_section>
    <file_path>src/components/sections/sidebar-navigation.tsx</file_path>
    <design_instructions>
Clone the fixed left sidebar navigation with dark background (#1a1a1a to #0d0d0d), featuring the ornate geometric logo at top, brand name "THE RAMESHWARAM CAFE" in copper/orange gradient text (uppercase, spaced lettering), vertical navigation menu with items (HOME, ABOUT US, MENU, CONTACT US) in white/cream text with hover effects, social media icons (Facebook, Twitter, Instagram) at bottom, and copyright text "Copyright © 2022 The Rameshwaram Cafe. All Rights Reserved" with "Design By PETPOOJA" link in blue. Width: 300px on desktop, collapsible hamburger menu on mobile. Typography: serif font for brand, sans-serif for menu items.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/logo-2-1.png?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/hero-carousel.tsx</file_path>
    <design_instructions>
Clone the full-width hero carousel section with multiple slides showing architectural temple corridor background images. Each slide displays centered white text "WELCOME!" (large, bold, uppercase), subtitle "The Rameshwaram Cafe" in smaller elegant font, and a dark button "CONTACT US" with white text. Implement auto-rotating carousel with navigation arrows on left/right edges, smooth fade transitions between slides. Background images should have subtle darkening overlay for text readability. Carousel height: 100vh on desktop, 70vh on mobile. Include loading spinner initially.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide1-10.jpg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/slide2-11.jpg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/loading-8.gif?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/about-section.tsx</file_path>
    <design_instructions>
Clone the "ABOUT US" section with light beige/cream background (#f5f0e8), centered dark heading "ABOUT US" in bold serif font (3rem desktop, 2rem mobile), followed by paragraph text in dark gray describing the restaurant as premium South Indian QSR chain under M/s. Altran Ventures Pvt. Ltd., emphasizing fresh ingredients, authentic recipes, and hygiene standards. Maximum width container (1200px), padding 80px vertical on desktop (50px mobile), 40px horizontal. Line height 1.8 for readability, font-size 1.1rem for body text.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/values-section.tsx</file_path>
    <design_instructions>
Clone the "Values" section with full-width background image of colorful South Indian dishes (rice, chutneys on banana leaf). Dark overlay (rgba(0,0,0,0.7)) for contrast. Centered white heading "Values" in elegant script/handwritten font. Display 11 value items arranged in circular/scattered layout with letters R-A-M-E-S-H-W-A-R-A-M, each letter in large orange/copper color (4rem) with descriptive text below in white (e.g., "R - Reliable Brand Experience", "A - Attention To Details"). Responsive grid on mobile (2 columns). Section height: auto-fit content, minimum 600px. Padding: 100px vertical.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/bg4-9.jpg?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/menu-preview-section.tsx</file_path>
    <design_instructions>
Clone the "OUR MENU" section with light cream background (#f5f0e8), centered heading "OUR MENU" in bold serif font (3rem). Display menu image showing timing badge "6:30am to 11:30am & 4pm to 1am" in orange/copper banner at top, followed by categorized menu items (VADA, IDLI, VEN PONGAL, etc.) in black text with hierarchical typography. Below menu image, centered dark button "VIEW OUR COMPLETE MENU" with hover effect (scale 1.05, background darken). Section padding: 80px vertical, 40px horizontal. Menu image max-width: 800px, centered with shadow effect.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/menu1-3.png?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/tasteful-gallery-section.tsx</file_path>
    <design_instructions>
Clone the "Authentic TASTEFUL" gallery section with light pink/cream background (#fdf5f0). Left side: "Authentic" in orange script font (2rem), "TASTEFUL" in bold dark serif font (4rem desktop, 2.5rem mobile). Right side: 2x2 grid of food images showing various South Indian dishes (vada with chutneys, pongal, idli, medu vada) on banana leaves/plates with rounded corners (8px), subtle shadow, gap of 20px between images. On hover: scale to 1.05 with smooth transition. Section padding: 80px vertical, responsive flex layout (column on mobile). Images: equal aspect ratio, object-fit cover.
    </design_instructions>
    <assets>["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic1-4.jpg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic2-5.jpg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic3-6.jpg?", "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e3b426fc-3685-4feb-bb4c-9a7a886042b9-therameshwaramcafe-org/assets/images/pic4-7.jpg?"]</assets>
  </clone_section>

  <clone_section>
    <file_path>src/components/sections/footer.tsx</file_path>
    <design_instructions>
Clone the footer section with dark background (#1a1a1a), centered copyright text "Copyright © 2022 The Rameshwaram Cafe. All Rights Reserved" in light gray (0.9rem), followed by "Design By PETPOOJA" with blue link color (#3b82f6) and underline on hover. Right-aligned social media icons (Facebook, Twitter, Instagram) in light gray with hover effect (color change to orange #d97706). Padding: 30px vertical, 40px horizontal. Responsive: stack elements vertically on mobile with centered alignment. Max-width: 1400px container.
    </design_instructions>
    <assets>[]</assets>
  </clone_section>
</sections>