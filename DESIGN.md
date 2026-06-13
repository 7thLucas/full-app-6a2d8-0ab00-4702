# CricLive — Design System

## Visual Identity
**Theme**: Dark broadcast — deep navy/charcoal backgrounds, vivid accent colors
**Aesthetic**: Professional sports TV overlay / broadcast graphics
**Inspiration**: Star Sports score ticker, JioHotstar match center, Cricbuzz live score

## Color Palette

### Core
| Token | Value | Usage |
|-------|-------|-------|
| `bg-pitch` | #0A0E1A | Page background (deepest dark) |
| `bg-card` | #111827 | Card/panel background |
| `bg-surface` | #1A2235 | Elevated surface |
| `bg-panel` | #1E2D40 | Secondary panels |
| `accent-live` | #EF4444 | LIVE badge, live indicators |
| `accent-score` | #F59E0B | Score highlights, boundaries |
| `accent-six` | #10B981 | Six celebrations, positive events |
| `accent-wicket` | #EF4444 | Wicket events, red danger |
| `text-primary` | #F9FAFB | Main text |
| `text-secondary` | #9CA3AF | Muted labels |
| `text-score` | #FFFFFF | Large score numbers |
| `border-subtle` | #1F2F44 | Card borders |
| `gradient-hero` | linear-gradient(135deg, #0A0E1A 0%, #1A2235 100%) | Hero areas |

### Team Accent Colors (per match)
- India: #FF6B35 (saffron-orange) + #138808 (green)
- Australia: #FFD700 (gold) + #006400 (dark green)
- England: #012169 (navy) + #C8102E (red)
- IPL Teams: CSK #F5A623, MI #004BA0, RCB #EC1C24, KKR #3B0066...

## Typography
**Display/Score**: 'Oswald' or 'Barlow Condensed' — bold, condensed, broadcast-style numerals
**Body/Commentary**: 'Inter' — clean, legible at small sizes
**Labels/Badges**: 'Inter' uppercase with letter-spacing

| Scale | Size | Weight | Usage |
|-------|------|--------|-------|
| Score Giant | 64px | 900 | Live score main number |
| Score Large | 40px | 700 | Innings totals |
| Display | 28px | 700 | Section headers |
| Body | 14px | 400 | Commentary text |
| Label | 11px | 600 | Uppercase badges |

## Layout & Grid
- Max width: 1440px, centered
- Primary sidebar: 320px (fixtures/schedule)
- Main content: flex-1
- Card border-radius: 12px (panels), 8px (sub-cards), 4px (badges)
- Spacing: 8px base unit

## Component Specifications

### 1. Top Nav Bar
- Fixed, 64px height
- Logo: "CricLive" in Oswald bold + red cricket ball icon
- Nav links: Live · Schedule · Series · Teams · Fantasy
- Right: Search, Notifications, Login CTA (bright orange)
- Background: #0A0E1A with bottom border #1F2F44
- LIVE ticker scrolling horizontally below nav (ongoing match scores)

### 2. LIVE Badge
- Background: #EF4444
- Text: "● LIVE" uppercase, 11px, 700 weight
- Pulsing animation: opacity 1 → 0.6, 1.2s ease-in-out infinite
- Border-radius: 4px, padding: 2px 8px

### 3. Match Hero Panel
- Full-width card, 180px min-height
- Left: Team A flag + logo + name + score (64px bold)
- Center: VS divider + match info (format, venue, overs)
- Right: Team B flag + logo + name + score
- Background: gradient from Team A color → Team B color (low opacity overlay)
- CRR / RRR badges below scores
- Win probability bar (split bar, team colors)

### 4. Scorecard Table
- Dark table, alternating row bg (#111827 / #1A2235)
- Batter name (bold white), dismissal info (gray italic below)
- Columns: R | B | 4s | 6s | SR
- Current batters highlighted with green left border
- Bowling table: O | M | R | W | Econ
- Current bowler highlighted with amber left border

### 5. Commentary Feed
- Reversed chronological order (latest first)
- Ball marker: colored circle — dot (gray), 1 (white), 4 (amber), 6 (green), W (red)
- Ball description: bold "4!" or "SIX!" then description text
- Highlighted background for 4s (amber tint), 6s (green tint), Ws (red tint)
- Scrollable, 400px max height

### 6. Win Probability Meter
- Animated horizontal split bar
- Left half: Team A color fill with percentage label
- Right half: Team B color fill with percentage label
- Smooth CSS transition on value change
- Shows "India 48%" | "Australia 52%"

### 7. Run Rate Graph
- Line chart: CRR (blue line) vs RRR (orange dashed line)
- X-axis: overs, Y-axis: run rate
- Grid lines subtle (#1F2F44)
- Data points labeled at hover
- Powered by recharts or similar

### 8. Wagon Wheel
- SVG circle divided into sectors (fine leg, mid-on, cover, etc.)
- Shot lines emanating from center — color coded by run value
- 4s: amber lines, 6s: green lines, singles: white thin lines
- Sector labels around perimeter

### 9. Match Status Badges
| Status | Color | Text |
|--------|-------|------|
| LIVE | #EF4444 pulse | ● LIVE |
| STUMPS | #F59E0B | STUMPS |
| COMPLETED | #10B981 | COMPLETED |
| UPCOMING | #6B7280 | UPCOMING |

### 10. Points Table
- Columns: Team | P | W | L | NR | NRR | Pts
- Sorted by points then NRR
- Top 4 highlighted with subtle gold/green left border
- Team logo (24px) next to name

### 11. Fixture Cards
- Compact horizontal card: team logos + names + date/time + venue
- Status badge top-right
- Hover: subtle lift + glow effect
- Series name as card label top-left (muted gray)

## Motion & Animation
- LIVE badge: pulse animation (opacity cycle)
- Score update: brief flash/highlight on number change (1s amber flash)
- Tab transition: fade + slide (150ms ease)
- Commentary new item: slide-in from top (200ms)
- Win probability: smooth fill transition (500ms ease)
- Card hover: translateY(-2px) + box-shadow increase (200ms)

## Responsive Breakpoints
- Mobile (< 768px): Stack columns, hide sidebar, collapsed tabs
- Tablet (768–1024px): Two-column, sidebar in drawer
- Desktop (> 1024px): Full three-panel layout

## Accessibility
- Color contrast AA minimum on all text
- Focus rings on all interactive elements
- ARIA labels on status badges and score regions
- Reduced motion support (prefers-reduced-motion)
