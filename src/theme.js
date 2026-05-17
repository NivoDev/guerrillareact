// Navy-purple design tokens used by styled-components via ThemeProvider.
// CSS variables live in index.css; this file mirrors them for JS access.
export const colors = {
  bgDeep: "#0d0c22",
  bgWarm: "#1a1835",
  bgPanel: "rgba(13, 12, 34, 0.78)",
  bgPanelSoft: "rgba(13, 12, 34, 0.55)",
  clay: "#667eea",   // CTA gradient start (periwinkle)
  ember: "#7c5fd0",  // CTA gradient mid
  ochre: "#764ba2",  // CTA gradient end (mauve)
  saffron: "#a78bfa",// accent / glow (light violet)
  moss: "#8b5cf6",
  jungle: "#6d4ec1",
  bone: "#f0eeff",
  sand: "#c4b5fd",
  sandSoft: "rgba(240, 238, 255, 0.85)",
  sandMuted: "rgba(240, 238, 255, 0.62)",
  border: "rgba(196, 181, 253, 0.22)",
  borderHot: "rgba(167, 139, 250, 0.55)",
};

export const fonts = {
  display: "'Cinzel', 'Marcellus', Georgia, serif",
  body: "'Manrope', 'Inter', system-ui, -apple-system, Segoe UI, sans-serif",
  accent: "'Cormorant Garamond', Georgia, serif",
};

// Kept for legacy import path compatibility.
export const cardColor = colors.bgPanel;
