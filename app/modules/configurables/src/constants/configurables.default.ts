/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  primary: string;
  secondary: string;
  accent: string;
};

export type TNavLink = {
  label: string;
  href: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  logoUrl: string;
  tagline?: string;
  brandColor: TBrandColor;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  navLinks?: TNavLink[];
  showWeather?: boolean;
  showWagonWheel?: boolean;
  showWinProbability?: boolean;
  showPointsTable?: boolean;
  footerText?: string;
  heroImage?: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "CricLive",
  logoUrl: "FILL_LOGO_URL_HERE",
  tagline: "Premium Cricket. Live. Broadcast-Grade.",
  brandColor: {
    primary: "#EF4444",
    secondary: "#F59E0B",
    accent: "#10B981",
  },
  backgroundColor: "#0A0E1A",
  cardBackgroundColor: "#111827",
  navLinks: [
    { label: "Live", href: "/" },
    { label: "Schedule", href: "/?tab=schedule" },
    { label: "Series", href: "/?tab=series" },
    { label: "Teams", href: "/?tab=teams" },
    { label: "Fantasy", href: "/?tab=fantasy" },
  ],
  showWeather: true,
  showWagonWheel: true,
  showWinProbability: true,
  showPointsTable: true,
  footerText: "© 2025 CricLive. Premium Cricket Broadcasting Platform.",
  heroImage: "",
};
