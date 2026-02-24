# DevSpace - Tech Blog for Programmers

## Project Overview
- **Project Name**: DevSpace
- **Type**: Personal Tech Blog / Portfolio Website
- **Core Functionality**: Technical articles display, code sharing, personal projects showcase
- **Target Users**: North American tech recruiters, hiring managers, fellow developers
- **Design Philosophy**: "Minimalist Cyberpunk" - Silicon Valley minimalism with subtle cyberpunk glow effects

---

## UI/UX Specification

### 1. Layout Structure

#### Page Layout
- **Single Column Centered Layout**
  - Max width 768px for article pages
  - Max width 1024px for homepage
- **Grid System**: Desktop 12-column grid, mobile 16px/24px padding

#### Header (Glassmorphism)
- Position: Fixed top, sticky
- Height: 64px
- Background: `rgba(11, 17, 32, 0.8)` with `backdrop-blur-xl`
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Left: Terminal-style Logo `~/dev/blog`
- Right: Navigation + Command+K Search + Dark/Light Mode Toggle

#### Hero Section
- Full viewport height minus header
- Typewriter effect for self-introduction
- Subtle animated gradient background

#### Content Sections
- Article Grid: 2 columns on desktop, 1 column on mobile
- Tech Stack: Grid of 6-8 items

---

### 2. Visual Design

#### Color Palette (Dark Mode First)

**CSS Variables**
```css
/* Dark Mode (Default) */
--background: #0B1120          /* Deep Navy/Black */
--foreground: #E2E8F0           /* Slate 200 */
--primary: #38BDF8               /* Sky Blue - Tech Blue */
--accent: #818CF8               /* Indigo */
--muted: #64748B                /* Slate 500 */
--border: #1E293B                /* Slate 800 */
--code-bg: #1E293B              /* Slate 800 */

/* Light Mode */
--background: #F8FAFC            /* Slate 50 */
--foreground: #0F172A            /* Slate 900 */
--primary: #0284C7               /* Sky 600 */
--accent: #6366F1                /* Indigo 500 */
--muted: #64748B                /* Slate 500 */
--border: #E2E8F0                /* Slate 200 */
--code-bg: #F1F5F9              /* Slate 100 */

/* Glow Effects */
--glow-primary: rgba(56, 189, 248, 0.3)
--glow-accent: rgba(129, 140, 248, 0.3)
```

#### Typography

**Font Stack**
- **Headings**: `Inter`, weight 700/800
- **Body**: `Inter`, `system-ui`, weight 400/500
- **Code**: `JetBrains Mono`, `Fira Code`, weight 400

**Type Scale**
- H1: 3rem (48px), weight 800, line-height 1.1
- H2: 2rem (32px), weight 700, line-height 1.2
- H3: 1.5rem (24px), weight 600, line-height 1.3
- Body: 1rem (16px), weight 400, line-height 1.7
- Small: 0.875rem (14px), weight 400

#### Visual Effects

**Card Hover Effects**
- Transform: `translateY(-4px)`
- Box-shadow: `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px var(--glow-primary)`
- Border: 1px solid `rgba(56, 189, 248, 0.3)`

**Code Block Styling**
- Background: One Dark Pro theme colors
- File name header with language badge
- Copy button (top-right)
- Line numbers (optional)
- Syntax highlighting

**Skeleton Loading**
- Animated gradient shimmer effect
- Gradient: `linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.1), transparent)`

---

### 3. Component Specifications

#### 3.1 Command Palette (cmdk)
- Trigger: `Cmd+K` (Mac) / `Ctrl+K` (Windows)
- Centered modal overlay
- Search input with icon
- Results grouped by: Articles, Projects, Tags
- Keyboard navigation support
- Recent searches

#### 3.2 Article Card
- **Structure**:
  - Title (H3)
  - Date + Read time
  - Tags (max 3)
  - Excerpt (2 lines max)
- **States**:
  - Default: Subtle border
  - Hover: Glow effect + lift

#### 3.3 Code Block
- **Structure**:
  - Header bar: File name + Language badge + Copy button
  - Code area with syntax highlighting
- **Copy Functionality**:
  - Click to copy
  - Success toast notification
  - Icon changes from copy to checkmark

#### 3.4 Tech Stack Grid
- **Layout**: 4 columns desktop, 2 columns mobile
- **Items**: 8 technology icons
- **Default State**: Grayscale (opacity 0.5)
- **Hover State**: Full color + scale(1.1) + glow

---

## Functionality Specification

### Core Features

1. **Markdown Article Support**
   - Frontmatter parsing (title, date, tags, excerpt)
   - GitHub Flavored Markdown (GFM)
   - Code syntax highlighting
   - Automatic table of contents

2. **Search Functionality**
   - Full-text search across articles
   - Search by title, content, tags
   - Instant results (< 200ms)

3. **Dark/Light Mode**
   - System preference detection
   - Manual toggle
   - No flash on load (theme-provider)
   - Persistent preference (localStorage)

4. **Code Features**
   - Syntax highlighting (One Dark Pro)
   - One-click copy
   - Language detection

5. **RSS Feed**
   - `/rss.xml` endpoint
   - Full article content
   - Proper metadata

6. **SEO Optimization**
   - Meta tags
   - Open Graph tags
   - Structured data (JSON-LD)
   - Sitemap

### User Interactions

- **Navigation**: Smooth scroll, active state indicators
- **Search**: Keyboard shortcut, fuzzy search
- **Articles**: Reading progress indicator, share buttons
- **Code**: Copy feedback, language badge

---

## Technical Implementation

### Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Theme**: next-themes
- **Search**: cmdk
- **Markdown**: react-markdown + remark-gfm
- **Syntax Highlighting**: react-syntax-highlighter

### Project Structure
```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ArticleCard.tsx
│   ├── ArticleGrid.tsx
│   ├── CodeBlock.tsx
│   ├── TechStack.tsx
│   ├── CommandPalette.tsx
│   ├── ThemeToggle.tsx
│   └── Layout.tsx
├── pages/
│   ├── Home.tsx
│   ├── Article.tsx
│   └── Blog.tsx
├── content/
│   └── posts/          # Markdown articles
├── lib/
│   ├── utils.ts
│   └── markdown.ts
├── hooks/
│   └── useTheme.ts
├── styles/
│   └── index.css
└── App.tsx
```

---

## Acceptance Criteria

### Performance
- [ ] Lighthouse Score: 95+
- [ ] LCP < 1.2 seconds
- [ ] First Contentful Paint < 0.8 seconds

### Responsive Design
- [ ] Mobile: 320px - 767px
- [ ] Tablet: 768px - 1023px
- [ ] Desktop: 1024px+
- [ ] Code blocks: Horizontal scroll on mobile

### Accessibility
- [ ] WCAG 2.1 AA compliant
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] ARIA labels

### Visual
- [ ] Dark/Light mode: No flash on load
- [ ] Smooth animations (60fps)
- [ ] Consistent spacing
- [ ] Typography hierarchy
