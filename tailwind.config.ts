import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        card: "var(--card)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          secondary: "var(--accent-secondary)",
        },
        border: "var(--border)",
        hover: "var(--hover)",
        success: "var(--success)",
        error: "var(--error)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-geist-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.5rem, 5.5vw, 4.75rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "500" },
        ],
        "display-lg": [
          "clamp(1.875rem, 3.5vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" },
        ],
        "display-md": [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "500" },
        ],
      },
      spacing: {
        section: "clamp(7rem, 15vw, 12rem)",
        "section-sm": "clamp(4.5rem, 9vw, 8rem)",
      },
      maxWidth: {
        content: "1280px",
        prose: "56ch",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
