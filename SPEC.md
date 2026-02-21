# AdStream AI - Project Specification

## Project Overview
**Name:** AdStream AI
**Type:** Web Application (Marketing Tool)
**Purpose:** Streamline creation of high-converting short-form video ads for Meta and Google

---

## Core Features (from Specification)

### Step 1: Creative Ingestion & Intelligence
- Brand URL input
- Competitor URLs (TikTok/IG/YT)
- Brand Assets upload
- AI Scraper → Metadata Map
- Visual Beat Map extraction
- Hook Type classification (Negative/Visual)
- Cross-Reference Analysis across 3 platforms

### Step 2: Strategic Alignment (Dashboard)
- Visual Grid selection (Vibe, Music, Animation)
- Goal-based mapping (App Installs → UI Overlays)
- Constraint enforcement (prevent conflicting styles)
- Monksflow-style UI

### Step 3: Scripting & Storyboarding
- 3-part script generation (Hook-Body-CTA)
- 5-8 keyframe images
- 3 Hook variations (Question, Stat, Visual)
- A/B Variation Logic
- Script Score based on industry CTR

### Step 4: AI Video Synthesis
- Video API integration (Veo/Runway/Luma)
- Reference Image as Global Seed
- Frame-Interpolation Check
- Quality Guard AI (>15% distortion = auto-regenerate)
- 10x 20s MP4 output

---

## UI/UX Specification

### Timeline Bar (Top)
- 20-second duration
- Color-coded segments:
  - [00-03s: THE HOOK] - Neon Blue
  - [03-17s: THE STORY] - Dark Grey
  - [17-20s: THE CTA] - Electric Purple

### Asset Tray (Sidebar)
- Reference Videos
- Product Photos
- Drag-and-drop to storyboard panels

---

## Technical Architecture (To Be Determined)

### Frontend
- React/Next.js
- Drag-and-drop interface
- Video player components

### Backend
- API for video processing
- AI/ML integration (scraping, generation)
- Database for projects/assets

### Integrations
- Video APIs: Veo, Runway, Luma
- Scraping: Custom AI scraper
- Storage: Cloud storage for assets

---

## Phases

### Phase 1: MVP (Weeks 1-2)
- Basic UI shell
- Step 1: Creative Ingestion (basic scraping)
- Step 2: Strategic Dashboard (basic)
- Step 3: Scripting (text-based)
- Dummy video generation output

### Phase 2: Core (Weeks 3-4)
- Full scraping logic
- Real video API integration
- Quality Guard AI
- Full timeline UI

### Phase 3: Polish (Week 5)
- Advanced features
- Performance optimization
- Testing

---

## Success Criteria
- [ ] User can input brand/competitor URLs
- [ ] System extracts metadata from videos
- [ ] Dashboard allows visual selection
- [ ] Script generation works
- [ ] Video generation triggers (mock or real)
- [ ] Timeline UI displays correctly
- [ ] Asset tray drag-and-drop works

---

## Notes
- This is a complex project requiring multiple iterations
- Video APIs may require paid subscriptions
- Consider starting with mock data for testing

---

## Final Output Specification

### 1. Video Ads Package (10 videos)
- **Format:** High-res MP4
- **Aspect Ratio:** 9:16 (vertical, for Meta/Google)
- **Duration:** 20 seconds each
- **Variations:** Each video has unique "Hook" but consistent branding
- **Quality Check:** Frame-interpolation check, auto-regenerate if distortion >15%

### 2. Ad Copy Pack
- **Headlines:** Multiple options for Meta Ads Manager
- **Primary Text:** Copy suggestions optimized for conversion
- **Platform:** Meta/Google Ads Manager compatible
- **Variations:** A/B testing ready

### 3. Creative Insights Report
- **Format:** PDF or interactive dashboard
- **Content:** Explanation of why AI chose specific hooks
- **Research Basis:** Competitor analysis from Step 1
- **Includes:** Visual beat maps, hook type rationale, trend alignment
