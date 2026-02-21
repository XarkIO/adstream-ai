# AdStream AI - PM Workflow & Architecture

## Project Workflow

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ADSTREAM AI WORKFLOW                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐│
│  │   STEP 1     │───▶│   STEP 2     │───▶│   STEP 3     │───▶│   STEP 4     ││
│  │  CREATIVE    │    │  STRATEGIC   │    │  SCRIPTING   │    │    VIDEO    ││
│  │ INGESTION    │    │  ALIGNMENT   │    │ & STORYBOARD │    │  SYNTHESIS  ││
│  └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘│
│        │                    │                    │                    │         │
│        ▼                    ▼                    ▼                    ▼         │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐│
│  │ Competitor   │    │   Visual    │    │   Script    │    │   Output    ││
│  │ Analysis     │    │   Grid      │    │  Generator   │    │  Package    ││
│  │              │    │              │    │              │    │              ││
│  │ - URLs       │    │ - Vibe      │    │ - Hook       │    │ - 10 Videos ││
│  │ - Beat Map  │    │ - Music     │    │ - Body       │    │ - Ad Copy   ││
│  │ - Hook Type  │    │ - Animation │    │ - CTA        │    │ - Insights   ││
│  └──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘│
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step Analysis & Optimization

### STEP 1: Creative Ingestion & Intelligence
**Input:** Brand URL, Competitor URLs (TikTok/IG/YT), Brand Assets

**Process:**
1. User inputs URLs
2. AI Scraper deconstructs competitor videos
3. Extract Metadata Map

**Output:** Visual Beat Map, Hook Type Classification, Winning Creative Element

**Optimization:**
- Parallel scraping (fetch all competitor URLs simultaneously)
- Cache results to avoid re-scraping
- Use AI classification for hook types (Negative vs Visual)

---

### STEP 2: Strategic Alignment (Dashboard)
**Input:** Step 1 data + User preferences

**Process:**
1. User selects Vibe, Music, Animation via Visual Grid
2. System maps choices to goal
3. Constraint enforcement (prevent conflicting styles)

**Output:** Unified Style Prompt

**Optimization:**
- Pre-defined style combinations (reduce conflict)
- Real-time preview of selections
- Save preferences for repeat users

---

### STEP 3: Scripting & Storyboarding
**Input:** Step 2 output + Reference Image

**Process:**
1. Generate 3-part script (Hook-Body-CTA)
2. Create 3 hook variations
3. Generate 5-8 keyframe images

**Output:** 6-Panel Visual Script, Script Score

**Optimization:**
- A/B variation logic for hook types
- Industry-specific CTR benchmarks
- Focus masking (product ≥30% screen)

---

### STEP 4: AI Video Synthesis
**Input:** Storyboard + Audio

**Process:**
1. Call Video API (Veo/Runway/Luma)
2. Use Reference Image as Global Seed
3. Quality Guard AI check

**Output:** 10x 20s MP4, Ad Copy Pack, Creative Insights Report

**Optimization:**
- Batch diversity (unique hooks, consistent branding)
- Frame-interpolation check (auto-regenerate if distortion >15%)
- Parallel video generation

---

## Project Structure

```
adstream-ai/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx               # Main dashboard
│   ├── globals.css            # Control room styles
│   │
│   ├── components/
│   │   ├── Timeline.tsx       # 20s color-coded timeline
│   │   ├── AssetTray.tsx      # Drag-drop sidebar
│   │   ├── StepIndicator.tsx  # Progress tracker
│   │   ├── Step1Ingestion.tsx # Creative input form
│   │   ├── Step2Strategic.tsx  # Visual grid
│   │   ├── Step3Scripting.tsx  # Script/storyboard
│   │   ├── Step4Synthesis.tsx   # Video output
│   │   │
│   │   └── ui/                # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Card.tsx
│   │       └── ...
│   │
│   ├── lib/
│   │   ├── scraper.ts         # AI video scraper logic
│   │   ├── classifier.ts       # Hook type classifier
│   │   ├── scriptGenerator.ts  # Script/hook generator
│   │   ├── videoApi.ts        # Veo/Runway/Luma integration
│   │   └── qualityGuard.ts    # Distortion checker
│   │
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   │
│   └── utils/
│       └── helpers.ts          # Utility functions
│
├── public/
│   └── assets/                # Static assets
│
├── spec/
│   └── SPEC.md               # Project specification
│
└── package.json
```

---

## Key Components Analysis

### 1. Timeline Component
**Purpose:** Visual 20-second ad duration bar

**Segments:**
- 00-03s: THE HOOK (Neon Blue #00FFFF)
- 03-17s: THE STORY (Dark Grey #333333)
- 17-20s: THE CTA (Electric Purple #8B5CF6)

**Optimization:**
- Clickable segments for direct navigation
- Hover tooltips showing time range
- Animated progress indicator

---

### 2. Asset Tray
**Purpose:** Drag-drop area for reference materials

**Features:**
- Reference Videos section
- Product Photos section
- Drag-to-storyboard functionality

**Optimization:**
- Preview thumbnails on hover
- Bulk upload support
- Auto-organize by type

---

### 3. Step 1 - Creative Ingestion
**Inputs:**
- Brand URL
- Competitor URLs (up to 5)
- Brand Assets (logo, product images)

**AI Processing:**
- Video metadata extraction
- Visual beat mapping (cut timing)
- Hook classification (Negative/Visual)
- Cross-platform pattern analysis

---

### 4. Step 2 - Strategic Alignment
**Visual Grid Options:**

| Category | Options |
|----------|---------|
| Vibe | Minimal, Bold, Premium, Playful, Professional |
| Music | Upbeat, Calm, Corporate, Trendy, Cinematic |
| Animation | UI Overlays, Cinematic B-Roll, Stop Motion, 3D Render, Live Action |

**Constraints:**
- Minimal Vibe + High-Octane Glitch = BLOCKED
- Premium Vibe + Cartoon Animation = WARNING

---

### 5. Step 3 - Scripting
**Script Structure:**
```
[00-03s] HOOK - 3 variations
  - The Question: "Tired of X?"
  - The Stat: "90% of people fail at Y"
  - The Visual: "Look at this transformation"

[03-17s] BODY - Main content
  - Problem/Agitation
  - Solution/Value
  - Social Proof

[17-20s] CTA
  - Shop Now
  - Learn More
  - Install App
```

---

### 6. Step 4 - Video Synthesis
**API Integrations:**
- Google Veo (preferred)
- Runway ML
- Luma Dream Machine

**Quality Guard:**
- Frame-interpolation check
- Product distortion detection (>15% = regenerate)
- Flicker detection

---

## Success Metrics

| Phase | Metric | Target |
|-------|--------|--------|
| Step 1 | Competitor videos analyzed | 10+ per brand |
| Step 2 | Style conflicts prevented | 100% |
| Step 3 | Script generation time | <30s |
| Step 4 | Video quality pass rate | >85% |
| Overall | End-to-end pipeline | <5 min |

---

## PM Notes

**Priority Order:**
1. Build working UI shell (Step 1-4 navigation)
2. Implement Step 1 (ingestion) with mock data
3. Implement Step 2 (dashboard)
4. Implement Step 3 (scripting)
5. Integrate video APIs (Step 4)
6. Add real AI processing

**Risk Mitigation:**
- Start with mock data for all steps
- Use placeholder videos during development
- Test with small batches first

---

## Deliverables for Marketing Manager

1. **10 Video Ads** - MP4, 9:16, 20s each
2. **Ad Copy Pack** - Headlines + Primary Text (Meta/Google ready)
3. **Creative Insights Report** - Why these hooks work
