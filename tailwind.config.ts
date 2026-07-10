import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg0: "#080a10",
        bg1: "#101627",
        bg2: "#1a1039",
        mercury: "#7ff0e0",
        "mercury-dim": "#3fa89a",
        warm: "#ff9466",
        violet: "#9b7bff",
        "text-hi": "#eef2ff",
        "text-mid": "#aab2c8",
        "text-low": "#6b7390",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "26px",
        xl3: "30px",
      },
      keyframes: {
        sheen: {
          to: { backgroundPosition: "200% center" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blobIdle: {
          "0%, 100%": { borderRadius: "26px" },
          "50%": { borderRadius: "34px 22px 34px 22px" },
        },
        driftBg: {
          "0%": { filter: "hue-rotate(0deg) brightness(1)" },
          "100%": { filter: "hue-rotate(8deg) brightness(1.06)" },
        },
      },
      animation: {
        sheen: "sheen 7s linear infinite",
        floaty: "floaty 4.5s ease-in-out infinite",
        blobIdle: "blobIdle 9s ease-in-out infinite",
        driftBg: "driftBg 26s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
