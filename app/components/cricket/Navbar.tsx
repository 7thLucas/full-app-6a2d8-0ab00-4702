import { Search, Bell, Tv } from "lucide-react";
import { liveTicker } from "~/data/cricket-data";
import type { TDefaultConfigurableData } from "~/modules/configurables/src/constants/configurables.default";

interface NavbarProps {
  appName: string;
  logoUrl?: string;
  navLinks?: TDefaultConfigurableData["navLinks"];
  primaryColor?: string;
}

export function Navbar({ appName, logoUrl, navLinks, primaryColor = "#EF4444" }: NavbarProps) {
  const defaultNavLinks = [
    { label: "Live", href: "#live" },
    { label: "Schedule", href: "#schedule" },
    { label: "Series", href: "#series" },
    { label: "Teams", href: "#teams" },
    { label: "Fantasy", href: "#fantasy" },
  ];

  const links = navLinks && navLinks.length > 0 ? navLinks : defaultNavLinks;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "#0A0E1A", borderBottom: "1px solid #1F2F44" }}
      role="banner"
    >
      {/* Main nav row */}
      <div className="max-w-[1440px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label={`${appName} home`}>
          {logoUrl && logoUrl !== "FILL_LOGO_URL_HERE" ? (
            <img src={logoUrl} alt={`${appName} logo`} className="h-8 w-auto" />
          ) : (
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${primaryColor}22`, border: `1.5px solid ${primaryColor}66` }}
                aria-hidden="true"
              >
                <Tv size={16} style={{ color: primaryColor }} />
              </div>
              <span className="font-score font-black text-xl tracking-wide text-white" style={{ letterSpacing: "0.02em" }}>
                {appName.toUpperCase()}
              </span>
            </div>
          )}
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-[#9CA3AF] hover:text-white text-sm font-semibold transition-colors rounded-lg hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={18} />
          </button>
          <button
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-bold transition-all hover:opacity-90 active:scale-95"
            style={{ background: primaryColor }}
            aria-label="Login"
          >
            Login
          </button>
        </div>
      </div>

      {/* Live ticker */}
      <div
        className="border-t border-[#1F2F44] overflow-hidden h-8 flex items-center"
        style={{ background: "rgba(0,0,0,0.4)" }}
        aria-label="Live score ticker"
        aria-live="polite"
      >
        <div className="flex-shrink-0 px-3 flex items-center gap-1.5 border-r border-[#1F2F44] h-full">
          <span className="w-2 h-2 rounded-full animate-live-pulse" style={{ background: "#EF4444" }} aria-hidden="true" />
          <span className="text-[#EF4444] text-[11px] font-black tracking-widest">LIVE</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="animate-ticker-scroll whitespace-nowrap flex items-center h-8">
            {[...liveTicker, ...liveTicker].map((item, i) => (
              <span key={i} className="inline-flex items-center h-full px-6">
                <span className="text-[#9CA3AF] text-[11px] font-medium">{item}</span>
                <span className="mx-6 text-[#1F2F44] text-[11px]">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
